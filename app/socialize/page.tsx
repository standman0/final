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
        <div className=" mx-auto aria-label lg:mb-6 max-w-7xl h-full lg:max-h-[42rem]  overflow-hidden bg-white">         
<div className=" flex md:pl-16 flex-col   mb:mb-10 text-base md:flex-row  w-full border-b-0">
    <div className=" md:w-1/2 w-full ">
    <div className='mt-12 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-blue-800 cursor-pointer'>
    Socialize
</div>
         <div className="pt-5 items-center px-6 lg:w-8/12  flex-grow bg-white"
>
        <h2 className='text-black lg:text-5xl text-3xl leading-nomal font-extrabold mb-3 '>
        Connect & build real relationships
        </h2>
        <p className='text-neutral-400 text-base  md:pt-5 lg:texl-2xl'>myCircle allows you socialize, chat and have fun within circle threads in each circle groups. Private and Public conversations can be initiated. With the myCircle premium business groups, business opportunities can be discussed and executed jointly.</p>
    </div>
     <button className='px-14 ml-6 mb-5 mt-14 py-4 rounded-md  hover:bg-green-600 hover:text-blue-600 bg-blue-800 '>Get Started</button>
    </div>
   
    <div className="img1 bg-socialash h-[28rem] w-full lg:w-1/2 relative lg:h-[40rem] flex justify-center overflow-hidden"
 >   <SocialImport className='w-auto relative bottom-[8rem]'/>
    </div>
</div>
</div>

<div className="lg:max-w-7xl  mx-auto aria-label w-auto  lg:h-80 flex flex-col lg:flex-row rounded-xl bg-teal-50 ">
<div className="grid justify-items-center text-center w-full lg:w-1/3  h-full">
<div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
    <Ball/>
<h1 className='text-xl mt-5 font-bold text-blue-800 '>Connect</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Connect and link up with like minded financially reliable and accountable connects </p>
</div>
</div>

<div className=" grid justify-items-center text-center w-full lg:w-1/3  h-full ">
<div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
<Ball/>
<h1 className='text-xl mt-5 font-bold text-blue-800 '>Network</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Grow your Network, join business Groups, execute joint Business and share your risk </p>
</div>
</div>

<div className=" grid justify-items-center text-center w-full lg:w-1/3  h-full ">
<div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
<Ball/>
<h1 className='text-xl mt-5 font-bold text-blue-800 '>Engage</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Engage on circle threads, learn financial literacy Realtime from financial experts </p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto aria-label mt-6 flex flex-col lg:flex-row lg:my-32 gap-6 justify-center w-full h-auto mb-6">
    <div className="img relative  bg-blue-950  lg:w-1/3 lg:rounded-xl">
    <Zig className="absolute w-auto left-[12.5rem] bottom-[3rem] lg:bottom-10 lg:right-4"/>
    <Image
    src={Heart}
    height={300}
    width={300}
    alt=" "
    />

    </div>
    <div className=" flex flex-col p-6 justify-center   ">
        <h1 className='text-black text-2xl lg:text-3xl mb-10 font-black'>Easy way to Socialize with <br />Financially verified connections </h1>
        <p className='text-gray-500 font-medium tracking-wide'>Invest your spare funds, create new income lines - Build Business Relationships</p>
        <p className='text-gray-500 font-medium tracking-wide'>Expand your net worth and grow financial influence - Build Personal Relationships</p>
        <p className='text-gray-500 font-medium tracking-wide'>Start your marriage on a strong financial foundation - Build Romantic Relationships</p>
    </div>
</div>
        <Footer/>
        </div>
    )
}