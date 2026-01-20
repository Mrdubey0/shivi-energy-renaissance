import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SolutionsCatalog from "@/components/SolutionsCatalog";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <Header />
      <PageBreadcrumb />
      <SolutionsCatalog />
      <Footer />
    </div>
  );
};

export default Solutions;
