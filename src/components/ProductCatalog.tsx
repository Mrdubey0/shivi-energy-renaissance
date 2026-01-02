import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
  Package, 
  Wrench, 
  Monitor,
  Cpu,
  Plus,
  FileText,
  ArrowRight,
  Search,
  Eye,
  X,
  Gauge,
  Thermometer,
  Activity,
  ShoppingCart
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import QuoteRequestForm from "./QuoteRequestForm";
import ScrollReveal from "./ScrollReveal";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  operationalEnvelope: {
    pressure?: string;
    temperature?: string;
    application?: string;
    limits?: string;
  };
  image: string;
  inStock: boolean;
  category?: string;
  categoryName?: string;
}

const ProductCatalog = () => {
  const [inquiryCart, setInquiryCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

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
          description: "Completion solutions with integrated monitoring for defined wellbore conditions",
          price: "Request Technical Evaluation",
          features: ["Condition monitoring", "Corrosion resistant alloys", "Modular configuration"],
          operationalEnvelope: {
            pressure: "15,000 PSI max",
            temperature: "-40°F to 350°F",
            application: "Production zone completion",
            limits: "API 5CT Grade compliance"
          },
          image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
          inStock: true
        },
        { 
          id: "liner-hangers", 
          name: "Liner Hanger Systems", 
          description: "Mechanical and hydraulic liner hangers for complex well architectures",
          price: "Request Technical Evaluation",
          features: ["Superior sealing", "Debris tolerance", "Field-validated design"],
          operationalEnvelope: {
            pressure: "10,000 PSI working",
            temperature: "Up to 400°F",
            application: "Liner installation and isolation",
            limits: "Size range: 4.5\" - 13.375\""
          },
          image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
          inStock: true
        },
        { 
          id: "casing-accessories", 
          name: "Casing Accessories", 
          description: "Centralizers, float equipment, and accessories for casing installation integrity",
          price: "Request Technical Evaluation",
          features: ["Multiple configurations", "Enhanced durability", "Quick deployment"],
          operationalEnvelope: {
            pressure: "Variable by component",
            temperature: "-40°F to 350°F",
            application: "Casing running and cementing",
            limits: "Formation-specific selection required"
          },
          image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
          inStock: true
        },
        { 
          id: "swellable-systems", 
          name: "Swellable Packer Systems", 
          description: "Swellable element packers for zonal isolation without setting tools",
          price: "Request Technical Evaluation",
          features: ["Water/oil activated", "No setting tool required", "Long-term reliability"],
          operationalEnvelope: {
            pressure: "5,000 PSI differential",
            temperature: "Up to 300°F",
            application: "Zonal isolation, annular sealing",
            limits: "Activation time: 6-24 hours"
          },
          image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
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
          description: "Full-bore section mills for casing removal and window cutting operations",
          price: "Request Technical Evaluation",
          features: ["Optimized cutter geometry", "Debris management", "Consistent cutting rate"],
          operationalEnvelope: {
            pressure: "N/A - mechanical operation",
            temperature: "Up to 400°F",
            application: "Casing section removal, window cutting",
            limits: "RPM: 40-80, WOB: 2,000-6,000 lbs"
          },
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
          inStock: true
        },
        { 
          id: "junk-mills", 
          name: "Junk Mills", 
          description: "Concave and flat-bottom mills for debris and obstruction removal",
          price: "Request Technical Evaluation",
          features: ["Tungsten carbide inserts", "Multiple profiles available", "High impact resistance"],
          operationalEnvelope: {
            pressure: "N/A - mechanical operation",
            temperature: "Up to 400°F",
            application: "Obstruction milling, debris cleanup",
            limits: "Formation-dependent parameters"
          },
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
          inStock: true
        },
        { 
          id: "pilot-mills", 
          name: "Pilot Mills", 
          description: "Pilot and taper mills for controlled wellbore access and re-entry",
          price: "Request Technical Evaluation",
          features: ["Precision guidance", "Gradual taper design", "Controlled material removal"],
          operationalEnvelope: {
            pressure: "N/A - mechanical operation",
            temperature: "Up to 400°F",
            application: "Well re-entry, controlled milling",
            limits: "Controlled RPM for accuracy"
          },
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
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
          description: "Continuous corrosion rate monitoring with predictive analytics integration",
          price: "Request Technical Evaluation",
          features: ["Real-time data", "AI analytics integration", "Remote monitoring"],
          operationalEnvelope: {
            pressure: "Sensor rated to 5,000 PSI",
            temperature: "Up to 250°F",
            application: "Pipeline and vessel integrity monitoring",
            limits: "Wireless range: 5km, Data logging: 1 year"
          },
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
          inStock: true
        },
        { 
          id: "leak-detection", 
          name: "Leak Detection Systems", 
          description: "Multi-sensor leak detection with precise location identification",
          price: "Request Technical Evaluation",
          features: ["Multi-sensor array", "Precise location", "Fast response"],
          operationalEnvelope: {
            pressure: "Ambient to process conditions",
            temperature: "-20°F to 150°F",
            application: "Facility and pipeline leak monitoring",
            limits: "Detection range: 1-1000 ppm"
          },
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
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
          description: "Computer vision system for automated safety equipment detection and logging",
          price: "Request Technical Evaluation",
          features: ["Real-time detection", "99%+ accuracy", "Cloud integration"],
          operationalEnvelope: {
            pressure: "N/A - surface system",
            temperature: "-20°F to 120°F operating",
            application: "Facility safety compliance monitoring",
            limits: "Coverage: 50m radius per unit"
          },
          image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
          inStock: true
        },
        { 
          id: "anomaly-detection", 
          name: "Operational Anomaly Detection", 
          description: "Machine learning system for early detection of operational deviations",
          price: "Request Technical Evaluation",
          features: ["Pattern recognition", "Predictive alerts", "Customizable thresholds"],
          operationalEnvelope: {
            pressure: "N/A - analytics system",
            temperature: "N/A - analytics system",
            application: "Process optimization and safety",
            limits: "Integration via API/SDK"
          },
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
          inStock: true
        }
      ]
    }
  ];

  const allProducts = categories.flatMap(cat => 
    cat.products.map(product => ({ ...product, category: cat.id, categoryName: cat.name }))
  );

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const addToInquiry = (product: Product) => {
    if (!inquiryCart.find(item => item.id === product.id)) {
      setInquiryCart([...inquiryCart, product]);
      toast({
        title: "Added to Procurement Manifest",
        description: `${product.name} added for technical evaluation.`,
      });
    }
  };

  const removeFromInquiry = (productId: string) => {
    setInquiryCart(inquiryCart.filter(item => item.id !== productId));
    toast({
      title: "Removed from Manifest",
      description: "Product removed from procurement manifest.",
    });
  };

  const clearCart = () => {
    setInquiryCart([]);
  };

  const isInCart = (productId: string) => inquiryCart.find(item => item.id === productId) !== undefined;

  const handleGetQuote = () => {
    if (inquiryCart.length === 0) {
      toast({
        title: "Manifest Empty",
        description: "Please add products to your procurement manifest first.",
        variant: "destructive"
      });
      return;
    }
    setShowQuoteForm(true);
    setIsCartOpen(false);
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
              
              <div className="flex gap-2">
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

              {/* Cart Sidebar Trigger */}
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="energy" 
                    className="h-12 relative"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Manifest
                    {inquiryCart.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground min-w-[1.5rem] h-6">
                        {inquiryCart.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Procurement Manifest
                    </SheetTitle>
                    <SheetDescription>
                      Products selected for technical evaluation
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-6">
                    {inquiryCart.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Your manifest is empty</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Add products to begin your requirement query
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">
                            {inquiryCart.length} item{inquiryCart.length > 1 ? 's' : ''}
                          </span>
                          <Button variant="ghost" size="sm" onClick={clearCart}>
                            Clear All
                          </Button>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {inquiryCart.map((item) => (
                            <div key={item.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{item.name}</p>
                                <p className="text-xs text-muted-foreground">{item.categoryName}</p>
                                {item.operationalEnvelope.pressure && (
                                  <p className="text-xs text-muted-foreground mt-1">
                                    <Gauge className="h-3 w-3 inline mr-1" />
                                    {item.operationalEnvelope.pressure}
                                  </p>
                                )}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground flex-shrink-0"
                                onClick={() => removeFromInquiry(item.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="border-t pt-4 space-y-3">
                          <Button className="w-full" size="lg" onClick={handleGetQuote}>
                            <FileText className="mr-2 h-4 w-4" />
                            Submit Requirement Query
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            Our engineering team will evaluate your requirements
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
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
                    onAddToCart={() => addToInquiry(product)}
                    onRemoveFromCart={() => removeFromInquiry(product.id)}
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
                {category.products.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 50}>
                    <ProductCard 
                      product={{...product, categoryName: category.name}} 
                      isInCart={isInCart(product.id)}
                      onAddToCart={() => addToInquiry({...product, categoryName: category.name})}
                      onRemoveFromCart={() => removeFromInquiry(product.id)}
                    />
                  </ScrollReveal>
                ))}
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
        <ScrollReveal>
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
        </ScrollReveal>
      </div>

      {/* Quote Request Form */}
      <QuoteRequestForm
        isOpen={showQuoteForm}
        onClose={() => setShowQuoteForm(false)}
        cartItems={inquiryCart}
        onClearCart={clearCart}
      />
    </section>
  );
};

// Product Card Component
interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

const ProductCard = ({ product, isInCart, onAddToCart, onRemoveFromCart }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden h-full">
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
          <Button variant="secondary" size="icon" className="h-8 w-8 shadow-md">
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
            onClick={isInCart ? onRemoveFromCart : onAddToCart}
          >
            {isInCart ? (
              <>
                <FileText className="h-4 w-4 mr-2" />
                In Manifest
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Add to Manifest
              </>
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
          >
            <FileText className="h-4 w-4" />
          </Button>
        </div>

        {/* Expandable Details */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <div>
              <h5 className="text-sm font-medium mb-2">Full Operational Envelope</h5>
              <div className="space-y-1 text-xs text-muted-foreground">
                {product.operationalEnvelope.pressure && (
                  <p><span className="font-medium">Pressure:</span> {product.operationalEnvelope.pressure}</p>
                )}
                {product.operationalEnvelope.temperature && (
                  <p><span className="font-medium">Temperature:</span> {product.operationalEnvelope.temperature}</p>
                )}
                {product.operationalEnvelope.application && (
                  <p><span className="font-medium">Application:</span> {product.operationalEnvelope.application}</p>
                )}
                {product.operationalEnvelope.limits && (
                  <p><span className="font-medium">Limits:</span> {product.operationalEnvelope.limits}</p>
                )}
              </div>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2">Features</h5>
              <div className="flex flex-wrap gap-1">
                {product.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCatalog;
