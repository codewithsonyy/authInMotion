"use client"
import { useRouter } from "next/navigation";
import {useSession} from "next-auth/react";
import { motion } from 'framer-motion';




import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';


export default function Home() {
  const router =useRouter()
  const {status}=useSession()
  const gotoLoginPage=()=>{
  router.push('/entry')
  }
  return (
   <div className="flex  justify-center items-center h-screen">
    {/* {status !== 'authenticated'? (<><button onClick={gotoLoginPage}>Yes let me in!</button></>):(<button> open my enventory management!</button>)}
     */}
    <section className='  w-full relative z-10'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=' mx-auto  flex h-[60vh] lg:flex-row flex-col gap-8'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95]  p-4 flex  flex-col"
      >
        
        <h2 className="text-2xl font-extrabold">welcome to authinmotion</h2>
        <div className="mt-[48px]  flex flex-wrap flex-col justify-between gap-[24px]">
         <p>hello  </p>
         <p>hello  </p>
         <p>hello  </p>
         <p>hello  </p>
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className='flex-1 flex justify-center items-center'
      >
        <img
          src="/vercel.svg"
          alt="get-started"
          className="w-[90%]  h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
   </div>
   
  )
}





 