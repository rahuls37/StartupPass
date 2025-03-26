import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActiveLink = (path: string) => location === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-primary font-bold text-2xl cursor-pointer">StartupPass</span>
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <div className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer ${
                  isActiveLink('/') ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  Home
                </div>
              </Link>
              <Link href="/browse">
                <div className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer ${
                  isActiveLink('/browse') ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  Browse Startups
                </div>
              </Link>
              <Link href="/list">
                <div className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer ${
                  isActiveLink('/list') ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  List Your Startup
                </div>
              </Link>
              <Link href="/how-it-works">
                <div className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer ${
                  isActiveLink('/how-it-works') ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  How It Works
                </div>
              </Link>
              <Link href="/success-stories">
                <div className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer ${
                  isActiveLink('/success-stories') ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  Success Stories
                </div>
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
              <span className="sr-only">View notifications</span>
            </Button>

            <div className="ml-3 relative">
              <Button className="bg-primary text-white hover:bg-blue-700">
                Sign Up / Login
              </Button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/">
              <div className={`block pl-3 pr-4 py-2 text-base font-medium cursor-pointer ${
                isActiveLink('/') ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}>
                Home
              </div>
            </Link>
            <Link href="/browse">
              <div className={`block pl-3 pr-4 py-2 text-base font-medium cursor-pointer ${
                isActiveLink('/browse') ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}>
                Browse Startups
              </div>
            </Link>
            <Link href="/list">
              <div className={`block pl-3 pr-4 py-2 text-base font-medium cursor-pointer ${
                isActiveLink('/list') ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}>
                List Your Startup
              </div>
            </Link>
            <Link href="/how-it-works">
              <div className={`block pl-3 pr-4 py-2 text-base font-medium cursor-pointer ${
                isActiveLink('/how-it-works') ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}>
                How It Works
              </div>
            </Link>
            <Link href="/success-stories">
              <div className={`block pl-3 pr-4 py-2 text-base font-medium cursor-pointer ${
                isActiveLink('/success-stories') ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}>
                Success Stories
              </div>
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button className="w-full bg-primary text-white hover:bg-blue-700">
                Sign Up / Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
