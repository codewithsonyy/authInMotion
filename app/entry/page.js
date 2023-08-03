'use client'

import LoginFramer from '@/components/LoginFramer'
import { signIn, useSession } from 'next-auth/react';
import Loading from '@/components/Loading';


const EntryPage = () => {
  const { status } = useSession()

  if(status === 'loading') {
    return <Loading />
  }
  return<>
   
    <LoginFramer/>

 </>
};

export default EntryPage;