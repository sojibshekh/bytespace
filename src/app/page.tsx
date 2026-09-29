import HeroBanner from "@/components/HomePage/HeroBanner";
import PartnersSection from "@/components/HomePage/PartnersSection";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <PartnersSection />
      <Footer />
    </main>
  );
}