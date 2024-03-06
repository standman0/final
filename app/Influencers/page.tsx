"use client"
import  Header  from '@/app/component/header';
import Footer from '@/app/component/footer'
import Ball from '@/public/ball.svg'
import Image from 'next/image';
import Bulb from '@/app/images/bulb.png'
import Wallet from '@/app/images/wallet.png'
import Grow from '@/app/images/Growth.png'


export default function Influence () {

    return(
        <div className="product bg-white">
        <Header/>
        <div className="mx-auto aria-label max-w-7xl overflow-x-hidden 
         bg-white font-Outfit box-border">

           
<div className=" flex mb-10 text-base flex-col lg:flex-row w-full border-b-0">
    <div className="p-6">
    <div className='mt-14 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-homeblue cursor-pointer'>
    Influence
</div>
         <div className=" pt-10 items-center w-full lg:w-2/3 h-fit bg-white">
        <h2 className='text-black text-3xl lg:text-5xl leading-nomal  font-extrabold mb-3 '>
        Influence for Good Sustainable Finance 
        </h2>
        <p className='text-neutral-400 pt-5 texl-2xl'>Build a positive and life changing brand. Influence for good using myCircle sustainable finance. Create a Circle, Influence financial literacy and engage your tribe to building an accountable savings lifestyle and create a recurring monthly income whilst at it.</p>

    </div>
     <button className='lg:px-14 px-4 py-2 mt-10 lg:py-4 rounded-md  hover:bg-green-600 hover:text-homeblue bg-blue-800 '>Get Started</button>
    </div>
   
    <div className="img1 bg-businessblue relative w-full h-[20rem] lg:h-[40rem]">
  <Image
    src={Wallet}
    alt="" 
    width={500}
    height={500}
    className="object-contain w-1/2 absolute lg:right-[1rem] right-[6rem] lg:h-full lg:w-full"
    
  />
</div>

</div>
</div>

<div className="w-auto mx-auto aria-label max-w-7xl flex-col lg:h-80 flex lg:flex-row rounded-xl bg-teal-50 ">
<div className="grid justify-items-center text-center lg:w-1/3  h-full">
   
<div className="flex flex-col  text-left p-5 lg:pl-16 justify-center">
 <Ball/>
<h1 className='text-xl font-bold mt-5 text-homeblue '>Connect</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Connect with your fans on a personal level, Learn from them and build your brand positively </p>
</div>
</div>

<div className=" grid justify-items-center text-center lg:w-1/3  h-full ">
<div className="flex flex-col text-left p-5 lg:pl-16 justify-center">
<Ball/>
<h1 className='text-xl font-bold mt-5 text-homeblue '>Earn</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Just like creating content, create circles at zero cost and earn recurring monthly income</p>
</div>
</div>

<div className=" grid justify-items-center text-center lg:w-1/3 mb-5  h-full ">
<div className="flex flex-col text-left p-5 lg:pl-16 justify-center">
    <Ball/>
<h1 className='text-xl mt-5 font-bold text-homeblue '>Influence</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>um is simply dummy text of the printing and typesetting indus tryum is simply dummy </p>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row mt-6 lg:my-32 gap-52 justify-center mx-auto aria-label max-w-7xl w-full h-auto">
    <div className="img  bg-blue-950 lg:ml-14 h-56  lg:rounded-xl">
        <Image
        src={Bulb}
        height={1000}
        width={1000}
        alt=''
        className='object-contain lg:rounded-2xl'
        />
    </div>
    <div className=" flex flex-col  justify-center p-5 w-full lg:pt-10 gap-3   ">
        <h1 className='text-black text-2xl lg:text-3xl font-black'>Use your Platform to <br /> Influence financial <br /> freedom.</h1>
        <p className='text-gray-500 font-medium lg:tracking-wide'>Invest your spare funds, create new income lines</p>
        <p className='text-gray-500 font-medium lg:tracking-wide'>Expand your net worth and grow financial influence </p>
        <p className='text-gray-500 font-medium lg:tracking-wide'>Start your marriage on a strong financial foundation </p>
        <div className="w-auto bg-black rounded-3xl">
  <Image
    src={Grow}
    height={100}
    width={1000}
    alt=""
    className="object-cover rounded-2xl h-44 w-full"
  />
</div>

    </div>
</div>
        <Footer/>
        </div>
    )
}