import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { type Startup } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/startups/ContactForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Building, Users, DollarSign, MapPin, Calendar } from "lucide-react";

const StartupDetail = () => {
  const { id } = useParams<{ id: string }>();
  const startupId = parseInt(id);

  const { data: startup, isLoading, error } = useQuery<Startup>({
    queryKey: [`/api/startups/${startupId}`],
    enabled: !isNaN(startupId),
  });

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

  if (isNaN(startupId)) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">Invalid startup ID</h1>
        <p className="mt-2">Please check the URL and try again</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">Error loading startup</h1>
        <p className="mt-2">Failed to load the startup details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading || !startup ? (
          <div className="space-y-8">
            <div>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Skeleton className="h-64 w-full rounded-lg" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
              <div>
                <Skeleton className="h-96 w-full rounded-lg" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{startup.name}</h1>
              <div className="mt-2">
                <Badge className={getCategoryColor(startup.category)}>
                  {startup.category}
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-lg overflow-hidden shadow-md h-72">
                  <img 
                    src={startup.imageUrl || "https://images.unsplash.com/photo-1497215728101-856f4ea42174"} 
                    alt={startup.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">About {startup.name}</h2>
                    <p className="text-gray-700 whitespace-pre-line">{startup.description}</p>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium mb-4">Startup Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {startup.foundingYear && (
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-gray-600">Founded: {startup.foundingYear}</span>
                          </div>
                        )}
                        {startup.location && (
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-gray-600">Location: {startup.location}</span>
                          </div>
                        )}
                        {startup.userBase && (
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-gray-600">User Base: {startup.userBase}</span>
                          </div>
                        )}
                        {startup.revenue && (
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-gray-600">Revenue: {startup.revenue}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium mb-4">Current Founder</h3>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center">
                          {startup.founderName.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{startup.founderName}</p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <Building className="h-4 w-4 mr-1" />
                            <span>Founder & CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <ContactForm startupId={startup.id} startupName={startup.name} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StartupDetail;
