import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Startup } from "@shared/schema";

interface StartupCardProps {
  startup: Startup;
}

const StartupCard = ({ startup }: StartupCardProps) => {
  // Create initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

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
    <Card className="flex flex-col overflow-hidden h-full">
      <div className="flex-shrink-0 h-48 overflow-hidden">
        <img 
          src={startup.imageUrl || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174'} 
          alt={startup.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex-1 p-6">
        <div>
          <Badge className={`${getCategoryColor(startup.category)}`}>
            {startup.category}
          </Badge>
        </div>
        <Link href={`/startups/${startup.id}`}>
          <div className="block mt-2 hover:underline cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-900">{startup.name}</h3>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">{startup.description}</p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="border-t p-6">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="" alt={startup.founderName} />
            <AvatarFallback>{getInitials(startup.founderName)}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{startup.founderName}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <span>{startup.location}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Founded {startup.foundingYear}</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StartupCard;
