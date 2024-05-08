'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('Logging out...');
    
    localStorage.removeItem('token');
    
    router.push('/');
  }, [router]);
  

  return (<div>Logging out...</div>);
};

export default LogoutPage;