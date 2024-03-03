"use client"
import  Header  from '@/app/component/header';
import Footer from '@/app/component/footer'
import Red from '@/app/images/RedDev.png'
import Pig from '@/app/images/piggy.png'
import Ball from '@/public/ball.svg'
import Image from 'next/image';
import Close from '@/public/close.svg'
import Break from '@/public/break.svg'
import Google from '@/public/play-store.svg'
import Apple from '@/public/apple-store.svg'

export default function Product () {

    return(
        <>
        <Header />
        <div className="product    max-w-7xl mx-auto aria-label bg-white">
            
            <div className=" overflow-x-hidden ">

           
                <div className=" flex overflow-x-hidden max-h-[42rem] text-base flex-row overflow-hidden ">
                    <div className="">
                    <div className='mt-24 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-blue-700 cursor-pointer'>
                    Earn
                </div>
                         <div className=" pt-5 items-center w-8/12 h-fit bg-white">
                        <h2 className='text-black text-5xl leading-nomal  font-extrabold mb-3 '>
                            Seamless Earning from your Circles
                        </h2>
                        <p className='text-neutral-400 pt-5 texl-2xl'>For every circle group created, you earn a percentage of the interest generated on savings accrued by your groups. You unlock a new income level for every user milestones reached.  more circles with o created the more you earn</p>

                    </div>
                     <button className='px-14 mt-14 py-4 rounded-md  hover:bg-green-600 hover:text-blue-600 bg-blue-800 '>Get Started</button>
                    </div>
                   
                    <div className="img1 bg-socialash w-full relative h-[40rem] flex justify-center overflow-hidden"
 >
        <Close className='object-contain z-10 absolute right-12 bottom-14'/>
        <Break className='object-contain  z-10 absolute left-16 top-64'/>

        <Image
        src={Red}
        height={350}
        width={350}
        alt=''
        className='object-contain z-0 absolute top-32 '
        />
    </div>
                </div>
            </div>

        <div className="w-auto  h-80 flex flex-row rounded-xl bg-teal-50  ">

        <div className="grid justify-items-center text-center w-1/3  h-full">
  <div className="flex flex-col text-left pl-16 justify-center">
    <Ball/>
    <h1 className='text-xl mt-5 font-bold text-blue-800 '>Create</h1>
    <p className='text-neutral-500 leading-7 text-sm tracking-wide'>The more circles created, the more your potential income opportunities</p>
  </div>
</div>

        <div className=" grid justify-items-center text-center w-1/3  h-full ">
            <div className="flex flex-col text-left pl-16 justify-center">
                <Ball/>
                <h1 className='text-xl mt-5 font-bold text-blue-800 '>Save</h1>
                <p className='text-neutral-500 leading-7 text-sm tracking-wide'>Earnings generated are subjected to actual prevailing residual interest rate. You earning</p>
            </div>
        </div>

        <div className=" grid justify-items-center text-center w-1/3  h-full ">
            <div className="flex flex-col text-left pl-16 justify-center">
                <Ball/>
                <h1 className='text-xl mt-5 font-bold text-blue-800 '>Cashout</h1>
                <p className='text-neutral-500 text-sm leading-7 tracking-wide'>Pay out your earnings at the end of each months, regardless, it keeps generating income</p>
            </div>
        </div>
         </div>
         

         <div className="max-h-[42rem] mb-12 w-full grid  justify-items-center text-center ">
           
            <div className="flex w-2/5 flex-col gap-4 ">
                <div className='text-black text-5xl mb-0 pt-32 font-extrabold' >Save <span className='text-blue-700'>Money</span>  </div>
            <div className='text-black text-5xl font-extrabold'>Earn <span className='text-earngreena'>
               Money </span> </div>
            <p className='text-neutral-200 mt-2'>As the admin and group creator, earn a percentage of the interest accrued by your circlers, get paid every month</p>
                        <div className="flex justify-center mt-6  gap-6">
            <button  className='px-10 py-3 rounded-md text-white bg-blue-800'>Create a Circle</button>
            <button  className='rounded-md px-10 py-3 text-white  bg-blue-800  '>Join a circle</button>
            </div>
            </div>         
         </div>

         <div className=" max-w-7xl mx-auto aria-label  
           h-[32rem] w-full flex flex-row rounded-xl bg-spendblue">
            <div className="img w-1/2 h-full">
            <Image
                        width={600}
                        height={600}
                        src={Pig}
                        alt=''
                        className='object-cover'
                        />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className='text-white text-5xl font-extrabold mb-8'>Spend with ease of mind </h1>
                <p className='text-brandblack text-base '>With myCircle, you have the ability to swap currencies in the blink <br /> of an eye. Our cutting-edge technology ensures that your <br /> transactions are not only swift but also executed at the optimal <br /> rates, maximizing the value of every exchange.
</p>
       <div className="flex pt-7 gap-5">
       <Google/>
        <Apple/>
       </div>
       </div>
       </div>
            
        </div>
        <Footer />
        
        </>
        
    )
}