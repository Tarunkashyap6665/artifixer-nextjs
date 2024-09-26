"use client"
import { SignIn } from '@clerk/nextjs';
import { Dialog } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useLayoutEffect } from 'react'

const SignInModel = () => {
  const [open, setOpen] = React.useState(false);
  const router=useRouter();
  const handleOpen = () => {
    setOpen(!open);
    if(open){
        router.back()
    }
};
useEffect(() => {
    handleOpen()
}, [])

return (
    <Dialog className='!min-w-fit !max-w-fit'   open={open} handler={handleOpen} placeholder={undefined} onPointerEnter={()=>{}} onPointerLeave={undefined}> 
      <SignIn />
    </Dialog>
  )
}

export default SignInModel