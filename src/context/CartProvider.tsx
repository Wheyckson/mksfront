import { ReactNode, createContext, useState } from "react";

export interface ProductsProps {
  count: number;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantity: number;
}

interface CartContextType {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  checkProductAlreadyInCart: (productId: string) => boolean;
  removeCartItem: (itemId: string) => void;
  decrementItemQuantity: (itemId: string, index: number) => void;
  incrementItemQuantity: (itemId: string, index: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function checkProductAlreadyInCart(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  function incrementItemQuantity(productId: string, index: number) {
    const test = cartItems.filter((c) => c.id === productId);
    if (test) {
      cartItems.map((c) => Number((c.quantity += 1)));
    }
  }

  function decrementItemQuantity(productId: string, index: number) {
    const test = cartItems.filter((c) => c.id === productId);
    if (test) {
      cartItems.map((c) => Number((c.quantity -= 1)));
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        checkProductAlreadyInCart,
        removeCartItem,
        decrementItemQuantity,
        incrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
