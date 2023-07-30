"use client";
import React from 'react'


import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import ExploreCard from './ExploreCard';
import { Icons } from './Icons';



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
      imgUrl: '/tick.png',
      providerauth: 'facebook ',
    },
    
     {
      id: 'option-4',
      imgUrl: '/email.png',
      providerauth: 'credentials',
    }  
   ];
   return (
     <section className="sm:p-16 xs:p-8 px-6  py-12" >
       <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className="2xl:max-w-[1280px] w-2/3 mx-auto flex mt-28 flex-col"
       >
         <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh]  gap-4">
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
