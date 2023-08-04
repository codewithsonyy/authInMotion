"use client";
import React from 'react'


import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import ExploreCard from './ExploreCard';

// import { Icons } from './Icons';



const LoginFramer = () => {
    const [active, setActive] = useState("");


    const optionslogin = [
     {
       id: 'option-1',
       imgUrl: '/google.png',
       providerauth: 'google',
     },
     {
       id: 'option-2',
       imgUrl: '/github.svg',
       providerauth: 'github',
     },
     {
       id: 'option-3',
       imgUrl: '/facebook.png',
       providerauth: 'facebook',
     },
    
    
     {
      id: 'option-4',
      imgUrl: '/email.png',
      providerauth: '',
    }  
   ];
   
  

   return (
     <section className="  md:mt-[50px] bg-emerald-300 rounded-full md:pt-8 py-8 hero-gradient shadow-black shadow-inner" >
       <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className="2xl:max-w-[1280px] w-2/3 mx-auto flex  flex-col"
       > 
         <div className="flex md:flex-row md:justify-center md:items-center flex-col min-h-[50vh] gap-2  md:gap-4">
           {optionslogin.map((option, index) => (
             <ExploreCard 
             key={option.id}
               {...option}
               index={index}
               active={active}
               handleClick={setActive}
             />
           ))}
         </div>
       </motion.div>
     </section>
   );
}

export default LoginFramer
