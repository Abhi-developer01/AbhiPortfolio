import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection"
import WhyChooseUs from"@/components/WhyChooseUs"
import  InfiniteMovingCard from "@/components/InfiniteMovingCard"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructore";
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <>
   <HeroSection />
   <FeaturedCourses/>
   <WhyChooseUs/>
   <InfiniteMovingCard/>
   <UpcomingWebinars/>
   <Instructors/>
   <Footer/>
   </>

  );
}
