'use client'

import LoginFramer from '@/components/LoginFramer'
import {  useSession } from 'next-auth/react';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';


const EntryPage = () => {
  const { status } = useSession()

  if(status === 'loading') {
    return <Loading />
  }
  return<>
   <Navbar/>
    <LoginFramer/>

 </>
};

export default EntryPage;