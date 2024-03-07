"use client"
import  Header  from '@/app/component/header';
import Footer from '@/app/component/footer';
import Form from '@/app/component/form'
import Image from 'next/image';
import BusinessData from '@/public/busness.svg'
import Chow from '@/app/images/Chop.png'
import Market from '@/app/images/Market.png'
import Ball from '@/public/ball.svg'


export default function Business () {

    return(
        <>
        
        <div className="business overflow-hidden bg-white">
            <Header />
            <div className="max-w-7xl mx-auto aria-label overflow-hidden lg:h-[42rem] mb-10 font-Outfit box-border  ">


                <div className="flex lg:flex-row flex-col text-base overflow-hidden w-full h-full">
                    <div className="lg:w-1/2 p-6 w-full h-full">
                        <div className='mt-12 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-homeblue shadow-md cursor-pointer'>
                            Business
                        </div>
                        <div className=" pt-10 items-center w-full lg:w-8/12 h-fit ">
                            <h2 className='text-black text-3xl lg:text-5xl leading-nomal  font-extrabold mb-3 '>
                            Sell to Financially verified customers
                            </h2>
                            <p className='text-neutral-400 pt-5 texl-2xl'>Collect payment with myCircle integratable payment api and enjoy 10x business sales. myCircle offers financially verified, willing to pay customers. Build functional leads and sales pipeline with bankable customers.</p>

                        </div>
                        <button className='lg:px-14 mt-6 lg:py-4 px-2 py-2 rounded-md  hover:bg-green-600 text-sm hover:text-homeblue bg-blue-800 '>Get Started</button>
                    </div>

                    <div className="img1 relative bg-businessblue w-full h-[23rem] lg:w-1/2 lg:h-full ">
                        <Image
                        src={Chow}
                        alt=''
                        height={1000}
                        width={330}
                        className='z-10 w-1/2  right-[2rem] top-[7.5rem]  absolute lg:right-[2rem] lg:top-[15rem]'
                        />
                        <Image
                        src={Market}
                        alt=''
                        height={570}
                        width={300}
                        className='z-0 w-1/2 absolute  top-[2rem] right-[8rem] lg:left-24 lg:top-[5.5rem]'
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto aria-label   lg:h-80 flex-col flex lg:flex-row rounded-xl bg-teal-50  ">
                <div className="flex lg:flex-row flex-col justify-items-center text-center w-full lg:w-1/3  h-full">
                    <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
                    <Ball/>
                        <h1 className='text-xl mt-5 font-bold text-blue-500 '>Customers</h1>
                        <p className='text-neutral-500 leading-7 tracking-wide'>Meet myCircle’s star rated financially qualified customers with willingness to pay</p>
                    </div>
                </div>

                <div className=" grid justify-items-center text-center w-full lg:w-1/3  h-full ">
                    <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
                    <Ball/>
                        <h1 className='text-xl mt-5 font-bold text-blue-500 '>Sales</h1>
                        <p className='text-neutral-500 leading-7 tracking-wide'>10X your sales demand using Circle Payment wallet to accept payment on your website</p>
                    </div>
                </div>

                <div className=" grid justify-items-center text-center  w-full lg:w-1/3  h-full ">
                    <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
                        <Ball/>
                        <h1 className='text-xl mt-5 font-bold text-blue-500 '>Turnover</h1>
                        <p className='text-neutral-500 leading-7 tracking-wide'>Breakeven fast and  Maximise profitability with recurring sales from Circle users  </p>
                    </div>
                </div>
            </div>


            <div className="h-fit w-full grid mb-8  lg:justify-items-center text-center ">

                <div className="max-w-7xl mx-auto aria-label flex lg:w-2/4 flex-col gap-4 ">
                    <div className='text-black text-3xl lg:text-5xl pt-6 lg:pt-32 font-black w-full'>Increase sales and demand for your business</div>
                    <p className='text-gray-400 mt-2 text-base'>Increase sales and turnover by connecting and selling  to <br />willing to  pay, financially verified customers on myCircle. </p>
                     <Form/>
                    </div>
                </div>
                <div className=" max-w-7xl mx-auto aria-label w-full lg:w-full mt-10 ">
                    <BusinessData className='' />
                </div>
            </div>
            

        
        <Footer />
        </>
    )
}