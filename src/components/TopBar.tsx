"use client"
import { useMyContext } from '@/context/MyContext'
import React from 'react'

const TopBar = () => {
  const {darkMode} = useMyContext()
  return (
    <div className={`h-8 bg-red-600 ${darkMode ? "bg-black" : ""} text-white flex justify-center items-center text-xs`}>
       <h5>We Deliver Our Foods All Over The Country!</h5>
    </div>
  )
}

export default TopBar