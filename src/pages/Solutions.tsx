import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SolutionsCatalog from "@/components/SolutionsCatalog";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Solutions — Oilfield Products & Services"
        description="Explore 55+ engineered products and 70+ field services: corrosion management, rigless intervention, downhole tools, cathodic protection, AI digital oversight, and 3D scanning for oil & gas."
        canonical="/solutions"
        keywords="oilfield products, corrosion management solutions, cathodic protection, rigless intervention, downhole tools, bridge plug, liner hanger, ICCP rectifier, AI pipeline monitoring, 3D laser scanning"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
        ])}
      />
      <Header />
      <PageBreadcrumb />
      <SolutionsCatalog />
      <Footer />
    </div>
  );
};

export default Solutions;
