"use client"
import React from 'react'
import SigninBtn from './SigninBtn'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { motion } from "framer-motion"
import LoginFramer from './LoginFramer'

const Userinfo = () => {
  const {status,data:session}=useSession()
  if(status==="authenticated"){
     return   <LoginFramer/>
      // <motion.div
  //   whileInView={{ opacity: 1 }}
  //   whileHover={{ scale: 1.1 }}
  //   transition={{ duration: 0.5, type: 'tween' }}
  //   className="app__profile-item"
   
  // >  <div className="shadow-xl rounded-md p-8 flex flex-col gap-3 bg-red-200">
  //     <Image className='rounded-full' src={session?.user?.image} width={60} height={60}/>
  //     <div>Name: <span className='font-bold'>{session?.user?.name}</span></div>
  //     <div>Email: <span className='font-bold'>{session?.user?.email}</span></div>
  //   </div>
  //   <LoginFramer/></motion.div>
    
  }
  else{
    return  <motion.div
    whileInView={{ y: [-100, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    
  ><SigninBtn/></motion.div>
  }
  return (
    <div>
      
    </div>
  )
}

export default Userinfo