"use client";
import Header from '@/app/component/header';
import Footer from '@/app/component/footer';
import Image from 'next/image';
import Img from '@/app/images/ABoutUs.jpeg'
import Arrow from "@/public/arrow.svg"
import World from "@/app/images/globe.png"
import Coins from "@/app/images/coins.png"
import Ricky from "@/app/images/Ricky.png"
import Monica from "@/app/images/Monica.png"
import Larry from "@/app/images/Larry.jpeg"

export default function Product() {
    return (
        <>
            <Header />
            <div  aria-label="Global" className=" overflow-hidden bg-white box-border ">
                    <section className=' bg-about'>
                    <div className="flex flex-col max-w-7xl mx-auto arial-label gap-20 md:flex-row px-4 md:px-16 py-8 md:py-12 lg:py-16 border-b-0">
                    <div className="md:w-5/12 ">
                        <div className="mt-6 px-4 md:px-12 py-3 w-fit bg-green-200 rounded-3xl font-semibold text-green-700 shadow-md cursor-pointer">
                            About Us
                        </div>
                        <div className="pt-10">
                            <h2 className="text-3xl md:text-6xl font-extrabold mb-3">
                                Meet the first set of <span className="text-green-700">Cyclers</span>
                            </h2>
                            <p className="text-neutral-400 text-sm md:text-lg pt-5">
                                Our story began in 2018, when a group of friends, earning too little to save decided to re-invent saving and investing.
                            </p>
                            <p className="text-neutral-400 text-sm md:text-lg pt-5">
                                After a thorough expense review, against all odds, they scoured several ways of saving that wouldn’t require them to dip into their income. This gave rise to myCircle.
                            </p>
                            <p className="text-neutral-400 text-sm md:text-lg pt-5">
                                A set of ambitious professionals went on to redefine the way saving can be done, stress-free by refocusing on expense optimization, group support, discount purchase, community, and trust.
                            </p>
                            <p className="text-neutral-400 text-sm md:text-xl pt-5">
                                myCircle has gone on to be the easiest way to save and build wealth while building a community of trust.
                            </p>
                        </div>
                    </div>
                    <div className=" lg:w-[40rem] sm:w-full mt-20 ">
                            <Image 
                            src={Img} 
                            alt='' 
                            height={1000}
                            width={1000} 
                            objectFit="contain"
                            className='rounded-2xl h-full w-full object-cover'
                            
                            /> 
                    </div>
                </div>
                    </section>

                    <section className=' '>
                    <div className="w-full max-w-7xl mx-auto arial-label mt-14 h-auto md:h-80 flex flex-col md:flex-row gap-4 rounded-xl bg-white p-4 md:p-0">
                    <div className="w-full md:w-8/12">
                    <div className="text-center p-2 w-32 rounded-3xl mb-10 ml-16 bg-green-200 font-semibold text-green-500 shadow-md">
                           Our Vision
                        </div>
                        <div className="flex flex-col justify-center h-full">
                            
                            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-black pl-4 md:pl-16">Building an accountable<br />community of savers</h1>
                            <p className="text-neutral-500 leading-7 text-base pl-4 md:pl-16">Our Goal is to provide software solutions that streamline work processes, enhance productivity, improve life and enable business scalability</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
                        <Arrow/>
                            <h1 className="text-xl md:text-2xl font-bold text-blue-800 my-3">Our Vision</h1>
                            <p className="text-neutral-500 leading-7 text-base">To revolutionize the way people save and invest by fostering a sense of community, accountability and financial empowerment.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
                        <Arrow/>
                            <h1 className="text-xl md:text-2xl font-bold text-blue-800 my-3">Our Mission</h1>
                            <p className="text-neutral-500 leading-7 text-base">To revolutionize the way people save and invest by fostering a sense of community, accountability and financial empowerment.</p>
                        </div>
                    </div>
                </div>
                    </section>

                    <section className='' >
                    <div className="flex max-w-7xl mx-auto flex-col md:items-start item center bg-white px-6 md:px-0">
    <div className="py-4 md:py-8">
        <div className="ml-2 px-6 md:px-10 py-2 bg-green-200 rounded-3xl font-semibold text-green-500">
            Team
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center w-full">
        <div className="flex items-center justify-center h-full bg-aboutgray rounded-2xl">
            <div className="w-48 mb-8  overflow-hidden">
                <Image 
                    src={Ricky} 
                    alt='' 
                    width={200} 
                    height={200} 
                    objectFit="contain"
                    className='rounded-full'
                /> 
                <h1 className='font-bold text-xl mt-5 text-black text-center'>Ricky Osalumese</h1>
                <h1 className='font-bold text-xl mt-2 text-black text-center'>CEO</h1>
            </div>
        </div>
        <div className="flex items-center justify-center h-full bg-aboutblue rounded-2xl">
            <div className="w-48 mb-8  overflow-hidden">
                <Image 
                    src={Monica} 
                    alt='' 
                    width={200} 
                    height={200} 
                    objectFit="contain"
                    className='rounded-full'
                /> 
                <h1 className='font-bold text-xl mt-5 text-black text-center'>Monica Owobiyi</h1>
                <h1 className='font-bold text-xl mt-2 text-black text-center'>Operations</h1>
            </div>
        </div>
        <div className="flex items-center justify-center h-full bg-aboutgreen rounded-2xl">
            <div className=" w-36 rounded-full mb-8 overflow-hidden">
                <Image 
                    src={Larry} 
                    alt='' 
                    width={500} 
                    height={500} 
                    objectFit="contain"
                    className='rounded-full'
                /> 
                <div className="">
                    <h1 className='font-bold text-xl mt-5 text-black text-center'>Larry Osahon</h1>
                <h1 className='font-bold text-xl mt-2 text-black text-center'>Product</h1>
                </div>
                
            </div>
        </div>


                        {/* <div className="p-8 flex flex-col justify-center mb-5 md:px-24  rounded-2xl bg-aboutgray">
                            <div className=" h-44 lg:w-48 mb-8  rounded-full ">
                            <Image 
                            src={Ricky} 
                            alt='' 
                            height={1000}
                            width={1000} 
                            objectFit="contain"
                            className='rounded-full h-full w-full object-cover'
                            
                            /> 
                            </div>
                            <div className="">
                                <h1 className='font-bold text-xl mb-5 text-black text-center' >Ricky Osalumese</h1>
                                <h1 className='font-bold text-xl text-black text-center'>CEO</h1>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col mb-5 justify-center md:px-24 rounded-2xl bg-aboutblue">
                        
                        <div className=" h-44 w-44 mb-8 rounded-full ">
                        <Image 
                            src={Monica} 
                            alt='' 
                            height={1000}
                            width={1000} 
                            objectFit="contain"
                            className='rounded-full h-full object-cover'
                            
                            /> 
                        </div>
                                <h1 className='font-bold text-xl mb-5 text-black text-center' >Monica Owobiyi</h1>
                                <h1 className='font-bold text-xl text-black text-center'>Operations</h1>
                            
                        </div>
                        <div className=" flex flex-col h- justify-center md:px-24 rounded-2xl bg-aboutgreen">
                       
                        <div className=" h-44 w-[12rem] mb-8  rounded-full ">
                        <Image 
                            src={Larry} 
                            alt='' 
                            height={500}
                            width={500} 
                            objectFit="contain"
                            className='rounded-full h-full object-cover'
                            
                            /> 

                                <h1 className='font-bold text-xl mb-5 text-black text-center' >Larry Osahon</h1>
                                <h1 className='font-bold text-xl text-black text-center'>Product</h1>
                            </div>
                        </div> */}
                    </div>
                </div>
                    </section>

                    <section>
                    <div className="flex max-w-7xl mx-auto arial-label  mb-20 flex-col px-7 md:flex-row gap-7 w-full h-auto md:h-screen mt-20">
                    <div className="w-full md:w-2/4 h-full flex flex-col md:ml-9 gap-5">
                        <div className="px-6 py-2 md:w-32 bg-green-200 rounded-3xl font-semibold text-green-500 shadow-md">
                            Our Drive
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Sustainable Finance, <br /> Bridging Wealth Inequality</h1>
                        <p className="text-neutral-500 leading-7 text-base">
                            We unlock new value that fits your needs by combining leading <br /> technologies and the most advanced financial software solutions.
                        </p>
                        <p className="text-neutral-500 leading-7 text-base">
                            Our biggest drive is bridging the inequality in wealth acquisition and <br />distribution across Africa. We achieve this by ensuring all our users <br />are independently avail values of wealth creation and possibility of <br /> earning from each other.
                        </p>
                        <div className=" rounded-xl">
                        <Image 
                            src={World} 
                            alt='' 
                            height={400}
                            width={480} 
                            objectFit="contain"
                            className='rounded-2xl'
                            
                            />                            
                        </div>
                    </div>
                    <div className="img hidden md:block w-full md:w-2/4 rounded-xl">
                    <Image 
                            src={Coins} 
                            alt='' 
                            height={1000}
                            width={560} 
                            objectFit="contain"
                            className='rounded-2xl mt-20 '
                            
                            /> 
                    </div>
                </div>
                    </section>
            </div>
            <Footer />
        </>
    );
}
