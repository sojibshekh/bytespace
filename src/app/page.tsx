import CategoriesSection from "@/components/HomePage/CategoriesSection";
import CreatorSection from "@/components/HomePage/CreatorSection";
import GrowthSection from "@/components/HomePage/GrowthSection";
import HeroBanner from "@/components/HomePage/HeroBanner";
import ManageCoursesSection from "@/components/HomePage/ManageCoursesSection";
import PartnersSection from "@/components/HomePage/PartnersSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <PartnersSection />
        
        <CategoriesSection />
       <GrowthSection />  
     
      <ManageCoursesSection />
       <CreatorSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}