"use client"
import { useMyContext } from '@/context/MyContext'
import { featuredProducts } from '@/data'
import { addToCart } from '@/redux/nextSlice'
import Image from 'next/image'
import React, { useState } from 'react'
import { Product } from '../../../../type'

const SingleProduct = ({searchParams}:any) => {
  const idString = searchParams.id
  // console.log(typeof idString)  //string
  // Note: id coming from url is string so we have to convert it into number
  const id = Number(idString)
  const item = featuredProducts.find((product: any)=>product.id === id)

  const {darkMode, setDarkMode} = useMyContext()

  return (
    <>
    <div className={`flex flex-col gap-2 sm:flex-row sm:gap-8 justify-between items-center px-20 py-5 ${darkMode? 'bg-black text-white' : ""}`}>
      <div className='flex-2'>
        <Image src={item?.img} width={500} height={500}/>
      </div>
      <div className='flex-3 text-black flex flex-col gap-6'>
        <h1 className='text-black font-medium text-2xl'>{item?.title}</h1>
        <div className='text-black'>
          <p className='text-red-500'>$ {item?.price}</p>
          <p className='text-gray-600 text-xs'>{item?.desc}</p>
        </div>
        <div className='text-black flex flex-col gap-2'>
          <p className='text-black text-xs font-medium'>Choose the size</p>
          <div className='flex gap-2'>
            <button className='text-gray-200 px-2 py-1 rounded-sm bg-red-500'>Small</button>
            <button className='text-gray-200 px-2 py-1 rounded-sm bg-orange-500'>Medium</button>
            <button className='text-gray-200 px-2 py-1 rounded-sm bg-purple-500'>Large</button>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-black text-xs font-medium'>Choose additional ingredients</p>
          <div className='flex gap-3'>

            <div className='text-black flex items-center gap-1'>
          <label className='text-black text-xs'>
            Extraa Cheese
          </label>
            <input type="checkbox" id='cheese' name='cheese'/>
            </div>
            <div className='text-black flex items-center gap-1'>
          <label className='text-black text-xs'>
            Extraa Sauce
          </label>
            <input type="checkbox" id='sauce' name='sauce'/>
            </div>
            <div className='text-black flex items-center gap-1'>
          <label className='text-black text-xs'>
            Extraa Paneer
          </label>
            <input type="checkbox" id='paneer' name='paneer'/>
            </div>
          </div>

        </div>
      <div className='flex items-center gap-3 h-8'>
          <input type="number" defaultValue={1} className='text-black border-[1px] border-black focus:outline-none h-full p-1'/>
        <button className='text-white px-4 py-1 rounded-sm bg-blue-500 h-full' onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>
      </div>

    </div>
    </>
  )
}

export default SingleProduct