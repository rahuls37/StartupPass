import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, MessageSquare, Copy, Truck } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            How StartupPass Works
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            The simple process to find a new home for your startup or acquire one for free.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For Startup Owners</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">1. Create Your Listing</h3>
                  <p className="text-gray-600">
                    Fill out our comprehensive form with details about your startup, including technology used, user base, and why you're looking to pass it on.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">2. Connect with Interested Acquirers</h3>
                  <p className="text-gray-600">
                    Review messages from entrepreneurs interested in your startup. Discuss their vision and ensure they're a good fit to carry on your work.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Copy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">3. Complete the Transfer</h3>
                  <p className="text-gray-600">
                    Once you've found the right person, use our transfer agreement templates to legally transfer ownership and assets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For Startup Acquirers</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">1. Browse Available Startups</h3>
                  <p className="text-gray-600">
                    Explore our marketplace of startups looking for new ownership. Filter by category, technology, or other criteria to find the perfect match.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">2. Reach Out to Founders</h3>
                  <p className="text-gray-600">
                    When you find a startup that interests you, contact the founder through our platform. Share your background and vision for the startup.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">3. Take Over and Grow</h3>
                  <p className="text-gray-600">
                    After the transfer is complete, you'll have full ownership of the startup and can begin implementing your vision to take it to new heights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Is it really free to acquire a startup?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! StartupPass is specifically for startups that founders want to give away at no cost. While the startup itself is free, there may be ongoing costs such as hosting, domain renewals, etc.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Why would someone give away their startup for free?</h3>
                <p className="mt-2 text-gray-600">
                  Founders may have limited time, be pursuing other opportunities, or simply want to see their creation live on rather than shutting it down. Many would rather see their work continue than let it disappear.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">What kind of startups are available?</h3>
                <p className="mt-2 text-gray-600">
                  We have a variety of startups across different categories including SaaS, mobile apps, e-commerce stores, and more. Some may have active users and even revenue, while others might be in earlier stages.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">How does the transfer process work?</h3>
                <p className="mt-2 text-gray-600">
                  Once both parties agree to the transfer, we provide template agreements to formalize the arrangement. The specific assets transferred (code, domains, user accounts, etc.) will be outlined in this agreement.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Does StartupPass take a fee?</h3>
                <p className="mt-2 text-gray-600">
                  StartupPass is currently free to use for both startup listers and acquirers. We may introduce premium features in the future, but our core matching service will remain free.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
