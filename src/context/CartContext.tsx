// Cart Context - provides cart state and actions across the app
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
export interface CartProduct {
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
  images?: string[];
  inStock: boolean;
  category?: string;
  categoryName?: string;
  type?: 'product' | 'service';
}

export interface CartItem extends CartProduct {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isAnimating: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const addToCart = useCallback((product: CartProduct) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
      // Trigger animation
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [cartItems]);

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productId: string) => {
    return cartItems.some(item => item.id === productId);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        isAnimating,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
