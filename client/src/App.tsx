import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BrowseStartups from "@/pages/BrowseStartups";
import StartupDetail from "@/pages/StartupDetail";
import ListStartup from "@/pages/ListStartup";
import HowItWorks from "@/pages/HowItWorks";
import SuccessStories from "@/pages/SuccessStories";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/browse" component={BrowseStartups} />
          <Route path="/startups/:id" component={StartupDetail} />
          <Route path="/list" component={ListStartup} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/success-stories" component={SuccessStories} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
