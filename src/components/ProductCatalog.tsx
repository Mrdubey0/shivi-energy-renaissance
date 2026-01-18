import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  ShoppingCart,
  Check
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";
import { CartProduct, useCart } from "@/context/CartContext";
import ProductDetailPopup from "./ProductDetailPopup";

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<CartProduct | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { toast } = useToast();
  const { addToCart, removeFromCart, isInCart } = useCart();

  const categories = [
    {
      id: "downhole-tools",
      name: "Downhole Tools",
      icon: Wrench,
      color: "from-blue-500 to-blue-600",
      description: "Completion tools, liner hangers, and casing accessories for wellbore operations",
      count: 24,
      products: [
        { 
          id: "completion-tools", 
          name: "Completion Tool Systems", 
          description: "Completion solutions with integrated monitoring for defined wellbore conditions. These advanced systems provide reliable performance in challenging environments, featuring modular designs that can be customized for specific well requirements.",
          price: "Request Technical Evaluation",
          features: ["Condition monitoring", "Corrosion resistant alloys", "Modular configuration"],
          operationalEnvelope: {
            pressure: "15,000 PSI max",
            temperature: "-40°F to 350°F",
            application: "Production zone completion",
            limits: "API 5CT Grade compliance"
          },
          image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop"
          ],
          inStock: true
        },
        { 
          id: "liner-hangers", 
          name: "Liner Hanger Systems", 
          description: "Mechanical and hydraulic liner hangers for complex well architectures. Designed for superior sealing performance and debris tolerance in demanding downhole conditions.",
          price: "Request Technical Evaluation",
          features: ["Superior sealing", "Debris tolerance", "Field-validated design"],
          operationalEnvelope: {
            pressure: "10,000 PSI working",
            temperature: "Up to 400°F",
            application: "Liner installation and isolation",
            limits: "Size range: 4.5\" - 13.375\""
          },
          image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop"
          ],
          inStock: true
        },
        { 
          id: "casing-accessories", 
          name: "Casing Accessories", 
          description: "Centralizers, float equipment, and accessories for casing installation integrity. Multiple configurations available for various well conditions and requirements.",
          price: "Request Technical Evaluation",
          features: ["Multiple configurations", "Enhanced durability", "Quick deployment"],
          operationalEnvelope: {
            pressure: "Variable by component",
            temperature: "-40°F to 350°F",
            application: "Casing running and cementing",
            limits: "Formation-specific selection required"
          },
          image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
          ],
          inStock: true
        },
        { 
          id: "swellable-systems", 
          name: "Swellable Packer Systems", 
          description: "Swellable element packers for zonal isolation without setting tools. Water or oil activated for reliable long-term performance.",
          price: "Request Technical Evaluation",
          features: ["Water/oil activated", "No setting tool required", "Long-term reliability"],
          operationalEnvelope: {
            pressure: "5,000 PSI differential",
            temperature: "Up to 300°F",
            application: "Zonal isolation, annular sealing",
            limits: "Activation time: 6-24 hours"
          },
          image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
          ],
          inStock: false
        }
      ]
    },
    {
      id: "mills-bits",
      name: "Mills & Bits",
      icon: Wrench,
      color: "from-red-500 to-red-600",
      description: "Milling tools and bits for section cutting, obstruction removal, and wellbore access",
      count: 16,
      products: [
        { 
          id: "section-mills", 
          name: "Section Milling Systems", 
          description: "Full-bore section mills for casing removal and window cutting operations. Optimized cutter geometry ensures consistent cutting rates and efficient debris management.",
          price: "Request Technical Evaluation",
          features: ["Optimized cutter geometry", "Debris management", "Consistent cutting rate"],
          operationalEnvelope: {
            pressure: "N/A - mechanical operation",
            temperature: "Up to 400°F",
            application: "Casing section removal, window cutting",
            limits: "RPM: 40-80, WOB: 2,000-6,000 lbs"
          },
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
          ],
          inStock: true
        },
        { 
          id: "junk-mills", 
          name: "Junk Mills", 
          description: "Concave and flat-bottom mills for debris and obstruction removal. Tungsten carbide inserts provide high impact resistance.",
          price: "Request Technical Evaluation",
          features: ["Tungsten carbide inserts", "Multiple profiles available", "High impact resistance"],
          operationalEnvelope: {
            pressure: "N/A - mechanical operation",
            temperature: "Up to 400°F",
            application: "Obstruction milling, debris cleanup",
            limits: "Formation-dependent parameters"
          },
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop"
          ],
          inStock: true
        },
        { 
          id: "pilot-mills", 
          name: "Pilot Mills", 
          description: "Pilot and taper mills for controlled wellbore access and re-entry. Precision guidance with gradual taper design.",
          price: "Request Technical Evaluation",
          features: ["Precision guidance", "Gradual taper design", "Controlled material removal"],
          operationalEnvelope: {
            pressure: "N/A - mechanical operation",
            temperature: "Up to 400°F",
            application: "Well re-entry, controlled milling",
            limits: "Controlled RPM for accuracy"
          },
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
          ],
          inStock: true
        }
      ]
    },
    {
      id: "monitoring-equipment",
      name: "Monitoring Equipment",
      icon: Monitor,
      color: "from-purple-500 to-purple-600",
      description: "Condition monitoring and surveillance systems for operational verification",
      count: 16,
      products: [
        { 
          id: "corrosion-monitors", 
          name: "Corrosion Monitoring Systems", 
          description: "Continuous corrosion rate monitoring with predictive analytics integration. Real-time data transmission enables proactive maintenance planning.",
          price: "Request Technical Evaluation",
          features: ["Real-time data", "AI analytics integration", "Remote monitoring"],
          operationalEnvelope: {
            pressure: "Sensor rated to 5,000 PSI",
            temperature: "Up to 250°F",
            application: "Pipeline and vessel integrity monitoring",
            limits: "Wireless range: 5km, Data logging: 1 year"
          },
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
          ],
          inStock: true
        },
        { 
          id: "leak-detection", 
          name: "Leak Detection Systems", 
          description: "Multi-sensor leak detection with precise location identification. Fast response times for critical safety applications.",
          price: "Request Technical Evaluation",
          features: ["Multi-sensor array", "Precise location", "Fast response"],
          operationalEnvelope: {
            pressure: "Ambient to process conditions",
            temperature: "-20°F to 150°F",
            application: "Facility and pipeline leak monitoring",
            limits: "Detection range: 1-1000 ppm"
          },
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
          ],
          inStock: true
        }
      ]
    },
    {
      id: "ai-devices",
      name: "Digital Oversight Systems",
      icon: Cpu,
      color: "from-orange-500 to-orange-600",
      description: "AI and computer vision systems for safety verification and operational oversight",
      count: 12,
      products: [
        { 
          id: "ppe-monitoring", 
          name: "PPE Compliance Verification", 
          description: "Computer vision system for automated safety equipment detection and logging. 99%+ accuracy with cloud integration capabilities.",
          price: "Request Technical Evaluation",
          features: ["Real-time detection", "99%+ accuracy", "Cloud integration"],
          operationalEnvelope: {
            pressure: "N/A - surface system",
            temperature: "-20°F to 120°F operating",
            application: "Facility safety compliance monitoring",
            limits: "Coverage: 50m radius per unit"
          },
          image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
          ],
          inStock: true
        },
        { 
          id: "anomaly-detection", 
          name: "Operational Anomaly Detection", 
          description: "Machine learning system for early detection of operational deviations. Customizable thresholds with predictive alerts.",
          price: "Request Technical Evaluation",
          features: ["Pattern recognition", "Predictive alerts", "Customizable thresholds"],
          operationalEnvelope: {
            pressure: "N/A - analytics system",
            temperature: "N/A - analytics system",
            application: "Process optimization and safety",
            limits: "Integration via API/SDK"
          },
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
          ],
          inStock: true
        }
      ]
    }
  ];

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
                  onClick={() => setActiveCategory("all")}
                  className="h-12"
                >
                  All Products
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className="h-12 hidden md:flex"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-5 h-14 bg-background/50 backdrop-blur-sm">
            <TabsTrigger value="all" className="text-sm font-medium">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm font-medium">
                {category.name.split(' ')[0]}
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

        {/* CTA Section */}
        {/* <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 shadow-xl backdrop-blur-sm">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Custom Technical Requirements?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Our engineering team evaluates custom requirements for specific operational 
                envelopes and application conditions not covered by standard products.
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
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
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
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </CardTitle>
        </div>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-2 mb-3">
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
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            {product.operationalEnvelope.pressure && (
              <div className="flex items-center">
                <Gauge className="h-3 w-3 mr-1" />
                {product.operationalEnvelope.pressure}
              </div>
            )}
            {product.operationalEnvelope.temperature && (
              <div className="flex items-center">
                <Thermometer className="h-3 w-3 mr-1" />
                {product.operationalEnvelope.temperature}
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
