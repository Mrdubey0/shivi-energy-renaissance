import Header from "@/components/Header";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Sustainability"
        description="Shivi Energy's commitment to sustainable energy operations through low-carbon technologies, environmental stewardship, and responsible execution practices."
        canonical="/sustainability"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Sustainability", url: "/sustainability" },
        ])}
      />
      <Header />
      <Sustainability />
      <Footer />
    </div>
  );
};

export default SustainabilityPage;