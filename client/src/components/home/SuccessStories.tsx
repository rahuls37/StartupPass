import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      companyName: "FitTech",
      category: "Health Tech",
      description: "A fitness tracker application that was acquired by a passionate entrepreneur and grew from 1,000 to 50,000 users within a year.",
      acquirerName: "Jessica Zhang",
      acquirerRole: "Current CEO",
      testimonial: "I found FitTech when it had just 1,000 users. The original founder had built an amazing product but didn't have time to market it. I applied my marketing experience and we've grown to 50,000 users in just 12 months!",
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      companyName: "LearnLingo",
      category: "EdTech",
      description: "A language learning platform that found a new home with a language enthusiast who expanded it from 2 to 8 languages.",
      acquirerName: "Marco Rossi",
      acquirerRole: "Current CEO",
      testimonial: "When I acquired LearnLingo, it only offered Spanish and French courses. As a polyglot with teaching experience, I've expanded to 8 languages. It's incredibly rewarding to combine my passion with business.",
      imageSrc: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80"
    },
    {
      id: 3,
      companyName: "EcoBox",
      category: "E-commerce",
      description: "A sustainable packaging company that was transferred to a former logistics manager who secured partnerships with major retailers.",
      acquirerName: "Thomas Johnson",
      acquirerRole: "Current CEO",
      testimonial: "With my background in retail logistics, I was able to secure partnerships with major retailers for EcoBox. The previous founder had created excellent products but needed help with distribution channels.",
      imageSrc: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'SaaS': 'bg-green-100 text-green-800',
      'E-commerce': 'bg-blue-100 text-blue-800',
      'Mobile App': 'bg-purple-100 text-purple-800',
      'Health Tech': 'bg-red-100 text-red-800',
      'EdTech': 'bg-yellow-100 text-yellow-800',
      'Marketplace': 'bg-indigo-100 text-indigo-800',
      'AI/ML': 'bg-pink-100 text-pink-800',
      'Fintech': 'bg-cyan-100 text-cyan-800'
    };

    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">SUCCESS STORIES</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            From Handoff to Growth
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            See how entrepreneurs have taken over startups and grown them to new heights.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={story.imageSrc}
                  alt={story.companyName}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className={`${getCategoryColor(story.category)}`}>
                      {story.category}
                    </Badge>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">{story.companyName}</h3>
                  </div>
                  <Quote className="h-6 w-6 text-primary opacity-70" />
                </div>
                <p className="mt-3 text-sm text-gray-500">{story.description}</p>
                <blockquote className="mt-4 italic text-sm text-gray-600 border-l-4 border-primary pl-3 py-1">
                  "{story.testimonial}"
                </blockquote>
                <div className="mt-6 flex items-center">
                  <Avatar>
                    <AvatarFallback>{story.acquirerName.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{story.acquirerName}</p>
                    <p className="text-sm text-gray-500">{story.acquirerRole}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;