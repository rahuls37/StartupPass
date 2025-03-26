import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import StartupCard from "../startups/StartupCard";
import { type Startup } from "@shared/schema";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedStartups = () => {
  const { data: startups, isLoading, error } = useQuery<Startup[]>({ 
    queryKey: ['/api/startups/featured'],
  });

  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, index) => (
      <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <Skeleton className="h-48 w-full" />
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <Skeleton className="h-4 w-16 mt-2" />
            <Skeleton className="h-6 w-2/3 mt-2" />
            <Skeleton className="h-4 w-full mt-3" />
            <Skeleton className="h-4 w-full mt-1" />
            <Skeleton className="h-4 w-3/4 mt-1" />
          </div>
          <div className="mt-6 flex items-center">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="ml-3">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24 mt-1" />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">OPPORTUNITIES</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Featured Startups</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Find your next venture among these featured startups ready for new ownership.</p>
        </div>

        {error ? (
          <div className="mt-12 text-center text-red-500">
            Failed to load featured startups. Please try again later.
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? renderSkeletons() : (
              startups && startups.map((startup) => (
                <StartupCard key={startup.id} startup={startup} />
              ))
            )}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/browse">
            <Button className="inline-flex items-center">
              Browse All Startups
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStartups;
