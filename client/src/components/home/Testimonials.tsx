import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="pb-16 bg-primary lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                  alt="Business handshake"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <Quote className="h-12 w-12 text-white opacity-25" />
                  <p className="mt-6 text-2xl font-medium text-white">
                    I had built a SaaS product that had potential but I couldn't dedicate the time needed to grow it. Through StartupPass, I found someone who was passionate about the concept and had the skills to take it further than I could have.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Alex Thompson</p>
                  <p className="text-base font-medium text-blue-100">Former CEO of DevTracker</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
