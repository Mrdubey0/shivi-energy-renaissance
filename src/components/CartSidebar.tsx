import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, X, Gauge, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import QuoteRequestForm from "./QuoteRequestForm";
import { useToast } from "@/hooks/use-toast";

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, cartCount } = useCart();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { toast } = useToast();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart Empty",
        description: "Please add products to your cart first.",
        variant: "destructive"
      });
      return;
    }
    setShowQuoteForm(true);
    setIsCartOpen(false);
  };

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
      title: "Removed from Cart",
      description: `${productName} removed from cart.`,
    });
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <>
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              Shopping Cart
            </SheetTitle>
            <SheetDescription>
              Products selected for inquiry
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Add products or services to get started
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {cartCount} item{cartCount > 1 ? 's' : ''}
                  </span>
                  <Button variant="ghost" size="sm" onClick={clearCart}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                </div>
                
                {/* Products Section */}
                {cartItems.filter(item => item.category !== 'service').length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Products
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        ({cartItems.filter(item => item.category !== 'service').length})
                      </span>
                    </div>
                    <div className="space-y-3">
                      {cartItems.filter(item => item.category !== 'service').map((item) => (
                        <div key={item.id} className="flex flex-col gap-2 p-3 bg-muted/50 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-14 h-14 object-cover rounded"
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
                              onClick={() => handleRemove(item.id, item.name)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-xs text-muted-foreground mr-2">Qty:</span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Section */}
                {cartItems.filter(item => item.category === 'service').length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                        Services
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        ({cartItems.filter(item => item.category === 'service').length})
                      </span>
                    </div>
                    <div className="space-y-3">
                      {cartItems.filter(item => item.category === 'service').map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.categoryName}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground flex-shrink-0"
                            onClick={() => handleRemove(item.id, item.name)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="border-t pt-4 space-y-3">
                  <Button className="w-full" size="lg" onClick={handleCheckout}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Our team will contact you with pricing details
                  </p>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <QuoteRequestForm
        isOpen={showQuoteForm}
        onClose={() => setShowQuoteForm(false)}
        cartItems={cartItems}
        onClearCart={clearCart}
      />
    </>
  );
};

export default CartSidebar;
