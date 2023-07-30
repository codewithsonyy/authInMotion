"use client"
import { motion } from "framer-motion";
import {navVariants} from "../utils/motion";
import {signIn,signOut, useSession } from 'next-auth/react'
import React from 'react'
useSession
const Navbar = () => {
  const {status}=useSession();
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="py-8 relative"
  >
    <div className='p-4 flex justify-between items-center rounded-full shadow-md bg-green-300'>
        <h2 className='font-bold text-lg text-black'>authmotion</h2>
        {status==="authenticated"?(<button onClick={()=>signOut()} className='bg-slate-900 text-white px-6 py-2 rounded-full'>Sign Out</button>):(<button onClick={()=>signIn("google")} className='bg-slate-900 text-white px-6 py-2 rounded-full'>Sign In</button>)}
      
    </div></motion.nav>
  )
}

export default Navbar
