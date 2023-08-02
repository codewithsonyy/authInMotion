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
<p>or</p>
<button className="bg-red-400 p-4 rounded-full" onClick={(signIn)}>sign in</button>
  </>
};

export default EntryPage;