import React from 'react'
import { featuredProducts } from '@/data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll'>
      <div className='w-max flex justify-center'>
        {
        featuredProducts.map(item=>{
          return(
        <div className="w-[100vw] h-[60vh] flex flex-col hover:bg-slate-700 transition-all duration-500 justify-center items-center px-2 py-4 bg-cyan-950 shadow-md md:w-[33vw] md:h-[85vh]">
        {/* TOP  */}
        <div className='w-full flex-1 flex justify-center items-center'>
          <img src={item.img} alt="" className='w-full h-full object-contain'/>
        </div>
        {/* BOTTOM  */}
        <div className="w-full flex-1 flex flex-col justify-center gap-2 md:justify-end">
          <h5>{item.title}</h5>
          <p className='text-xs'>{item.desc}</p>
          <h6 className='text-indigo-300 text-xl'>${item.price}.</h6>
          <button className='bg-red-600 p-2'>Add To Cart</button>
        </div>
        </div>
            
            )
          })}
      </div>
    </div>
  )
}

export default Featured