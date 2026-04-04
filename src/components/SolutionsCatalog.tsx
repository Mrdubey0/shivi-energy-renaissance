import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Package, 
  Wrench, 
  Monitor,
  Cpu,
  Plus,
  ArrowRight,
  Search,
  Eye,
  Gauge,
  Thermometer,
  Activity,
  Check,
  Cog, 
  Shield, 
  Drill, 
  Settings, 
  Lock,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ShipWheel,
  ShoppingBag,
  ServerCog
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";
import { CartProduct, useCart } from "@/context/CartContext";
import ProductDetailPopup from "./ProductDetailPopup";
import ServiceDetailPopup from "./ServiceDetailPopup";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { categories as productCategories } from "@/data/products";
import { serviceCategories } from "@/data/services";
const ITEMS_PER_PAGE = 10;





type SolutionMode = "products" | "services";

const SolutionsCatalog = () => {
  const [solutionMode, setSolutionMode] = useState<SolutionMode>("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<CartProduct | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<CartProduct | null>(null);
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<{
    param1Label?: string;
    param1Value?: string;
    param2Label?: string;
    param2Value?: string;
    application?: string;
    limits?: string;
  } | null>(null);
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
  const { toast } = useToast();
  const { addToCart, removeFromCart, isInCart } = useCart();

  const categories = solutionMode === "products" ? productCategories : serviceCategories;

  const allProducts: CartProduct[] = productCategories.flatMap(cat => 
    cat.products.map(product => ({ ...product, category: cat.id, categoryName: cat.name }))
  );

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredServices = serviceCategories.flatMap(cat => 
    cat.services.map(service => ({ ...service, category: cat.id, categoryName: cat.name, categoryIcon: cat.icon, categoryColor: cat.color }))
  ).filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalItems = solutionMode === "products" ? filteredProducts.length : filteredServices.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const paginatedServices = filteredServices.slice(startIndex, endIndex);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory, solutionMode]);

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

  const openServiceDetail = (service: CartProduct, details?: {
    param1Label?: string;
    param1Value?: string;
    param2Label?: string;
    param2Value?: string;
    application?: string;
    limits?: string;
  }) => {
    setSelectedService(service);
    setSelectedServiceDetails(details || null);
    setIsServiceDetailOpen(true);
  };

  const handleAddToInquiry = (service: CartProduct) => {
    if (isInCart(service.id)) {
      removeFromCart(service.id);
      toast({
        title: "Removed from Inquiry",
        description: `${service.name} removed from inquiry.`,
      });
    } else {
      // Mark as service for cart separation
      addToCart({ ...service, category: 'service', type: 'service' });
      toast({
        title: "Added to Inquiry",
        description: `${service.name} added to inquiry.`,
      });
    }
  };

  // Reset category when switching modes
  const handleModeChange = (mode: SolutionMode) => {
    setSolutionMode(mode);
    setActiveCategory("all");
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToContent();
  };

  // Scroll to top functionality
  const searchSectionRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSearch = () => {
    searchSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContent = () => {
    if (contentSectionRef.current) {
      const yOffset = -100; // Offset to show content with some padding from top
      const element = contentSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Small delay to ensure content is rendered before scrolling
    setTimeout(() => {
      scrollToContent();
    }, 100);
  };

  return (
    <section id="solutions" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative">
      {/* Background texture pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal>
          
          <div className="text-center mb-10 md:mb-14">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary border border-primary-glow/30 backdrop-blur-sm mb-6">
              <ServerCog className="h-4 w-4 mr-2 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">
                Operations Control Platform
              </span>
            </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] bg-clip-text text-transparent pb-10">
                Solutions Catalog
              </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Field-validated equipment, systems, and services with defined operational envelopes. 
              All solutions require technical evaluation for application compatibility.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
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

        {/* Scroll to Top Arrow */}
        {showScrollTop && (
          <button
            onClick={scrollToSearch}
            className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Scroll to search"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}

        {/* Toggle Button and Search */}
        <ScrollReveal delay={50}>
          <div ref={searchSectionRef} className="flex flex-col items-center gap-4 md:gap-6 mb-12">
            {/* Toggle Label */}
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Browse by Category
              </p>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                <span className="text-xs text-primary font-semibold bg-primary/10 px-2 md:px-3 py-1 rounded-full">
                  Click to Switch
                </span>
                <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
            </div>
            
            {/* Toggle - Mobile Optimized */}
            <div className="relative bg-card rounded-xl md:rounded-2xl p-1.5 md:p-2 border-2 border-border shadow-xl inline-flex hover:shadow-2xl transition-all duration-300">
              {/* Animated background indicator */}
              <div 
                className={`absolute top-1.5 md:top-2 bottom-1.5 md:bottom-2 w-[calc(50%-6px)] md:w-[calc(50%-4px)] bg-primary rounded-lg md:rounded-xl shadow-lg transition-all duration-300 ease-out ${
                  solutionMode === "products" ? "left-1.5 md:left-2" : "left-[calc(50%+3px)] md:left-[calc(50%+2px)]"
                }`}
              />
              <Button
                variant="ghost"
                className={`relative z-10 rounded-lg md:rounded-xl px-4 md:px-10 py-3 md:py-4 text-sm md:text-lg font-semibold transition-all duration-300 hover:bg-transparent min-w-[140px] md:min-w-[180px] ${
                  solutionMode === "products" 
                    ? "text-white" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => handleModeChange("products")}
              >
                <Package className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Products
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full transition-all ${
                  solutionMode === "products" 
                    ? "bg-white/25 text-white" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {productCategories.reduce((acc, cat) => acc + cat.products.length, 0)}
                </span>
              </Button>
              <Button
                variant="ghost"
                className={`relative z-10 rounded-lg md:rounded-xl px-4 md:px-10 py-3 md:py-4 text-sm md:text-lg font-semibold transition-all duration-300 hover:bg-transparent min-w-[140px] md:min-w-[180px] ${
                  solutionMode === "services" 
                    ? "text-white" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => handleModeChange("services")}
              >
                <Cog className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Services
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full transition-all ${
                  solutionMode === "services" 
                    ? "bg-white/25 text-white" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {serviceCategories.reduce((acc, cat) => acc + cat.services.length, 0)}
                </span>
              </Button>
            </div>

            {/* Search and Categories */}
            <div className="w-full max-w-4xl bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder={`Search ${solutionMode}, specifications, or applications...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap justify-center">
                  <Button
                    variant={activeCategory === "all" ? "default" : "outline"}
                    onClick={() => handleCategoryChange("all")}
                    size="sm"
                  >
                    All {solutionMode === "products" ? "Products" : "Services"}
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      onClick={() => handleCategoryChange(category.id)}
                      size="sm"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Products Content */}
        {solutionMode === "products" && (
          <div className="mb-12" ref={contentSectionRef}>
            {activeCategory === "all" ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {startIndex + 1}–{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedProducts.map((product, index) => (
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
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
              </>
            ) : (
              <>
                {productCategories.filter(cat => cat.id === activeCategory).map((category) => (
                  <div key={category.id}>
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
                      {category.products.filter(product => 
                        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase())
                      ).map((product, index) => {
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
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* Services Content */}
        {solutionMode === "services" && (
          <div className="mb-12" ref={contentSectionRef}>
            {activeCategory === "all" ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {startIndex + 1}–{Math.min(endIndex, filteredServices.length)} of {filteredServices.length} services
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedServices.map((service, index) => {
                    const cartService: CartProduct = {
                      id: service.id,
                      name: service.name,
                      description: service.shortDescription,
                      price: "Request Technical Evaluation",
                      features: service.features,
                      operationalEnvelope: service.operationalEnvelope ? {
                        pressure: service.operationalEnvelope.param1Value,
                        temperature: service.operationalEnvelope.param2Value,
                        application: service.operationalEnvelope.application,
                        limits: service.operationalEnvelope.limits,
                      } : {},
                      image: service.image,
                      inStock: true,
                      category: service.category,
                      categoryName: service.categoryName,
                    };
                    return (
                      <ScrollReveal key={service.id} delay={index * 50}>
                        <ServiceCard 
                          service={service} 
                          isInCart={isInCart(service.id)}
                          onAddToInquiry={() => handleAddToInquiry(cartService)}
                          onViewDetails={() => openServiceDetail(cartService, service.operationalEnvelope)}
                        />
                      </ScrollReveal>
                    );
                  })}
                </div>
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
              </>
            ) : (
              <>
                {serviceCategories.filter(cat => cat.id === activeCategory).map((category) => (
                  <div key={category.id}>
                    <ScrollReveal>
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-6 shadow-lg`}>
                            <category.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">{category.name}</h3>
                            <p className="text-lg text-muted-foreground">{category.description}</p>
                            <Badge variant="secondary" className="mt-2">{category.count} Services Available</Badge>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.services.filter(service => 
                        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
                      ).map((service, index) => {
                        const fullService = {...service, category: category.id, categoryName: category.name, categoryIcon: category.icon, categoryColor: category.color};
                        const cartService: CartProduct = {
                          id: service.id,
                          name: service.name,
                          description: service.shortDescription,
                          price: "Request Technical Evaluation",
                          features: service.features,
                          operationalEnvelope: service.operationalEnvelope ? {
                            pressure: service.operationalEnvelope.param1Value,
                            temperature: service.operationalEnvelope.param2Value,
                            application: service.operationalEnvelope.application,
                            limits: service.operationalEnvelope.limits,
                          } : {},
                          image: service.image,
                          inStock: true,
                          category: category.id,
                          categoryName: category.name,
                        };
                        return (
                          <ScrollReveal key={service.id} delay={index * 50}>
                            <ServiceCard 
                              service={fullService}
                              isInCart={isInCart(service.id)}
                              onAddToInquiry={() => handleAddToInquiry(cartService)}
                              onViewDetails={() => openServiceDetail(cartService, service.operationalEnvelope)}
                            />
                          </ScrollReveal>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* No Results */}
        {((solutionMode === "products" && filteredProducts.length === 0) || 
          (solutionMode === "services" && filteredServices.length === 0)) && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No {solutionMode} found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
            <Button variant="outline" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        {/* <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 shadow-xl backdrop-blur-sm">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Custom Technical Requirements?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Our engineering team evaluates custom requirements for specific operational 
                envelopes and application conditions not covered by standard {solutionMode}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Submit Technical Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl">
                  Schedule Engineering Consultation
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal> */}
      </div>

      {/* Product Detail Popup */}
      <ProductDetailPopup
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />

      {/* Service Detail Popup */}
      <ServiceDetailPopup
        service={selectedService}
        isOpen={isServiceDetailOpen}
        onClose={() => setIsServiceDetailOpen(false)}
        serviceDetails={selectedServiceDetails || undefined}
      />
    </section>
  );
};

// Pagination Controls Component
const PaginationControls = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="gap-1"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, idx) => (
          typeof page === 'string' ? (
            <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground">…</span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className="h-9 w-9"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          )
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="gap-1"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
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
    <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 border-border/50 overflow-hidden h-full cursor-pointer bg-card" onClick={onViewDetails}>
      {/* Product Image */}
      <div className="relative overflow-hidden bg-black">
        <ImageWithSkeleton
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain p-2"
          skeletonClassName="w-full h-48"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!product.inStock && (
            <Badge variant="secondary" className="bg-amber-500/90 text-white border-0">
              Lead Time Required
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 shadow-md hover:scale-110 transition-transform duration-200"
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
        <div className="mb-2">
          <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {product.name}
          </CardTitle>
        </div>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3 leading-relaxed">
          {product.description}
        </CardDescription>

        <div className="flex items-center">
          <Badge variant="outline" className="text-xs font-medium">
            {product.categoryName}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Operational Envelope Preview */}
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs font-semibold text-foreground mb-2 flex items-center">
            <Activity className="h-3 w-3 mr-1.5 flex-shrink-0" />
            <span>Operational Envelope</span>
          </div>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            {product.operationalEnvelope.pressure && (
              <div className="flex items-start gap-1.5">
                <Gauge className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2 leading-relaxed">{product.operationalEnvelope.pressure}</span>
              </div>
            )}
            {product.operationalEnvelope.temperature && (
              <div className="flex items-start gap-1.5">
                <Thermometer className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2 leading-relaxed">{product.operationalEnvelope.temperature}</span>
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

// Service Card Component
interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    shortDescription: string;
    features: string[];
    operationalEnvelope?: {
      param1Label?: string;
      param1Value?: string;
      param2Label?: string;
      param2Value?: string;
      application?: string;
      limits?: string;
    };
    image: string;
    category: string;
    categoryName: string;
    categoryIcon: React.ComponentType<{ className?: string }>;
    categoryColor: string;
  };
  isInCart: boolean;
  onAddToInquiry: () => void;
  onViewDetails: () => void;
}

const ServiceCard = ({ service, isInCart, onAddToInquiry, onViewDetails }: ServiceCardProps) => {
  const IconComponent = service.categoryIcon;
  
  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 border-border/50 overflow-hidden h-full cursor-pointer bg-card" onClick={onViewDetails}>
      {/* Service Image */}
      <div className="relative overflow-hidden">
        <ImageWithSkeleton
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          skeletonClassName="w-full h-48"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
          <div className={`w-10 h-10 bg-gradient-to-br ${service.categoryColor} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
            <IconComponent className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 shadow-md hover:scale-110 transition-transform duration-200"
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
        <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-2">
          {service.name}
        </CardTitle>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3 leading-relaxed">
          {service.shortDescription}
        </CardDescription>

        <Badge variant="outline" className="text-xs font-medium w-fit">
          {service.categoryName}
        </Badge>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant={isInCart ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onAddToInquiry();
            }}
          >
            {isInCart ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                In Inquiry
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Add to Inquiry
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

export default SolutionsCatalog;
