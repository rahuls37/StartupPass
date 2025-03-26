import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface FilterBarProps {
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
}

const FilterBar = ({ onCategoryChange, onSearchChange }: FilterBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearchChange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Send empty string to API when "all" is selected
    onCategoryChange(category === "all" ? "" : category);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search startups..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 items-center">
          <span className="text-sm text-gray-500 whitespace-nowrap">Filter by:</span>
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
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
          
          {(searchTerm || (selectedCategory && selectedCategory !== "all")) && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                onCategoryChange("");
                onSearchChange("");
              }}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
