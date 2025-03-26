import { Plus, Search, Clipboard, Clock } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How StartupPass Works
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Plus className="h-6 w-6" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">List your startup</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Create a detailed listing that highlights your startup's potential, technology, users, and other key assets that would be valuable to a new owner.
              </dd>
            </div>

            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Search className="h-6 w-6" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Connect with potential acquirers</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Interested entrepreneurs will reach out through our platform. Review their background and vision to ensure they're the right fit for your startup.
              </dd>
            </div>

            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Clipboard className="h-6 w-6" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Complete necessary paperwork</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We provide templates for transfer agreements to make the legal handover process simple and straightforward for both parties.
              </dd>
            </div>

            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Smooth transition</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We'll guide you through the handover process, ensuring all assets, accounts, and knowledge are properly transferred to the new owner.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
