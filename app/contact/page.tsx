"use client"
import Footer from '@/app/component/footer';
import Facebook from '@/public/facebook.svg'
import Twitter from '@/public/twitter.svg'
import Instagram from '@/public/instagram.svg'




export default function Question () {
    return (
       <>
     
         <div className="bg-white overflow-hidden ">
        <div className="w-full h-fit relative flex flex-col">
          <section className=' bg-helpblue'>
            
                       <div className="w-full flex lg:flex-row bg-[wave-pattern]  flex-col lg:max-w-7xl mx-auto aria-label  h-72  ">
            <div className="w-full lg:w-1/2 pt-16 lg:p-36">

            <h2 className='font-medium lg:text-base text-end lg:font-bold text-xl ml-7   text-white'>Hello! how can we help you?</h2>
            </div>
            <div className=" lg:w-1/2 lg:pr-20 p-6 bg-[Swave-pattern] pt-16">
              <h2  className='font-bold text-base lg:text-xl lg:text-end hover:cursor-pointer  text-white'><a href="/">Hello! how can we help you?</a> </h2>
            </div>
            </div>
          </section>

            <section className='max-w-7xl mx-auto aria-label'>
               <div className="flex  h-fit w-full rounded-2xl mb-10 top-52 ml-9 flex-col lg:flex-row gap-8 justify-center">
                  <div className="lg:w-1/4 w-[20rem] h-2/5  p-8 relative right-4 lg:left-1 bottom-20 shadow-2xl  bg-white">
                    <h2 className= 'font-medium mb-5  text-blue-900 text-lg'>Frequently Asked Question</h2>
                    <p className='text-sm text-blue-900 mb-4'>Get more information and quality answers  to your questions, including Circle groups management, Earning and circle shops</p>
                    <button  className='bg-blue-700 px-3 py-2 text-white rounded-md  '> <a href="http:/faq">See all FAQ</a> </button>
                  </div>
                  <div className="lg:w-1/4 w-[20rem] h-2/5 p-8 relative  right-4 lg:left-1 bottom-20 shadow-2xl bg-white">
                  <h2 className= 'font-medium mb-5 text-blue-900 text-lg'>Contact Us</h2>
                    <p className='text-sm text-blue-900 mb-4 mt-4'>Email us at <span className='ml-3 text-sm font-bold'>info@myCircle.finance</span>
                    </p>
                    <p className='text-sm text-blue-900 mb-4 mt-8  '> Whatsapp <span className='ml-3 font-bold text-sm '>+2348038053478</span></p>
                   <div className="flex flex-row justify-center">
                    <div className="flex">
                      
                   <a href=""> <Facebook /><h2 className='text-sm hover:cursor-pointer font-semibold mx-1 text-blue-700'>myCircle_H2</h2></a> </div>

                 <div className="flex">
                    <a href=""> <Twitter/>  <h2 className='text-sm hover:cursor-pointer  font-semibold text-blue-700 mx-1'>myCircle_H2</h2></a> 
                  </div>
                 <div className="flex"> <a href=""> <Instagram/>
                    <h2 className='text-sm hover:cursor-pointer  font-semibold text-blue-700 ml-1'>myCircle_H2</h2></a>
                    </div>
                   
                   
                   
                    </div>                 
                  </div>
                  <div className=" lg:w-1/4 w-[20rem] h-2/5 p-8 relative  right-4 lg:left-1 bottom-20 shadow-2xl bg-white">
                  <h2 className= 'font-medium mb-5 text-blue-900 text-lg'>Frequently Asked Question</h2>
                    <p className='text-sm text-blue-900 mb-5'>Our support team is ever ready to provide assistance to whatever the problem you may be facing</p>
                    <a href="/faq"><button className='bg-blue-700 px-3 py-2 text-white rounded-md '>See all FAQ</button></a>
                    
                  </div>

                </div>
            </section>
           
        </div>
            
        
       </div>
       <Footer/>
       </>
    )
}