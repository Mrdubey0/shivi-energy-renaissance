import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Package, 
  Wrench, 
  Beaker, 
  Monitor,
  Cpu,
  Plus,
  FileText,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const ProductCatalog = () => {
  const [inquiryCart, setInquiryCart] = useState<string[]>([]);

  const categories = [
    {
      id: "downhole-tools",
      name: "Downhole Tools",
      icon: Wrench,
      description: "Complete range of completion tools, liner hangers, and casing accessories",
      products: [
        { id: "completion-tools", name: "Completion Tools", description: "Advanced completion solutions for optimal well performance" },
        { id: "liner-hangers", name: "Liner Hangers", description: "Reliable liner hanger systems for complex wells" },
        { id: "casing-accessories", name: "Casing Accessories", description: "Essential accessories for casing installation" },
        { id: "swellable-systems", name: "Swellable Systems", description: "Innovative swellable packer technology" }
      ]
    },
    {
      id: "drilling-chemicals",
      name: "Drilling Fluids & Chemicals", 
      icon: Beaker,
      description: "Environmentally friendly drilling fluids and advanced chemical solutions",
      products: [
        { id: "drilling-fluids", name: "Drilling Fluids", description: "High-performance, eco-friendly drilling mud systems" },
        { id: "circulation-materials", name: "Loss Circulation Materials", description: "Advanced materials for lost circulation prevention" },
        { id: "additives", name: "Drilling Additives", description: "Specialized additives for enhanced performance" },
        { id: "solids-control", name: "Solids Control", description: "Efficient solids control technology and chemicals" }
      ]
    },
    {
      id: "monitoring-equipment",
      name: "Monitoring Equipment",
      icon: Monitor,
      description: "Advanced monitoring and surveillance equipment for safety and efficiency",
      products: [
        { id: "corrosion-monitors", name: "Corrosion Monitoring Systems", description: "Real-time corrosion monitoring solutions" },
        { id: "leak-detection", name: "Leak Detection Equipment", description: "Advanced leak detection and location systems" },
        { id: "pressure-sensors", name: "Pressure & Temperature Sensors", description: "High-precision downhole sensors" },
        { id: "data-loggers", name: "Data Logging Systems", description: "Comprehensive data acquisition systems" }
      ]
    },
    {
      id: "ai-devices",
      name: "AI & Digital Solutions",
      icon: Cpu,
      description: "Cutting-edge AI devices and computer vision applications",
      products: [
        { id: "ppe-monitoring", name: "PPE Compliance Monitoring", description: "AI-powered safety equipment monitoring" },
        { id: "anomaly-detection", name: "Anomaly Detection Systems", description: "Machine learning-based anomaly detection" },
        { id: "digital-twins", name: "Digital Twin Solutions", description: "Advanced digital twin modeling systems" },
        { id: "predictive-maintenance", name: "Predictive Maintenance AI", description: "AI-driven predictive maintenance solutions" }
      ]
    }
  ];

  const addToInquiry = (productId: string) => {
    if (!inquiryCart.includes(productId)) {
      setInquiryCart([...inquiryCart, productId]);
    }
  };

  const removeFromInquiry = (productId: string) => {
    setInquiryCart(inquiryCart.filter(id => id !== productId));
  };

  const isInCart = (productId: string) => inquiryCart.includes(productId);

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Package className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Product Catalog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Product
            <span className="text-primary"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our extensive range of premium energy industry products and solutions. 
            Add items to your inquiry cart for consolidated consultation.
          </p>
        </div>

        {/* Inquiry Cart */}
        {inquiryCart.length > 0 && (
          <div className="mb-12">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Inquiry Cart ({inquiryCart.length} items)</h3>
                </div>
                <Button variant="default" size="sm">
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {inquiryCart.map((productId) => {
                  const product = categories.flatMap(cat => cat.products).find(p => p.id === productId);
                  return (
                    <Badge 
                      key={productId} 
                      variant="secondary" 
                      className="px-3 py-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      onClick={() => removeFromInquiry(productId)}
                    >
                      {product?.name} ×
                    </Badge>
                  );
                })}
              </div>
            </Card>
          </div>
        )}

        {/* Product Categories */}
        <div className="space-y-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} id={category.id}>
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mr-6">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{category.name}</h3>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product) => (
                    <Card 
                      key={product.id} 
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          <Button
                            variant={isInCart(product.id) ? "default" : "outline"}
                            size="icon"
                            className="h-8 w-8 flex-shrink-0"
                            onClick={() => isInCart(product.id) ? removeFromInquiry(product.id) : addToInquiry(product.id)}
                          >
                            {isInCart(product.id) ? (
                              <ShoppingCart className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <CardDescription className="text-sm text-muted-foreground">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <FileText className="h-4 w-4 mr-2" />
                            Specs
                          </Button>
                          <Button variant="ghost" size="sm" className="flex-1">
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our engineering team can develop custom products tailored to your specific requirements. 
              Contact us for bespoke energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Request Custom Quote
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;