import { ReactNode, createContext, useState } from "react";

export interface ProductsProps {
  products: IProduct;
  count: number;
}
[];

export interface IProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface CartContextType {
  cartItems: ProductsProps[];
  addToCart: (product: IProduct) => void;
  checkProductAlreadyInCart: (productId: string) => boolean;
  removeCartItem: (itemId: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductsProps[]>([]);

  function addToCart(product: IProduct) {
    const copyCart = [...cartItems];
    copyCart.push({ products: product, count: 1 });

    setCartItems(copyCart);
  }

  function removeCartItem(productId: string) {
    setCartItems((state) =>
      state.filter((item) => item.products.id !== productId)
    );
  }

  function checkProductAlreadyInCart(productId: string) {
    return cartItems.some((item) => item.products.id === productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        checkProductAlreadyInCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
