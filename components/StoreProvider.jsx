'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const StoreContext = createContext(null);
const CART_KEY = 'whatbytes-cart';

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load the cart once when the app starts.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Could not load the saved cart.', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Keep the cart between page refreshes.
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, isLoaded]);

  function addToCart(product) {
    setCart((currentCart) => {
      const itemAlreadyInCart = currentCart.find(
        (item) => item.id === product.id
      );

      if (itemAlreadyInCart) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used inside StoreProvider');
  }

  return store;
}
