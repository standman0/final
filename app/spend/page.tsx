"use client"
import  Header  from '@/app/component/header';
import Footer from '@/app/component/footer'
import Image from 'next/image';
import Phone from '@/app/images/Chow.png'
import Ball from '@/public/ball.svg'
import Splash from '@/public/splash.svg'
import Bank from '@/app/images/Bank.png'
import Google from '@/public/play-store.svg'
import Apple from '@/public/apple-store.svg'


export default function Spend () {

    return(
        <div className="bg-white">
         <div className="product bg-white">
            <Header />
            <div className=" max-w-7xl mx-auto aria-label overflow-x-hidden h-fit pb-12 bg-white font-Outfit box-border  ">

           
                <div className=" flex pl-16  overflow-y-hidden text-base flex-row w-full border-b-0">
                    <div className="">
                    <div className='mt-24 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-blue-700  cursor-pointer'>
                    Spend
                </div>
                         <div className=" pt-10 items-center w-8/12 h-fit bg-white">
                        <h2 className='text-black text-5xl leading-nomal  font-extrabold mb-3 '>
                        Save while spending on merchants
                        </h2>
                        <p className='text-neutral-400 pt-5 texl-2xl'>Swap&apos;s money transfer feature is engineered for speed and security. Whether you&apos;re sending money to family abroad or settling international business transactions, our platform ensures that your funds are transferred swiftly and securely.</p>

                    </div>
                     <button className='px-14 mt-14 py-4 rounded-md  hover:bg-green-600 hover:text-blue-600 bg-blue-800 '>Get Started</button>
                    </div>
                   
                    <div className="img1 bg-spendgreen relative w-full h-auto ">
                        <Splash
                        className='absolute right-1'
                        />
                        <Image
                        width={300}
                        height={300}
                        src={Phone}
                        alt=''
                        className='object-cover top-12 absolute left-24 '
                        />
                    </div>
                </div>
            </div>

        <div className="max-w-7xl mx-auto aria-label   h-80 flex flex-row rounded-xl bg-spendlblue ">
        <div className="grid justify-items-center text-center w-1/3  h-full">
  <div className="flex flex-col text-left pl-16 justify-center">
    <Ball/>
    <h1 className='text-xl font-bold pt-7 text-blue-800 '>Expense</h1>
    <p className='text-neutral-500 leading-7 tracking-wide'>Leverage your expense to create savings for you. Eat, shop, drink and flex as you save</p>
  </div>
</div>

        <div className="  grid justify-items-center text-center w-1/3  h-full ">
            <div className="flex flex-col text-left pl-16 justify-center">
            <Ball/>
                <h1 className='text-xl font-bold pt-7 text-blue-800 '>Discount</h1>
                <p className='text-neutral-500 leading-7 tracking-wide'>As you spend, you earn as high as 30% in discount that auto saves in your wallet</p>
            </div>
        </div>

        <div className=" grid justify-items-center text-center w-1/3  h-full ">
            <div className="flex flex-col text-left pl-16 justify-center">
            <Ball/>
                <h1 className='text-xl font-bold pt-7 text-blue-800 '>Intrest</h1>
                <p className='text-neutral-500 leading-7 tracking-wide'>Your discount also earns interest and this is available to spend or withdraw every 30 days</p>
            </div>
        </div>
         </div>
         <div className="w-fit max-w-7xl mx-auto aria-label  my-16  h-[32rem] flex flex-row rounded-xl bg-spendblue">
            <div className="img w-1/2 h-full">
            <Image
                        width={1000}
                        height={1000}
                        src={Bank}
                        alt=''
                        className='object-cover w- h-[32rem] '
                        />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className='text-white text-5xl font-extrabold mb-8'>Spend with ease of mind </h1>
                <p className='text-white text-base '>With myCircle, you have the ability to swap currencies in the blink <br /> of an eye. Our cutting-edge technology ensures that your <br /> transactions are not only swift but also executed at the optimal <br /> rates, maximizing the value of every exchange.
</p>
       <div className="flex pt-7 gap-5">
       <Google/>
        <Apple/>
       </div>
            </div>
         </div>
            
        </div>
        <Footer/>
        </div>
    )
}