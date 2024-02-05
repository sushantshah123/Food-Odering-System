import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

const HoverCartComponent = () => {
  return (
    <>
    <div className='absolute right-2 top-0 bg-slate-700 w-[200px] h-[200px] rounded-sm z-50 border-t-2 border-green-400'>
        <div className='flex flex-col gap-2 justify-center items-center w-full h-full'>
            <BsFillCartFill className="w-[80px] h-[80px] opacity-25"/>
            <h1>YOUR CART IS ENPTY!</h1>
        </div>
    </div>
    </>
  )
}

export default HoverCartComponent