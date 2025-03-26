import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to find a new home</span>
                <span className="block">for your startup?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-100">
                List your startup today and connect with entrepreneurs who are eager to continue your vision and grow what you've built.
              </p>
              <Link href="/list">
                <Button
                  variant="secondary"
                  className="mt-8 bg-white text-primary hover:bg-gray-50"
                >
                  Create Your Listing
                </Button>
              </Link>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
              alt="Entrepreneur in office"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
