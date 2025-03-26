import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Startup } from "@shared/schema";
import StartupCard from "@/components/startups/StartupCard";
import FilterBar from "@/components/startups/FilterBar";
import { Skeleton } from "@/components/ui/skeleton";

const BrowseStartups = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: startups, isLoading, error } = useQuery<Startup[]>({
    queryKey: ['/api/startups', categoryFilter],
    queryFn: async ({ queryKey }) => {
      const [_path, category] = queryKey;
      const url = new URL('/api/startups', window.location.origin);
      if (category) {
        url.searchParams.append('category', category as string);
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch startups");
      return res.json();
    }
  });

  const filteredStartups = useMemo(() => {
    if (!startups) return [];
    if (!searchTerm) return startups;

    const lowerSearch = searchTerm.toLowerCase();
    return startups.filter(
      startup => 
        startup.name.toLowerCase().includes(lowerSearch) ||
        startup.description.toLowerCase().includes(lowerSearch) ||
        startup.founderName.toLowerCase().includes(lowerSearch) ||
        (startup.location && startup.location.toLowerCase().includes(lowerSearch))
    );
  }, [startups, searchTerm]);

  const renderSkeletons = () => {
    return Array(6).fill(0).map((_, index) => (
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
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Browse Startups
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover startups that are looking for a new owner to take them to the next level.
          </p>
        </div>

        <FilterBar 
          onCategoryChange={setCategoryFilter}
          onSearchChange={setSearchTerm}
        />

        {error ? (
          <div className="text-center py-10 text-red-500">
            <p>Error loading startups. Please try again later.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {isLoading ? renderSkeletons() : (
                filteredStartups.length > 0 ? (
                  filteredStartups.map((startup) => (
                    <StartupCard key={startup.id} startup={startup} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 text-gray-500">
                    <p>No startups found matching your criteria.</p>
                  </div>
                )
              )}
            </div>
            
            {!isLoading && startups && startups.length > 0 && filteredStartups.length === 0 && (
              <div className="text-center mt-8">
                <p className="text-gray-500">No results found for "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="mt-2 text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BrowseStartups;
