import React, { useContext } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from './Products.types'
import { CartContext } from '../context/cartContext'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

function Card({id,title,image,price,rating}:Product) {

    const context = useContext(CartContext)
    const navigate = useNavigate()

    const addToBasketHandlet = ()=>{
        context.addProduct(id)
        swal({
            title:`${title.substring(0,15)}... added to your basket`,
            icon:"success",
            buttons:["ok","Go to basket"]
        }).then(result=>{
            if(result){
                navigate("/cart")
            }
        })
    }

  return (
    <div className="card">
          <img
          src={image}
            alt=""
          />
          <main>
            <p>{title.substring(0,15)}...</p>
            <div className="card-details">
              <div>
                {
                    Array(Math.ceil(rating.rate)).fill(0).map((_,index)=>
                    <AiFillStar key={index} style={{ color: "orange" }} />
                    )
                }
                {
                   Array( 5 - Math.ceil(rating.rate)).fill(0).map((_,index)=>
                     <AiOutlineStar key={index} style={{ color: "orange" }} />
                   )
                }
              </div>
              <p>{price}$</p>
            </div>
            <button onClick={addToBasketHandlet} >Add to Basket</button>
          </main>
        </div>
  )
}

export default Card
