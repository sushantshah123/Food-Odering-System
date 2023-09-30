"use client"
import React, { useState,useEffect } from 'react'
const items = [
  {id:1,title:"Our burgers are waiting for you. Hasty and tasty!",img:"slide1.png"},
  {id:2,title:"Our burgers are waiting for you. Hasty and tasty!",img:"slide2.png"},
  {id:3,title:"Our burgers are waiting for you. Hasty and tasty!",img:"slide3.png"},
  // {id:4,title:"Our burgers are waiting for you. Hasty and tasty!",img:"/"},

];

const Slider = () => {
  const [slide,setSlide] = useState(0)
  useEffect(() => {  
    const interval = setInterval(()=>{
       setSlide((prev)=>prev === items.length-1 ? 0 : prev+1)
    },4000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className='flex flex-col md:flex-row w-full h-[calc(100vh-6rem)]'>
        {/* LEFT  */}
        <div className='flex-1 bg-red-600 md:h-full flex flex-col justify-center items-center gap-4 overflow-hidden'>
          <h1 className='overflow-hidden text-4xl space-x-1 px-6 text-center font-semibold text-yellow-300'>{items[slide].title}</h1>
          <button className='bg-blue-600 text-white p-2 rounded-sm hover:scale-105'>Order Now</button>
        </div>
        {/* RIGHT  */}
        <div className='flex-1 md:h-full'>
          <img src={items[slide].img} alt="" className='h-full w-full object-cover'/>
        </div>
    </div>
  )
}

export default Slider