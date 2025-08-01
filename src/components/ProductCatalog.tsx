import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  Package, 
  Wrench, 
  Beaker, 
  Monitor,
  Cpu,
  Plus,
  FileText,
  ArrowRight,
  Search,
  Filter,
  Download,
  Star,
  Eye,
  Trash2,
  Send,
  X
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import QuoteRequestForm from "./QuoteRequestForm";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  features: string[];
  specs: string;
  image: string;
  sustainable: boolean;
  inStock: boolean;
  category?: string;
  categoryName?: string;
}

const ProductCatalog = () => {
  const [inquiryCart, setInquiryCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { toast } = useToast();

  const categories = [
    {
      id: "downhole-tools",
      name: "Downhole Tools",
      icon: Wrench,
      color: "from-blue-500 to-blue-600",
      description: "Complete range of completion tools, liner hangers, and casing accessories",
      count: 24,
      products: [
        { 
          id: "completion-tools", 
          name: "Advanced Completion Tools", 
          description: "High-performance completion solutions with real-time monitoring capabilities",
          price: "Request Quote",
          rating: 4.8,
          features: ["Real-time monitoring", "Corrosion resistant", "High temperature rated", "Modular design"],
          specs: "API 5CT Grade, Pressure Rating: 15,000 PSI",
          image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: true
        },
        { 
          id: "liner-hangers", 
          name: "Liner Hanger Systems", 
          description: "Reliable liner hanger systems engineered for the most complex wells",
          price: "Request Quote",
          rating: 4.9,
          features: ["Superior sealing", "Easy installation", "Debris tolerance", "Field proven"],
          specs: "Size Range: 4.5\" - 13.375\", Working Pressure: 10,000 PSI",
          image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: true
        },
        { 
          id: "casing-accessories", 
          name: "Casing Accessories Suite", 
          description: "Comprehensive accessories for optimal casing installation and integrity",
          price: "Request Quote",
          rating: 4.7,
          features: ["Multiple configurations", "Enhanced durability", "Quick deployment", "Cost effective"],
          specs: "Various sizes available, Temperature Rating: -40°F to 350°F",
          image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
          sustainable: false,
          inStock: true
        },
        { 
          id: "swellable-systems", 
          name: "Swellable Packer Technology", 
          description: "Innovative swellable packer systems for zonal isolation",
          price: "Request Quote",
          rating: 4.6,
          features: ["Water activated", "Oil activated", "Long-term reliability", "No setting tool required"],
          specs: "Activation Time: 6-24 hours, Element Length: 1-20 ft",
          image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: false
        }
      ]
    },
    {
      id: "drilling-chemicals",
      name: "Drilling Fluids & Chemicals", 
      icon: Beaker,
      color: "from-green-500 to-green-600",
      description: "Environmentally friendly drilling fluids and advanced chemical solutions",
      count: 18,
      products: [
        { 
          id: "eco-drilling-fluids", 
          name: "Eco-Friendly Drilling Fluids", 
          description: "Biodegradable drilling mud systems with superior performance",
          price: "Request Quote",
          rating: 4.9,
          features: ["100% biodegradable", "Low toxicity", "High performance", "Cost effective"],
          specs: "Density Range: 8.5-19 ppg, Viscosity: Customizable",
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: true
        },
        { 
          id: "circulation-materials", 
          name: "Lost Circulation Materials", 
          description: "Advanced LCM for severe loss zones and wellbore stability",
          price: "Request Quote",
          rating: 4.8,
          features: ["Multiple particle sizes", "Rapid mixing", "Temperature stable", "Non-damaging"],
          specs: "Particle Size: 50-2000 microns, Temperature Rating: 500°F",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: true
        }
      ]
    },
    {
      id: "monitoring-equipment",
      name: "Monitoring Equipment",
      icon: Monitor,
      color: "from-purple-500 to-purple-600",
      description: "Advanced monitoring and surveillance equipment for safety and efficiency",
      count: 16,
      products: [
        { 
          id: "corrosion-monitors", 
          name: "Real-Time Corrosion Monitoring", 
          description: "Continuous corrosion monitoring with AI-powered analytics",
          price: "Request Quote",
          rating: 4.9,
          features: ["Real-time data", "AI analytics", "Remote monitoring", "Predictive alerts"],
          specs: "Accuracy: ±0.1 mpy, Data logging: 1 year, Wireless range: 5km",
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: true
        },
        { 
          id: "leak-detection", 
          name: "Advanced Leak Detection", 
          description: "Multi-sensor leak detection with precise location identification",
          price: "Request Quote",
          rating: 4.8,
          features: ["Multi-sensor array", "Precise location", "Fast response", "Weather resistant"],
          specs: "Detection Range: 1-1000 ppm, Response Time: <30 seconds",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: true
        }
      ]
    },
    {
      id: "ai-devices",
      name: "AI & Digital Solutions",
      icon: Cpu,
      color: "from-orange-500 to-orange-600",
      description: "Cutting-edge AI devices and computer vision applications",
      count: 12,
      products: [
        { 
          id: "ppe-monitoring", 
          name: "AI PPE Compliance Monitor", 
          description: "Computer vision system for automated safety equipment monitoring",
          price: "Request Quote",
          rating: 4.9,
          features: ["Real-time detection", "99% accuracy", "Multi-zone coverage", "Cloud integration"],
          specs: "Coverage: 50m radius, Accuracy: 99.2%, Processing: Edge + Cloud",
          image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
          sustainable: true,
          inStock: true
        },
        { 
          id: "anomaly-detection", 
          name: "AI Anomaly Detection", 
          description: "Machine learning system for operational anomaly identification",
          price: "Request Quote",
          rating: 4.7,
          features: ["Machine learning", "Pattern recognition", "Predictive alerts", "Customizable"],
          specs: "Processing: Real-time, Accuracy: 95%+, Integration: API/SDK",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
          sustainable: true,
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
        title: "Product Added",
        description: `${product.name} added to inquiry cart.`,
      });
    }
  };

  const removeFromInquiry = (productId: string) => {
    setInquiryCart(inquiryCart.filter(item => item.id !== productId));
    toast({
      title: "Product Removed",
      description: "Product removed from inquiry cart.",
    });
  };

  const clearCart = () => {
    setInquiryCart([]);
  };

  const isInCart = (productId: string) => inquiryCart.find(item => item.id === productId) !== undefined;

  const handleGetQuote = () => {
    if (inquiryCart.length === 0) {
      toast({
        title: "Cart Empty",
        description: "Please add products to your cart first.",
        variant: "destructive"
      });
      return;
    }
    setShowQuoteForm(true);
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of energy solutions designed for efficiency, sustainability, and reliability.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">5 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-border shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products, features, or specifications..."
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

            {/* Inquiry Cart Button */}
            {inquiryCart.length > 0 && (
              <Button 
                variant="energy" 
                className="h-12 relative"
                onClick={handleGetQuote}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart ({inquiryCart.length})
                <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground min-w-[1.5rem] h-6">
                  {inquiryCart.length}
                </Badge>
              </Button>
            )}
          </div>
        </div>

        {/* Inquiry Cart Display */}
        {inquiryCart.length > 0 && (
          <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Inquiry Cart ({inquiryCart.length})
                </span>
                <Button variant="outline" size="sm" onClick={clearCart}>
                  Clear All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
                {inquiryCart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeFromInquiry(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full" size="lg" onClick={handleGetQuote}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Request Quote for Selected Products
              </Button>
            </CardContent>
          </Card>
        )}

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
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  isInCart={isInCart(product.id)}
                  onAddToCart={() => addToInquiry(product)}
                  onRemoveFromCart={() => removeFromInquiry(product.id)}
                />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={{...product, categoryName: category.name}} 
                    isInCart={isInCart(product.id)}
                    onAddToCart={() => addToInquiry({...product, categoryName: category.name})}
                    onRemoveFromCart={() => removeFromInquiry(product.id)}
                  />
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
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 shadow-xl backdrop-blur-sm">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Can't Find What You Need?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our engineering team specializes in developing custom solutions tailored to your 
              specific operational requirements. Every solution is designed with CO-MBS principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Request Custom Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Schedule Technical Consultation
              </Button>
            </div>
          </div>
        </div>
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
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.sustainable && (
            <Badge className="bg-green-500/90 text-white border-0 shadow-md">
              CO-MBS ✓
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="bg-red-500/90 text-white border-0">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="h-8 w-8 shadow-md">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8 shadow-md">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </CardTitle>
          <div className="flex items-center text-yellow-500 ml-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs ml-1 text-muted-foreground">{product.rating}</span>
          </div>
        </div>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </CardDescription>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {product.price}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {product.categoryName}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Key Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 mb-3">
            {product.features.slice(0, 2).map((feature, idx) => (
              <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
                {feature}
              </Badge>
            ))}
            {product.features.length > 2 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{product.features.length - 2} more
              </Badge>
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
            disabled={!product.inStock}
          >
            {isInCart ? (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Added
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
            onClick={() => setShowDetails(!showDetails)}
          >
            <FileText className="h-4 w-4" />
          </Button>
        </div>

        {/* Expandable Details */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <div>
              <h5 className="text-sm font-medium mb-1">Specifications</h5>
              <p className="text-xs text-muted-foreground">{product.specs}</p>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2">All Features</h5>
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