import { createContext, useState, useEffect } from "react";
import { Product } from "../Components/Products.types";
import axios from "axios";

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

const CartContextProvider = ({ children }: CartContextProvuderProps) => {
  const [UserCart, setUserCart] = useState<Product[]>([]);
  const [shop, setShop] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setShop(res.data));
  }, []);

  const addProduct = (id: number) => {
    setUserCart(prevProducts=>{
        const mainProductInCart = prevProducts.find(product => product.id == id)
        if(mainProductInCart){
            return prevProducts.map(product => {
                if(product.id == id){
                    return {...product, count: product.count + 1 }
                }else{
                    return {...product}
                }
            })
        }else{
            const mainProductInShop = shop.find(product=>product.id == id) as Product
            return [...prevProducts,{...mainProductInShop,count:1}]
        }
    })
  };
  const removeProduct = (id: number) => {
    setUserCart(prevProducts=>prevProducts.filter(product=> product.id !== id))
  };
  const removeAll = () => setUserCart([]);
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

export default CartContextProvider;
