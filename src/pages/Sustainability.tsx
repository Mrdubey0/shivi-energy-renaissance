import Header from "@/components/Header";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Sustainability — LOCA-LOCUS ESG Framework"
        description="Shivi Energy's LOCA-LOCUS framework: a proprietary ESG measurement system scoring Quality, Performance, Safety, and Integrity across every project lifecycle stage."
        canonical="/sustainability"
        keywords="LOCA LOCUS ESG framework, oilfield sustainability, energy ESG scoring, QPSI quality performance safety integrity, oil gas carbon reduction"
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