import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SolutionsCatalog from "@/components/SolutionsCatalog";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Solutions"
        description="Explore Shivi Energy's engineering solutions: corrosion management, rigless intervention, plug & abandonment, rig support, and mills & bits for the energy sector."
        canonical="/solutions"
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
