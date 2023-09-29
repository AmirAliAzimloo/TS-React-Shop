import { createContext, useState } from "react";
import { Product } from "../Components/Products.types";

type CartContextProvuderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  UserCart: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAll: () => void;
  shop: Product[];
};

export const CartContext = createContext({} as CartContextType);

const CartContextProvuder = ({ children }: CartContextProvuderProps) => {
  const [UserCart, setUserCart] = useState<Product[]>([]);
  const [shop, setShop] = useState<Product[]>([]);

  const addProduct = (id: number) => {
    // Code ...
  };
  const removeProduct = (id: number) => {
    // Code ...
  };
  const removeAll = () => {
    // Code ...
  };
  return (
    <CartContext.Provider
      value={{
        UserCart,
        addProduct,
        removeProduct,
        removeAll,
        shop,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
