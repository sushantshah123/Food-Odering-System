import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links = [
  {id:4,title:"Home",url:"/"},
  {id:2,title:"Menu",url:"/menu"},
  {id:3,title:"Working Hours",url:"/"},
  {id:4,title:"Contact",url:"/"},

];

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  
  // TEMPORARY 
  const user = false;
  return (
    
      <div className=''>
        { !open ? (
          <img src="open.png" alt="" width={20} height={20} onClick={()=>setOpen(!open)}/>
   ) :
        (

          <img src="close.png" alt="" width={20} height={20} onClick={()=>setOpen(!open)}/>
        )
      }

           { 
           open && <div>
             <div className='backdrop-blur-xl z-20 ps-4 text-white absolute right-0 top-24 w-[200px] h-[350px] flex flex-col justify-center items-start gap-4'>
    {
      links.map((link)=>{
      return(

      <Link href={link.url} key={link.id} className='' onClick={()=>setOpen(false)}>
          <h1 className='text-xl'>{link.title}</h1>
      </Link>
        )
      })
    }
      <div className=' text-xl'>
    { !user ? (
      <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
      ) : 
      <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
    }
      </div>
    <div onClick={()=>setOpen(false)}>
    <CartIcon/>
    </div>
  </div> 
         </div>
  } 

      </div>

   
  )
}

export default MobileMenu