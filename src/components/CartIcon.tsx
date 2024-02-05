import Link from 'next/link'
import React from 'react'

const CartIcon = ({cart}:any) => {
  return (
    <Link href="/cart" className='flex gap-1 text-xs'>
        <img src="cart.png" alt="" width={15} height={15}/>
        <span className='text-xs'>Cart({cart.length})</span>
    </Link>
  )
}

export default CartIcon