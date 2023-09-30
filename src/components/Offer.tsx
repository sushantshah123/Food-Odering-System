import React from 'react'
// import CountDown from './CountDown'

const Offer = () => {
  return (
    <div>
       <div className='flex flex-col md:flex-row w-full h-[80vh] bg-black'>
        {/* LEFT  */}
        <div className='flex-1 px-4 md:h-full flex flex-col justify-center items-center gap-4 overflow-hidden'>
          <h1 className='text-4xl space-x-1 px-6 text-center font-semibold text-yellow-300'>Delicious Burger & Pizza</h1>
          <p className=''>Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.</p>
          {/* <CountDown/> */}
          <button className='bg-blue-600 text-white p-2 rounded-sm hover:scale-105'>Order Now</button>
        </div>
        {/* RIGHT  */}
        <div className='flex-1 md:h-full justify-center items-center'>
          <img src="/temporary/p11.png" alt="" className='h-full w-full object-contain'/>
        </div>
    </div>
    </div>
  )
}

export default Offer