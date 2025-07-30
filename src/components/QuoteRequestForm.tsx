import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface QuoteRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onClearCart: () => void;
}

const QuoteRequestForm = ({ isOpen, onClose, cartItems, onClearCart }: QuoteRequestFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    companyName: "",
    message: ""
  });
  
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const { toast } = useToast();
  
  const availableProducts = [
    "Downhole Tools",
    "Drilling Chemicals", 
    "Monitoring Equipment",
    "AI Devices",
    "Corrosion Management Systems",
    "Well Intervention Tools",
    "Plug & Abandonment Solutions",
    "Well Construction Equipment",
    "Drilling Fluids",
    "Capillary Technology"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Quote request:", {
      ...formData,
      cartProducts: cartItems,
      selectedProducts: selectedProducts
    });

    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Clear form and cart
    setFormData({ email: "", phone: "", companyName: "", message: "" });
    setSelectedProducts([]);
    onClearCart();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleProduct = (product: string) => {
    setSelectedProducts(prev => 
      prev.includes(product) 
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Request Quote</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Cart Items Display */}
          {cartItems.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Products from Cart ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-40 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-2 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Product Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Select Products/Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availableProducts.map((product) => (
                  <div key={product} className="flex items-center space-x-2">
                    <Checkbox
                      id={product}
                      checked={selectedProducts.includes(product)}
                      onCheckedChange={() => toggleProduct(product)}
                    />
                    <Label 
                      htmlFor={product}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {product}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quote Request Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific requirements or questions..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Send Quote Request
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestForm;