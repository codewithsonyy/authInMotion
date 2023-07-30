'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { signIn } from 'next-auth/react'

const ExploreCard = ({ id, imgUrl, providerauth, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[50px] h-[50px] transition-[flex]  duration-[0.7s] rounded-full ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
  
    {active !== id ? ( <div className=" flex items-center justify-center">
      
      <img
      src={imgUrl}
      alt="option-04"
      className="absolute w-[50px] h-[50px] p-2 object-cover rounded-full"
    />
     <h3 className="font-semibold sm:text-[26px] text-[18px] text-black w-1/2 absolute z-0  lg:bottom-16 lg:rotate-[-90deg] lg:origin-[0,0]">
        {providerauth}
      </h3></div> 
     
    ) : (
      <button onClick={()=>signIn(providerauth)} className="absolute bottom-0 p-2 flex   justify-start w-full flex-col  glassmorphism rounded-full">
         {providerauth}
      </button>
    )}
  </motion.div>
);

export default ExploreCard;
