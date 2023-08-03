"use client"
import { motion } from "framer-motion";
import {navVariants} from "../utils/motion";
import {signIn,signOut, useSession } from 'next-auth/react'
import React from 'react'
import Link from "next/link";
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
    <div className='p-4 flex justify-between items-center rounded-full sm:shadow-sm sm:shadow-black sm:bg-[#2ff9c6] '>
        <h2 className='font-extrabold  text-lg text-black '> <Link href="/">authINmotion</Link></h2>
        {status==="authenticated"?(<button onClick={()=>signOut()} className='bg-slate-900 text-white px-6 py-2 rounded-full'>Sign Out</button>):(<button className='bg-slate-900 text-white px-6 py-2 rounded-full'> <Link href="/register">Register Now</Link></button>)}
      
    </div></motion.nav>
  )
}

export default Navbar
