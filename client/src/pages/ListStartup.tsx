import StartupForm from "@/components/startups/StartupForm";

const ListStartup = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            List Your Startup
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Ready to pass on your startup to a passionate entrepreneur? Create a listing below.
          </p>
        </div>
        
        <StartupForm />
      </div>
    </div>
  );
};

export default ListStartup;
