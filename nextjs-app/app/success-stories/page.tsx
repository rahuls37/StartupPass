import SuccessStoriesComponent from "../../components/home/SuccessStories";
import { Separator } from "../../components/ui/separator";

export const metadata = {
  title: 'Success Stories - StartupPass',
  description: 'Discover how entrepreneurs have taken over free startups and transformed them into thriving businesses.'
};

export default function SuccessStories() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          Success Stories
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how entrepreneurs have taken over free startups and transformed them into thriving businesses.
        </p>
        <Separator className="mt-8 max-w-md mx-auto" />
      </div>

      {/* Reuse the Success Stories component we already created */}
      <SuccessStoriesComponent />
      
      {/* Additional expanded content for the dedicated page */}
      <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How These Transfers Made a Difference</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-6 py-2">
            <h3 className="text-xl font-semibold mb-2">Finding the Right Match</h3>
            <p className="text-gray-600">
              The key to a successful startup transfer is finding an acquirer whose skills complement 
              the startup's needs. In each of our success stories, the new owners brought specific expertise 
              that helped overcome existing challenges.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6 py-2">
            <h3 className="text-xl font-semibold mb-2">Scaling What Works</h3>
            <p className="text-gray-600">
              Many of our success stories involve startups with excellent products but limited reach. 
              New owners with marketing and sales backgrounds were able to scale user acquisition without 
              having to rebuild the core product.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6 py-2">
            <h3 className="text-xl font-semibold mb-2">Passion Drives Growth</h3>
            <p className="text-gray-600">
              When entrepreneurs acquire startups in fields they're passionate about, they bring energy and 
              dedication that translates to innovation and growth. Our most successful transfers involve 
              acquirers who genuinely care about the product and its users.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Write Your Success Story?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Browse our available startups and find the one that matches your skills and passion.
        </p>
        <a 
          href="/browse" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Browse Available Startups
        </a>
      </div>
    </div>
  );
}