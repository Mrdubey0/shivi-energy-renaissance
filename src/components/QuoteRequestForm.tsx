import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Quote request:", {
      ...formData,
      products: cartItems
    });

    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Clear form and cart
    setFormData({ email: "", phone: "", companyName: "", message: "" });
    onClearCart();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Request Quote</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Cart Items Display */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Selected Products ({cartItems.length})</CardTitle>
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
              <Input
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific requirements or questions..."
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