import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Plus,
  ArrowRight,
  Search,
  Eye,
  Gauge,
  Thermometer,
  Activity,
  ShoppingCart,
  Check
} from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";
import { CartProduct, useCart } from "@/context/CartContext";
import ProductDetailPopup from "./ProductDetailPopup";
import { categories } from "@/data/products";

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<CartProduct | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { toast } = useToast();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const contentSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (contentSectionRef.current) {
      const yOffset = -100;
      const element = contentSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setTimeout(() => scrollToContent(), 100);
  };

  const allProducts: CartProduct[] = categories.flatMap(cat => 
    cat.products.map(product => ({ ...product, category: cat.id, categoryName: cat.name }))
  );

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: CartProduct) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
      toast({
        title: "Removed from Cart",
        description: `${product.name} removed from cart.`,
      });
    } else {
      addToCart({ ...product, type: 'product' });
      toast({
        title: "Added to Cart",
        description: `${product.name} added to cart.`,
      });
    }
  };

  const openProductDetail = (product: CartProduct) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Product Catalog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Field-validated equipment and systems with defined operational envelopes. 
              All products require technical evaluation for application compatibility.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">API Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Technical Support</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Search and Filter Bar */}
        <ScrollReveal delay={100}>
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-border shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search products, specifications, or applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center">
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  onClick={() => handleCategoryChange("all")}
                  className="h-10"
                  size="sm"
                >
                  All Products
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category.id)}
                    className="h-10 hidden lg:flex"
                    size="sm"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="mb-12" ref={contentSectionRef}>
          <TabsList className="flex flex-wrap h-auto gap-1 bg-background/50 backdrop-blur-sm p-2">
            <TabsTrigger value="all" className="text-xs font-medium px-3 py-2">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs font-medium px-3 py-2">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 50}>
                  <ProductCard 
                    product={product} 
                    isInCart={isInCart(product.id)}
                    onAddToCart={() => handleAddToCart(product)}
                    onViewDetails={() => openProductDetail(product)}
                  />
                </ScrollReveal>
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <ScrollReveal>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-6 shadow-lg`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">{category.name}</h3>
                      <p className="text-lg text-muted-foreground">{category.description}</p>
                      <Badge variant="secondary" className="mt-2">{category.count} Products Available</Badge>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, index) => {
                  const fullProduct: CartProduct = {...product, categoryName: category.name, category: category.id};
                  return (
                    <ScrollReveal key={product.id} delay={index * 50}>
                      <ProductCard 
                        product={fullProduct} 
                        isInCart={isInCart(product.id)}
                        onAddToCart={() => handleAddToCart(fullProduct)}
                        onViewDetails={() => openProductDetail(fullProduct)}
                      />
                    </ScrollReveal>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
            <Button variant="outline" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Popup */}
      <ProductDetailPopup
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </section>
  );
};

// Product Card Component
interface ProductCardProps {
  product: CartProduct;
  isInCart: boolean;
  onAddToCart: () => void;
  onViewDetails: () => void;
}

const ProductCard = ({ product, isInCart, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden h-full cursor-pointer" onClick={onViewDetails}>
      {/* Product Image */}
      <div className="relative overflow-hidden bg-black">
        <div 
          className="h-48 bg-contain bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!product.inStock && (
            <Badge variant="secondary" className="bg-amber-500/90 text-white border-0">
              Lead Time Required
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </CardTitle>
        </div>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {product.description}
        </CardDescription>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {product.categoryName}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Operational Envelope Preview */}
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs font-semibold text-foreground mb-2 flex items-center">
            <Activity className="h-3 w-3 mr-1" />
            Operational Envelope
          </div>
          <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
            {product.operationalEnvelope.pressure && (
              <div className="flex items-start">
                <Gauge className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{product.operationalEnvelope.pressure}</span>
              </div>
            )}
            {product.operationalEnvelope.temperature && (
              <div className="flex items-start">
                <Thermometer className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{product.operationalEnvelope.temperature}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant={isInCart ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
          >
            {isInCart ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                In Cart
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCatalog;
