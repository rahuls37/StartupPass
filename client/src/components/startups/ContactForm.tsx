import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";

interface ContactFormProps {
  startupId: number;
  startupName: string;
}

const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const ContactForm = ({ startupId, startupName }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      startupId,
      name: "",
      email: "",
      message: ""
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof contactFormSchema>) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Your message has been sent to the startup founder.",
      });
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    mutate(data);
  };

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Thank you for your interest!</CardTitle>
          <CardDescription>
            Your message has been sent to the founder of {startupName}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-600">
            The founder will review your message and get back to you shortly.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setSubmitted(false)} variant="outline">Send another message</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact the Founder</CardTitle>
        <CardDescription>
          Interested in {startupName}? Send a message to the founder to learn more.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I'm interested in learning more about your startup..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
