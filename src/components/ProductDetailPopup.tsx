import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Gauge, Thermometer, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CartProduct, useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailPopupProps {
  product: CartProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailPopup = ({ product, isOpen, onClose }: ProductDetailPopupProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { toast } = useToast();

  if (!product) return null;

  const images = product.images?.length ? product.images : [product.image, product.image, product.image];
  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    if (inCart) {
      removeFromCart(product.id);
      toast({
        title: "Removed from Cart",
        description: `${product.name} removed from cart.`,
      });
    } else {
      addToCart(product);
      toast({
        title: "Added to Cart",
        description: `${product.name} added to cart.`,
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
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
          <DialogDescription>{product.categoryName}</DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
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
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Operational Envelope */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Operational Envelope
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.operationalEnvelope.pressure && (
                  <div className="flex items-start gap-2">
                    <Gauge className="h-4 w-4 mt-1 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Pressure</p>
                      <p className="text-sm text-muted-foreground">{product.operationalEnvelope.pressure}</p>
                    </div>
                  </div>
                )}
                {product.operationalEnvelope.temperature && (
                  <div className="flex items-start gap-2">
                    <Thermometer className="h-4 w-4 mt-1 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Temperature</p>
                      <p className="text-sm text-muted-foreground">{product.operationalEnvelope.temperature}</p>
                    </div>
                  </div>
                )}
                {product.operationalEnvelope.application && (
                  <div className="col-span-2">
                    <p className="text-sm font-medium">Application</p>
                    <p className="text-sm text-muted-foreground">{product.operationalEnvelope.application}</p>
                  </div>
                )}
                {product.operationalEnvelope.limits && (
                  <div className="col-span-2">
                    <p className="text-sm font-medium">Limits</p>
                    <p className="text-sm text-muted-foreground">{product.operationalEnvelope.limits}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <Badge className="bg-green-500/90 text-white">In Stock</Badge>
              ) : (
                <Badge variant="secondary" className="bg-amber-500/90 text-white">
                  Lead Time Required
                </Badge>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button
              variant={inCart ? "default" : "energy"}
              size="lg"
              className={`w-full transition-all duration-300 ${
                inCart 
                  ? "animate-scale-in scale-[1.02] shadow-lg" 
                  : "hover:scale-[1.02]"
              }`}
              onClick={handleAddToCart}
            >
              {inCart ? (
                <>
                  <Check className="h-5 w-5 mr-2 animate-scale-in" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailPopup;
