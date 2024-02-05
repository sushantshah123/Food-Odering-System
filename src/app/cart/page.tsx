"use client"
import { useMyContext } from '@/context/MyContext';
import React from 'react'

const CartPage: React.FC = () => {
  const { addToCart, removeFromCart, clearCart, cart, increaseQuantity, decreaseQuantity} = useMyContext();
  console.log('Cart Data:', cart);
  return (
    <>

        <div className='text-black'>
      <h2 className='text-black'>Cart</h2>
      <ul className='text-black'>
        {cart.map((item) => (
          <li key={item.id} className='text-black'>
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart} className='bg-red-600 m-1 px-2 py-1 rounded-sm'>
        Clear Cart
      </button>
    </div>
    </>
  )
}

export default CartPage
