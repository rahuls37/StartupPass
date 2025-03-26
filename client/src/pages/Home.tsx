import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedStartups from "@/components/home/FeaturedStartups";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SuccessStories from "@/components/home/SuccessStories";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedStartups />
      <HowItWorksSection />
      <SuccessStories />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
