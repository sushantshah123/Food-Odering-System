import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-8 flex justify-between py-2 px-10 items-center bg-red-600 text-white'>
      <Link href="/">Foodie Woodie</Link>
      <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer