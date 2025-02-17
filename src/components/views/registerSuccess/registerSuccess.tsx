import { Button } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function RegisterSuccess() {

    const router = useRouter()

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-5'>
           <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-5'>
               <Image
                   src="/images/ilustrations/logo.svg"
                   alt="logo"
                   width={180}
                   height={180}
                 />
                 <Image
                   src="/images/generals/success.svg"
                   alt="login"
                   className="w-full h-auto"
                   width={1024}
                   height={1024}
                 />
           </div>
           <div className='w-full md:w-auto gap-3 flex justify-center flex-col items-center'>
             <h1 className='text-3xl font-bold text-center text-danger-500'>Create Account Success!</h1>
             <div> 
                <p className='text-center font-bold'>Check your email for account activation </p>
             </div>
             <Button variant='bordered' color='danger' onClick={async () => await router.push('/')}> Back to Home</Button>
           </div>
        </div>
    );
}