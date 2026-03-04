import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Gauge, Thermometer, Activity, Settings, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CartProduct, useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ServiceDetailPopupProps {
  service: CartProduct | null;
  isOpen: boolean;
  onClose: () => void;
  serviceDetails?: {
    param1Label?: string;
    param1Value?: string;
    param2Label?: string;
    param2Value?: string;
    application?: string;
    limits?: string;
  };
}

const ServiceDetailPopup = ({ service, isOpen, onClose, serviceDetails }: ServiceDetailPopupProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { toast } = useToast();

  if (!service) return null;

  const images = service.images?.length ? service.images : [service.image, service.image, service.image];
  const inCart = isInCart(service.id);

  const handleAddToInquiry = () => {
    if (inCart) {
      removeFromCart(service.id);
      toast({
        title: "Removed from Inquiry",
        description: `${service.name} removed from inquiry.`,
      });
    } else {
      addToCart({ ...service, type: 'service' });
      toast({
        title: "Added to Inquiry",
        description: `${service.name} added to inquiry.`,
      });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{service.name}</DialogTitle>
          <DialogDescription>{service.categoryName}</DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={images[currentImageIndex]}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${service.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>

            {/* Operational Envelope */}
            {serviceDetails && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Operational Envelope
                </h3>
                
                {serviceDetails.param1Label && serviceDetails.param1Value && (
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center text-sm font-semibold text-primary mb-1">
                      <Gauge className="h-4 w-4 mr-2" />
                      {serviceDetails.param1Label}
                    </div>
                    <p className="text-sm text-muted-foreground">{serviceDetails.param1Value}</p>
                  </div>
                )}

                {serviceDetails.param2Label && serviceDetails.param2Value && (
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <div className="flex items-center text-sm font-semibold text-foreground mb-1">
                      <Thermometer className="h-4 w-4 mr-2" />
                      {serviceDetails.param2Label}
                    </div>
                    <p className="text-sm text-muted-foreground">{serviceDetails.param2Value}</p>
                  </div>
                )}

                {serviceDetails.application && (
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <div className="flex items-center text-sm font-semibold text-foreground mb-1">
                      <Settings className="h-4 w-4 mr-2" />
                      Application
                    </div>
                    <p className="text-sm text-muted-foreground">{serviceDetails.application}</p>
                  </div>
                )}

                {serviceDetails.limits && (
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <div className="flex items-center text-sm font-semibold text-destructive mb-1">
                      <Activity className="h-4 w-4 mr-2" />
                      Limits & Constraints
                    </div>
                    <p className="text-sm text-muted-foreground">{serviceDetails.limits}</p>
                  </div>
                )}
              </div>
            )}

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Capabilities</h3>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Inquiry Button */}
            <Button
              variant={inCart ? "default" : "energy"}
              size="lg"
              className="w-full"
              onClick={handleAddToInquiry}
            >
              {inCart ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Added to Inquiry
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Inquiry
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailPopup;
