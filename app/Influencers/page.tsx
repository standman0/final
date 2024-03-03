"use client"
import  Header  from '@/app/component/header';
import Footer from '@/app/component/footer'
import Ball from '@/public/ball.svg'
import Image from 'next/image';
import Bulb from '@/app/images/bulb.png'
import Wallet from '@/app/images/wallet.png'
import Grow from '@/app/images/Growth.png'


export default function Influense () {

    return(
        <div className="product bg-white">
        <Header/>
        <div className="mx-auto aria-label max-w-7xl overflow-x-hidden 
         bg-white font-Outfit box-border  ">

           
<div className=" flex mb-10 text-base flex-row w-full border-b-0">
    <div className="">
    <div className='mt-24 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-blue-700 cursor-pointer'>
    Influence
</div>
         <div className=" pt-10 items-center w-8/12 h-fit bg-white">
        <h2 className='text-black text-5xl leading-nomal  font-extrabold mb-3 '>
        Influence for Good Sustainable Finance 
        </h2>
        <p className='text-neutral-400 pt-5 texl-2xl'>Build a positive and life changing brand. Influence for good using myCircle sustainable finance. Create a Circle, Influence financial literacy and engage your tribe to building an accountable savings lifestyle and create a recurring monthly income whilst at it.</p>

    </div>
     <button className='px-14 mt-10 py-4 rounded-md  hover:bg-green-600 hover:text-blue-600 bg-blue-800 '>Get Started</button>
    </div>
   
    <div className="img1 bg-businessblue w-full h-auto">
  <Image
    src={Wallet}
    alt=""
    height={200} 
    width={200} 
    className="object-cover h-full w-full"
    
  />
</div>

</div>
</div>

<div className="w-auto mx-auto aria-label max-w-7xl  h-80 flex flex-row rounded-xl bg-teal-50 ">
<div className="grid justify-items-center text-center w-1/3  h-full">
   
<div className="flex flex-col  text-left pl-16 justify-center">
 <Ball/>
<h1 className='text-xl font-bold mt-5 text-blue-800 '>Connect</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Connect with your fans on a personal level, Learn from them and build your brand positively </p>
</div>
</div>

<div className=" grid justify-items-center text-center w-1/3  h-full ">
<div className="flex flex-col text-left pl-16 justify-center">
<Ball/>
<h1 className='text-xl font-bold mt-5 text-blue-800 '>Earn</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>Just like creating content, create circles at zero cost and earn recurring monthly income</p>
</div>
</div>

<div className=" grid justify-items-center text-center w-1/3  h-full ">
<div className="flex flex-col text-left pl-16 justify-center">
    <Ball/>
<h1 className='text-xl mt-5 font-bold text-blue-800 '>Influence</h1>
<p className='text-neutral-500 leading-7 tracking-wide'>um is simply dummy text of the printing and typesetting indus tryum is simply dummy </p>
</div>
</div>
</div>

<div className="flex flex-row my-32 gap-52 justify-center mx-auto aria-label max-w-7xl w-full h-auto">
    <div className="img  bg-blue-950 ml-14 h-56  rounded-xl">
        <Image
        src={Bulb}
        height={1000}
        width={1000}
        alt=''
        className='object-contain rounded-2xl '
        />
    </div>
    <div className=" flex flex-col justify-center w-full pt-10 gap-3   ">
        <h1 className='text-black text-3xl  font-black'>Use your Platform to <br /> Influence financial <br /> freedom.</h1>
        <p className='text-gray-500 font-medium tracking-wide'>Invest your spare funds, create new income lines</p>
        <p className='text-gray-500 font-medium tracking-wide'>Expand your net worth and grow financial influence </p>
        <p className='text-gray-500 font-medium tracking-wide'>Start your marriage on a strong financial foundation </p>
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