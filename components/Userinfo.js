
import React from 'react'
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/utils/session'

const Userinfo = async() => {
  const user = await getCurrentUser();

  if(user ){
  return (
     <div className="shadow-xl flex mt-10 rounded-lg lg:mt-36 w-2/3 mx-auto  p-10  flex-col gap-3 ">
      <h1 className='font-bold text-center'>Wow welcome to Your Profile!</h1>
      <div>Name : <span className='font-bold mx-2'>{user.name || "fetch it from db"}</span></div>
      <div>Email : <span className='font-bold mx-2'>{user.email || "tryagain!"}</span></div>
      <div>Accesstoken : <span className='font-bold mx-2'>************</span></div>
      
    </div>
    
    
  )}
  else{
    return redirect("/entry")
  }
}

export default Userinfo
