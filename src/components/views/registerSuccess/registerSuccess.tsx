import Image from 'next/image';


export default function RegisterSuccess() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
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
        </div>
    );
}