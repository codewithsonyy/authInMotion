"use client"
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { motion } from "framer-motion"

const SigninBtn = () => {
  return (
    <button onClick={()=>signIn("google")} className='flex items-center gap-4 shadow-xlrounded-lg pl-3'>
        <Image src="/g-logo.png" height={30} width={30}/>
        <span className="bg-blue-500 text-white px-4 py-3">

      Sign in with Google
        </span>
    </button>
  )
}

export default SigninBtn
