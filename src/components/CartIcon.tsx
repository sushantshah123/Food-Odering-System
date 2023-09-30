import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex gap-1'>
        <img src="cart.png" alt="" width={20} height={15}/>
        <span>Cart(5)</span>
    </Link>
  )
}

export default CartIcon