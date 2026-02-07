import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import SEO, { organizationSchema, websiteSchema } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in pb-16 md:pb-0">
      <SEO
        canonical="/"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <Header />
      <Hero />
      <Services />
      <About />
      {/* <Clients /> */}
      {/* <Contact /> */}
      <Footer />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Index;
