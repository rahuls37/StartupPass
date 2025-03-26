import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SuccessStories from '../components/home/SuccessStories';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find Your <span className="gradient-text">Perfect Startup</span> Opportunity
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Connect with entrepreneurs looking to hand off their startups for free to
                the right person who can take them to the next level.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/browse" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                            text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 
                            shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Browse Startups
                </Link>
                <Link 
                  href="/list-startup" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 
                            text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 
                            shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  List a Startup
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  alt="Entrepreneurs collaborating"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Platform in Numbers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              StartupPass has been connecting entrepreneurs with exciting opportunities since 2023.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover-card-rise">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-gray-600">Startups Listed</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center hover-card-rise">
              <div className="text-4xl font-bold text-primary mb-2">85+</div>
              <div className="text-gray-600">Successful Transfers</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center hover-card-rise">
              <div className="text-4xl font-bold text-primary mb-2">1,500+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to find and acquire a startup at no cost, or to
              find the right person to take over your startup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Browse Startups</h3>
              <p className="text-gray-600">
                Explore available startups by category, tech stack, or business model.
                Find the perfect match for your skills and interests.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect with Founders</h3>
              <p className="text-gray-600">
                Reach out to startup owners through our secure messaging system.
                Discuss your vision and why you're the right fit to take over.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Take Ownership</h3>
              <p className="text-gray-600">
                Once both parties agree, complete the transfer process with our
                simplified documentation and support system.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/how-it-works" 
              className="inline-flex items-center justify-center text-primary font-medium hover:underline focus:outline-none"
            >
              Learn more about our process <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <SuccessStories />
      
      {/* CTA Section */}
      <section className="bg-primary py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Entrepreneurial Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to acquire a startup or pass on your project to the right hands,
            StartupPass makes the process simple and rewarding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/browse" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                        text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 
                        shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Browse Startups
            </Link>
            <Link 
              href="/list-startup" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white 
                        text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 
                        shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              List a Startup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}