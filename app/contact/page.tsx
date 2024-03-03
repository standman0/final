"use client"
import Footer from '@/app/component/footer';


export default function Question () {
    return (
       <>
       <div className="bg-white overflow-hidden max-w-7xl mx-auto aria-label">
        <div className="w-full h-fit relative flex flex-col">
            <div className="w-full flex  h-72  bg-helpblue ">
            <div className=" w-1/2 p-36">
            <h2 className='font-bold text-xl ml-7   text-white'>Hello! how can we help you?</h2>
            </div>
            <div className=" w-1/2 pr-20 pt-10">
              <h2  className='font-bold text-xl text-end hover:cursor-pointer  text-white'><a href="/">Hello! how can we help you?</a> </h2>
            </div>
            </div>
            <div className="flex h-fit w-full rounded-2xl mb-10 top-52 ml-9  flex-row gap-8 justify-center">
                  <div className="w-1/4 h-2/5 p-8 relative left-1 bottom-20 shadow-2xl  bg-white">
                    <h2 className= 'font-medium mb-5  text-blue-900 text-lg'>Frequently Asked Question</h2>
                    <p className='text-sm text-blue-900 mb-4'>Get more information and quality answers  to your questions, including Circle groups management, Earning and circle shops</p>
                    <button  className='bg-blue-700 px-3 py-2 text-white rounded-md  '> <a href="http:/faq">See all FAQ</a> </button>
                  </div>
                  <div className="w-1/4 h-2/5 p-8 relative left-1 bottom-20 shadow-2xl bg-white">
                  <h2 className= 'font-medium mb-5 text-blue-900 text-lg'>Contact Us</h2>
                    <p className='text-sm text-blue-900 mb-4 mt-4'>Email us at <span className='ml-3 text-sm font-bold'>info@myCircle.finance</span>
                    </p>
                    <p className='text-sm text-blue-900 mb-4 mt-8  '> Whatsapp <span className='ml-3 font-bold text-sm '>+2348038053478</span></p>
                   
                   
                  </div>
                  <div className=" w-1/4 h-2/5 p-8 relative left-1 bottom-20 shadow-2xl bg-white">
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