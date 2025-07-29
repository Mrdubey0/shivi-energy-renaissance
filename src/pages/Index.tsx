import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Sustainability from "@/components/Sustainability";
import ProductCatalog from "@/components/ProductCatalog";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Sustainability />
      <ProductCatalog />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
