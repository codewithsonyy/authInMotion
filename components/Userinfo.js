"use client"
import React from 'react'

import { signIn, useSession } from 'next-auth/react'

import { motion } from "framer-motion"



const Userinfo = () => {

  const {status,data:session}=useSession()
  console.log(session)
  if(status=="authenticated"){
  return (
    <div>
       <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className=""
   
  >  <div className="shadow-xl flex mt-36 rounded-md p-8  flex-col gap-3 bg-white">
      <h1>Wow welcome to Your Profile!</h1>
      <div>Name: <span className='font-bold'>{session.user.name}</span></div>
      <div>Email: <span className='font-bold'>{session.user.email}</span></div>
      <div>Accesstoken: <span className='font-bold'>********</span></div>
      
    </div>
    </motion.div>
    </div>
  )}
  else{
    return signIn()
  }
}

export default Userinfo
