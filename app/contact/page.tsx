"use client"
import Footer from '@/app/component/footer';
import img from '@/app/images/Border.jpg'
import Image from'next/image';

export default function Question () {
    return (
       <>
       <div className="bg-white overflow-hidden">
        <div className="w-full h-screen relative flex flex-col">
            <div className="w-full  h-2/5 ">
            <Image w-full src={img} height={2000} width={2000} alt=''></Image>
            </div>
            <div className="flex h-screen w-full rounded-2xl absolute top-52 ml-9  flex-row gap-8 justify-center">
                  <div className="w-1/4 h-2/5 p-8 shadow-2xl  bg-white">
                    <h2 className= 'font-medium mb-5 text-blue-900 text-lg'>Frequently Asked Question</h2>
                    <p className='text-sm text-blue-900 mb-4'>Get more information and quality answers  to your questions, including Circle groups management, Earning and circle shops</p>
                    <button  className='bg-blue-700 px-3 py-2 text-white rounded-md  '> <a href="http:/faq">See all FAQ</a> </button>
                  </div>
                  <div className="w-1/4 h-2/5 p-7 shadow-xl bg-white">
                  <h2 className= 'font-medium mb-5 text-blue-900 text-lg'>Contact Us</h2>
                    <p className='text-sm text-blue-900 mb-4 mt-4'>Email us at <span className='ml-3 text-sm font-bold'>info@myCircle.finance</span>
                    </p>
                    <p className='text-sm text-blue-900 mb-4 mt-8  '> Whatsapp <span className='ml-3 font-bold text-sm '>+2348038053478</span></p>
                   
                   
                  </div>
                  <div className=" w-1/4 p-7 h-2/5 shadow-xl bg-white">
                  <h2 className= 'font-medium mb-5 text-blue-900 text-lg'>Frequently Asked Question</h2>
                    <p className='text-sm text-blue-900 mb-5'>Our support team is ever ready to provide assistance to whatever the problem you may be facing</p>
                    <button className='bg-blue-700 px-3 py-2 text-white rounded-md '>See all FAQ</button>
                  </div>

                </div>
        </div>
            
        <Footer/>
       </div>
       </>
    )
}