import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { insertStartupSchema } from "@shared/schema";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation } from "wouter";

// Create a more strict form schema with additional validations
const startupFormSchema = insertStartupSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  founderName: z.string().min(2, "Founder name must be at least 2 characters"),
  founderEmail: z.string().email("Please enter a valid email address"),
  foundingYear: z
    .number()
    .min(1980, "Year must be at least 1980")
    .max(new Date().getFullYear(), `Year must be no later than ${new Date().getFullYear()}`),
  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .or(z.string().length(0))
    .optional()
    .transform(val => val || undefined),
});

const StartupForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const form = useForm<z.infer<typeof startupFormSchema>>({
    resolver: zodResolver(startupFormSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      foundingYear: new Date().getFullYear(),
      userBase: "",
      revenue: "",
      location: "",
      founderName: "",
      founderEmail: "",
      imageUrl: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof startupFormSchema>) => {
      const res = await apiRequest("POST", "/api/startups", data);
      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Startup listed successfully!",
        description: "Your startup has been added to our marketplace.",
      });
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error listing startup",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof startupFormSchema>) => {
    mutate(data);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-600">Success!</CardTitle>
          <CardDescription className="text-center text-lg">
            Your startup has been listed on StartupPass
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6">
            Thank you for listing your startup. It is now available for interested entrepreneurs to discover.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => setLocation("/browse")}>
              Browse Startups
            </Button>
            <Button variant="outline" onClick={() => {
              setSubmitted(false);
              form.reset();
            }}>
              List Another Startup
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>List Your Startup</CardTitle>
        <CardDescription>
          Fill out this form to list your startup on StartupPass. Be as detailed as possible to attract the right acquirer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Startup Information</h3>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Startup Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., TaskFlow" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your startup, its potential, and why someone would want to take it over..."
                        className="min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include information about the technology, market opportunity, and current status.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="SaaS">SaaS</SelectItem>
                          <SelectItem value="E-commerce">E-commerce</SelectItem>
                          <SelectItem value="Mobile App">Mobile App</SelectItem>
                          <SelectItem value="Marketplace">Marketplace</SelectItem>
                          <SelectItem value="Health Tech">Health Tech</SelectItem>
                          <SelectItem value="EdTech">EdTech</SelectItem>
                          <SelectItem value="Fintech">Fintech</SelectItem>
                          <SelectItem value="AI/ML">AI/ML</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="foundingYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Founding Year</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1980}
                          max={new Date().getFullYear()}
                          placeholder={`e.g., ${new Date().getFullYear()}`}
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="userBase"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Base</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 500+ active users" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Revenue</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., $2,000 MRR" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Portland, OR" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormDescription>
                      Provide a URL to an image representing your startup (optional)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Founder Information</h3>
              
              <FormField
                control={form.control}
                name="founderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Founder Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Jane Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="founderEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="e.g., jane@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      This will be used for communications with potential acquirers and StartupPass
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <CardFooter className="px-0 pt-2">
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Submitting..." : "List Your Startup"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default StartupForm;
