"use client"
import React from 'react'
import { featuredProducts } from '@/data'
import { useMyContext } from '@/context/MyContext';
import Link from 'next/link';
import { Product } from '../../type';

interface FeaturedProps {
  product: Product;
}

const Featured: React.FC<{ FeaturedProps }> = ({ product }) => {
  const {addToCart} = useMyContext()
  // const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent the click event from propagating to the parent elements
  //   event.stopPropagation();
  //   addToCart(product);

  // }
  return (
    <div className='featured w-screen overflow-x-scroll'>
      <div className='w-max flex justify-center'>
        {
        featuredProducts.map(item=>{
          const {id, img, title, desc, price} = item
          return(
            <Link href={{pathname: `product/${id}`, query: {id}}}>
        <div className="w-[100vw] h-[60vh] flex flex-col hover:bg-slate-700 transition-all duration-500 justify-center items-center px-2 py-4 bg-cyan-950 shadow-md md:w-[33vw] md:h-[85vh]">
        {/* TOP  */}
        <div className='w-full flex-1 flex justify-center items-center'>
          <img src={img} alt="" className='w-full h-full object-contain'/>
        </div>
        {/* BOTTOM  */}
        <div className="w-full flex-1 flex flex-col justify-center gap-2 md:justify-end">
          <h5>{title}</h5>
          <p className='text-xs'>{desc}</p>
          <h6 className='text-indigo-300 text-xl'>${price}.</h6>
          <button className='bg-red-600 p-2' onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
        </div>
        </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Featured