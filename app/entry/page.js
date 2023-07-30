'use client'
// import EntryForm from "@/components/EntryForm";
import LoginFramer from '@/components/LoginFramer'
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading';
// import Alert from "@/components/Alert";

const EntryPage = () => {
  const { status } = useSession()

  if(status === 'loading') {
    return <Loading />
  }
  return<>
    {/* <Alert /> */}
    <LoginFramer/>
  </>
};

export default EntryPage;