import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, AlertCircle, Plus, Minus, Trash2, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity?: number;
  type?: 'product' | 'service';
}

interface QuoteRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onClearCart: () => void;
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
}

const QuoteRequestForm = ({ isOpen, onClose, cartItems, onClearCart, onUpdateQuantity, onRemoveItem }: QuoteRequestFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    companyName: "",
    message: "",
    wellPhase: "",
    formationType: "",
    mechanicalObjective: "",
    urgencyProtocol: ""
  });
  
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const { toast } = useToast();
  
  const availableProducts = [
    "Downhole Tools",
    "Mills & Bits",
    "Monitoring Equipment",
    "Digital Oversight Systems",
    "Corrosion Management Systems",
    "Well Intervention Tools",
    "Plug & Abandonment Solutions",
    "Well Construction Equipment",
    "Capillary Technology"
  ];

  const wellPhases = [
    "Drilling",
    "Completion",
    "Production",
    "Workover",
    "Abandonment"
  ];

  const formationTypes = [
    "Sandstone",
    "Carbonate",
    "Shale",
    "Mixed/Complex",
    "Unknown - Requires Assessment"
  ];

  const mechanicalObjectives = [
    "Obstruction Removal",
    "Section Milling",
    "Zonal Isolation",
    "Production Enhancement",
    "Integrity Restoration",
    "Monitoring Installation",
    "Other - Specify in Message"
  ];

  const urgencyProtocols = [
    "Standard - 2-4 Weeks",
    "Expedited - 1-2 Weeks",
    "Urgent - Within 1 Week",
    "Emergency - Immediate"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate operational context
    if (!formData.wellPhase || !formData.formationType || !formData.mechanicalObjective || !formData.urgencyProtocol) {
      toast({
        title: "Operational Context Required",
        description: "Please complete all operational context fields for engineering validation.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Requirement Query:", {
      ...formData,
      manifestProducts: cartItems,
      additionalProducts: selectedProducts
    });

    toast({
      title: "Requirement Query Submitted",
      description: "Our engineering team will validate compatibility and respond within 24-48 hours.",
    });

    // Clear form and cart
    setFormData({ 
      email: "", 
      phone: "", 
      companyName: "", 
      message: "",
      wellPhase: "",
      formationType: "",
      mechanicalObjective: "",
      urgencyProtocol: ""
    });
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

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
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
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Requirement Query
          </DialogTitle>
          <DialogDescription>
            Submit your operational requirements for engineering validation and technical evaluation.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Manifest Items Display */}
          {cartItems.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">Procurement Manifest ({cartItems.length})</CardTitle>
                    <CardDescription>Products selected for technical evaluation</CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={onClearCart}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 w-full sm:w-auto"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-40 overflow-y-auto">
                  {cartItems.map((item) => {
                    const isService = item.type === 'service';
                    return (
                      <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-2 border rounded-lg">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded flex-shrink-0"
                          />
                          <div className="flex flex-col gap-1 min-w-0">
                            <p className="font-medium text-sm truncate">{item.name}</p>
                            <Badge 
                              variant={isService ? "secondary" : "default"} 
                              className="w-fit text-xs"
                            >
                              {isService ? "Service" : "Product"}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-2 ml-0 sm:ml-auto">
                          {/* Quantity Controls - Only for Products */}
                          {!isService && (
                            <div className="flex items-center gap-1">
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => onUpdateQuantity?.(item.id, Math.max(1, (item.quantity || 1) - 1))}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity || 1}
                              </span>
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => onUpdateQuantity?.(item.id, (item.quantity || 1) + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                          {/* Remove Item Button */}
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => onRemoveItem?.(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Operational Context - MANDATORY */}
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Operational Context (Required)
              </CardTitle>
              <CardDescription>
                This information enables engineering validation of product compatibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="wellPhase">Well Phase *</Label>
                  <Select value={formData.wellPhase} onValueChange={(value) => handleSelectChange("wellPhase", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select well phase" />
                    </SelectTrigger>
                    <SelectContent>
                      {wellPhases.map((phase) => (
                        <SelectItem key={phase} value={phase}>{phase}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="formationType">Formation Type *</Label>
                  <Select value={formData.formationType} onValueChange={(value) => handleSelectChange("formationType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select formation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {formationTypes.map((formation) => (
                        <SelectItem key={formation} value={formation}>{formation}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mechanicalObjective">Primary Mechanical Objective *</Label>
                  <Select value={formData.mechanicalObjective} onValueChange={(value) => handleSelectChange("mechanicalObjective", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select objective" />
                    </SelectTrigger>
                    <SelectContent>
                      {mechanicalObjectives.map((objective) => (
                        <SelectItem key={objective} value={objective}>{objective}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgencyProtocol">Urgency Protocol *</Label>
                  <Select value={formData.urgencyProtocol} onValueChange={(value) => handleSelectChange("urgencyProtocol", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyProtocols.map((urgency) => (
                        <SelectItem key={urgency} value={urgency}>{urgency}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Product Selection */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Additional Products/Services</CardTitle>
              <CardDescription>Select any additional items for evaluation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availableProducts.map((product) => (
                  <div 
                    key={product} 
                    className={`flex items-center justify-between p-2 rounded-lg border transition-colors ${
                      selectedProducts.includes(product) 
                        ? 'border-primary/50 bg-primary/5' 
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={product}
                        checked={selectedProducts.includes(product)}
                        onCheckedChange={() => toggleProduct(product)}
                      />
                      <Label 
                        htmlFor={product}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {product}
                      </Label>
                    </div>
                    {selectedProducts.includes(product) && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                        onClick={() => toggleProduct(product)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information Form */}
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
              <Label htmlFor="message">Technical Requirements / Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Specify any additional technical requirements, well conditions, or operational constraints..."
                rows={4}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Submit Requirement Query
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Engineering validation will be completed before any quote or commitment is provided.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestForm;
