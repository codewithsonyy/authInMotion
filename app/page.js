"use client"
import { useRouter } from "next/navigation";
import {useSession} from "next-auth/react";



export default function Home() {
  const router =useRouter()
  const {status}=useSession()
  const gotoLoginPage=()=>{
  router.push('/entry')
  }
  return (
   <div className="">
    {status !== 'authenticated'? (<><button onClick={gotoLoginPage}>Yes let me in!</button></>):(<button> open my enventory management!</button>)}
    
    
   </div>
  )
}
 