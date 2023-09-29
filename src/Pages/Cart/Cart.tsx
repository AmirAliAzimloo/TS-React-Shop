import React, { useContext } from "react";
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { CartContext } from "../../context/cartContext";

export default function Cart() {
  
  const context = useContext(CartContext)

  return (
    <>
      {context.UserCart.length !== 0 ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button
            >
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {
              context.UserCart.map(product=> (
                <div key={product.id}>
                <div className="card" >
              <img
                src={product.image}
                alt=""
              />
              <main>
                <p>{product.title.substring(0,15)}...</p>
                <div className="card-details">
                  <div>
                  {
                    Array(Math.ceil(product.rating.rate)).fill(0).map((_,index)=>
                    <AiFillStar key={index} style={{ color: "orange" }} />
                    )
                }
                {
                   Array( 5 - Math.ceil(product.rating.rate)).fill(0).map((_,index)=>
                     <AiOutlineStar key={index} style={{ color: "orange" }} />
                   )
                }
                  </div>
                  <p>{product.price}$</p>
                </div>
                <div className="product-count">
                  <p>Count: {product.count}</p>
                </div>
                <button
                onClick={()=>context.removeProduct(product.id)}
                >Remove From Basket</button>
              </main>
               </div>
                </div>
              ))
            }
            
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
