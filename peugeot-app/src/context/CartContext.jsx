import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem('peugeot_cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (e) {
      console.error("Failed to parse cart from local storage:", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('peugeot_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    // If the product is Sold, do not add
    if (product.badge === 'Sold') return;

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.product.id === product.id);
      
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Derived states
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const getPriceNumber = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.]/g, '')) || 0;
  };

  const cartSubtotal = cartItems.reduce((acc, item) => {
    const priceStr = item.product.salePrice ? item.product.salePrice : item.product.price;
    const price = getPriceNumber(priceStr);
    return acc + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
