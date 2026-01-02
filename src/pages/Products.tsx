import Header from "@/components/Header";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <Header />
      <ProductCatalog />
      <Footer />
    </div>
  );
};

export default Products;