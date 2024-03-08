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

           
                <div className=" flex overflow-x-hidden md:flex-row lg:max-h-[42rem] text-base flex-col lg:flex-row overflow-hidden ">
                    <div className="p-5">
                    <div className='lg:mt-12 mt-10 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-homeblue'>
                    Earn
                </div>
                         <div className=" pt-5 items-center md:w-8/12 lg:w-8/12 h-fit bg-white">
                        <h2 className='text-black text-4xl lg:text-5xl leading-nomal  font-extrabold mb-3 '>
                            Seamless Earning from your Circles
                        </h2>
                        <p className='text-neutral-400 pt-5 texl-2xl'>For every circle group created, you earn a percentage of the interest generated on savings accrued by your groups. You unlock a new income level for every user milestones reached.  more circles with o created the more you earn</p>

                    </div>
                     <button className='lg:px-14 mt-14 lg:py-4 px-4 py-3 rounded-md  hover:bg-green-600 hover:text-homeblue bg-blue-800 '>Get Started</button>
                    </div>
                   
                    <div className="img1 bg-socialash pt-10 h-[30rem] w-full relative lg:h-[40rem] flex justify-center overflow-hidden"
 >
        <Close className='object-contain  left-[16rem] top-[14rem] md:left-36 md:w-1/2 lg:left-[20rem]  z-10 absolute lg:right-12 lg:top-[25rem]'/>
        <Break className='object-contain z-10 absolute right-[15rem] md:left-[-1rem] md:w-1/2 top-[9rem] lg:left-2 lg:top-[16rem]'/>

        <Image
        src={Red}
        height={350}
        width={350}
        alt=''
        className='object-contain w-1/2 z-0 md:w-9/12  absolute lg:h-full lg:bottom-[-6rem] '
        />
    </div>
                </div>
            </div>

        <div className="w-auto my-6 md:flex-row lg:h-80 flex flex-col lg:flex-row rounded-xl bg-teal-50  ">

        <div className="grid justify-items-center w-full text-center lg:w-1/3  h-full">
  <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
    <Ball/>
    <h1 className='text-xl mt-5 font-bold text-homeblue '>Create</h1>
    <p className='text-neutral-500 leading-7 md:text-sm text-sm tracking-wide'>The more circles created, the more your potential income opportunities</p>
  </div>
</div>

        <div className=" grid justify-items-center text-center lg:w-1/3  h-full ">
            <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
                <Ball/>
                <h1 className='text-xl mt-5 font-bold text-homeblue '>Save</h1>
                <p className='text-neutral-500 leading-7 md:text-sm text-sm tracking-wide'>Earnings generated are subjected to actual prevailing residual interest rate. You earning</p>
            </div>
        </div>

        <div className=" grid justify-items-center text-center w-full lg:w-1/3  h-full ">
            <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
                <Ball/>
                <h1 className='text-xl mt-5 font-bold text-homeblue '>Cashout</h1>
                <p className='text-neutral-500 text-sm leading-7 md:text-sm tracking-wide'>Pay out your earnings at the end of each months, regardless, it keeps generating income</p>
            </div>
        </div>
         </div>
         

         <div className="max-h-[42rem] mb-12 w-full grid  justify-items-center text-center ">
           
            <div className="flex lg:w-2/5 px-4 flex-col gap-4 ">
                <div className='text-black text-5xl mb-0 pt-32 font-extrabold' >Save <span className='text-homeblue'>Money</span>  </div>
            <div className='text-black text-5xl font-extrabold'>Earn <span className='text-earngreena'>
               Money </span> </div>
            <p className='text-neutral-200 mt-2'>As the admin and group creator, earn a percentage of the interest accrued by your circlers, get paid every month</p>
                        <div className="flex justify-center mt-6  gap-6">
            <button  className='px-10 py-3 rounded-md text-white bg-blue-800'>Create a Circle</button>
            <button  className='rounded-md px-10 py-3 text-white  bg-blue-800  '>Join a circle</button>
            </div>
            </div>         
         </div>

         <div className="py-12 max-w-7xl mx-auto aria-label  
           lg:h-[32rem]  w-full flex flex-col md:flex-row lg:flex-row md:gap-16 lg:rounded-xl bg-spendblue">
            <div className="img md:w-1/2  lg:w-1/2 h-full">
            <Image
                        width={600}
                        height={600}
                        src={Pig}
                        alt=''
                        className='object-cover md:w-full relative left-[5rem] w-2/3'
                        />
            </div>
            <div className="flex flex-col p-4 md:w-1/2 justify-center">
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