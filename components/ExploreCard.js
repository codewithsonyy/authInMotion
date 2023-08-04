'use client';


import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { signIn } from 'next-auth/react'

const ExploreCard = ({ id, imgUrl, providerauth, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'md:flex-[3.5] flex-[4]' : 'md:flex-[0.8] flex-[2]'
    } flex items-center md:justify-center min-w-[50px] h-[50px] transition-[flex]  duration-[0.7s] rounded-full ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
  
    {active !== id ? ( <div className=" flex absolute items-center justify-center">
      
      <img
      src={imgUrl}
      alt="option-04"
      className=" w-[50px] h-[50px] p-2 object-cover md:relative rounded-full"
    />
     <h3 className="font-semibold sm:text-[26px] text-[18px] text-black w-1/2 md:bottom-10 md:absolute md:rotate-[-90deg] ">
        {providerauth? providerauth:"credentials"}
      </h3></div> 
     
    ) : (
      <button onClick={()=>signIn(providerauth,{callbackUrl:"/profile"})} className="absolute text-white bottom-0 py-2 px-3 flex  active:text-green-300 justify-start w-full flex-col  glassmorphism rounded-full">
        {providerauth?providerauth:"credentials"}
      </button>
    )}
  </motion.div>
);

export default ExploreCard;
