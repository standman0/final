"use client"
import  Header  from '@/app/component/header';
import Footer from '@/app/component/footer'
import Image from 'next/image';
import Heart from '@/app/images/Heart.png'
import Ball from '@/public/ball.svg'
import Zig from '@/public/zigzag.svg'
import SocialImport from '@/public/social.svg'


export default function Social () {

    return(
        <div className="bg-white">
        <Header/>
        <div className=" mx-auto aria-label max-w-7xl max-h-[42rem]  overflow-hidden bg-white">         
<div className=" flex pl-16  mb-10 text-base flex-row w-full border-b-0">
    <div className=" w-1/2 ">
    <div className='mt-12 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-blue-800 cursor-pointer'>
    Socialize
</div>
         <div className="pt-5 items-center w-8/12  flex-grow bg-white"
>
        <h2 className='text-black text-5xl leading-nomal font-extrabold mb-3 '>
        Connect & build real relationships
        </h2>
        <p className='text-neutral-400 pt-5 texl-2xl'>myCircle allows you socialize, chat and have fun within circle threads in each circle groups. Private and Public conversations can be initiated. With the myCircle premium business groups, business opportunities can be discussed and executed jointly.</p>
    </div>
     <button className='px-14 mt-14 py-4 rounded-md  hover:bg-green-600 hover:text-blue-600 bg-blue-800 '>Get Started</button>
    </div>
   
    <div className="img1 bg-socialash w-1/2 relative h-[40rem] flex justify-center overflow-hidden"
 >     <SocialImport/>
    </div>
</div>
</div>

<div className="max-w-7xl mx-auto aria-label w-auto  h-80 flex flex-row rounded-xl bg-teal-50 ">
<div className="grid justify-items-center text-center w-1/3  h-full">
<div className="flex flex-col text-left pl-16 justify-center">
    <Ball/>
<h1 className='text-xl mt-5 font-bold text-blue-800 '>Connect</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Connect and link up with like minded financially reliable and accountable connects </p>
</div>
</div>

<div className=" grid justify-items-center text-center w-1/3  h-full ">
<div className="flex flex-col text-left pl-16 justify-center">
<Ball/>
<h1 className='text-xl mt-5 font-bold text-blue-800 '>Network</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Grow your Network, join business Groups, execute joint Business and share your risk </p>
</div>
</div>

<div className=" grid justify-items-center text-center w-1/3  h-full ">
<div className="flex flex-col text-left pl-16 justify-center">
<Ball/>
<h1 className='text-xl mt-5 font-bold text-blue-800 '>Engage</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Engage on circle threads, learn financial literacy Realtime from financial experts </p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto aria-label flex flex-row my-32 gap-6 justify-center w-full h-auto">
    <div className="img relative  bg-blue-950 w-1/3 rounded-xl">
    <Zig className="absolute bottom-10 right-4"/>
    <Image
    src={Heart}
    height={300}
    width={300}
    alt=""
    />

    </div>
    <div className=" flex flex-col justify-center   ">
        <h1 className='text-black text-3xl mb-10 font-black'>Easy way to Socialize with <br />Financially verified connections </h1>
        <p className='text-gray-500 font-medium tracking-wide'>Invest your spare funds, create new income lines - Build Business Relationships</p>
        <p className='text-gray-500 font-medium tracking-wide'>Expand your net worth and grow financial influence - Build Personal Relationships</p>
        <p className='text-gray-500 font-medium tracking-wide'>Start your marriage on a strong financial foundation - Build Romantic Relationships</p>
    </div>
</div>
        <Footer/>
        </div>
    )
}