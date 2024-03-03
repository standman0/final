"use client"
import  Header  from '@/app/component/header';
import Footer from '@/app/component/footer';
import Form from '@/app/component/form'

export default function Business () {

    return(
        <>
        
        <div className="business bg-white">
            <Header />
            <div className="max-w-7xl mx-auto aria-label  overflow-x-hidden h-[40rem] mb-20 bg-white font-Outfit box-border  ">


                <div className=" flex px-16 text-base flex-row w-full border-b-0">
                    <div className="">
                        <div className='mt-24 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-white shadow-md cursor-pointer'>
                            Business
                        </div>
                        <div className=" pt-10 items-center w-8/12 h-fit bg-white">
                            <h2 className='text-black text-5xl leading-nomal  font-extrabold mb-3 '>
                            Sell to Financially verified customers
                            </h2>
                            <p className='text-neutral-400 pt-5 texl-2xl'>Collect payment with myCircle integratable payment api and enjoy 10x business sales. myCircle offers financially verified, willing to pay customers. Build functional leads and sales pipeline with bankable customers.</p>

                        </div>
                        <button className='px-14 mt-14 py-4 rounded-md  hover:bg-green-600 hover:text-blue-600 bg-blue-800 '>Get Started</button>
                    </div>

                    <div className="img1 bg-black w-2/4 h-fit ">
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto aria-label   h-80 flex flex-row rounded-xl bg-teal-50  ">
                <div className="grid justify-items-center text-center w-1/3  h-full">
                    <div className="flex flex-col text-left pl-16 justify-center">
                        <h1 className='text-xl font-bold text-blue-500 '>Customers</h1>
                        <p className='text-neutral-500 leading-7 tracking-wide'>Meet myCircle’s star rated financially qualified customers with willingness to pay</p>
                    </div>
                </div>

                <div className=" grid justify-items-center text-center w-1/3  h-full ">
                    <div className="flex flex-col text-left pl-16 justify-center">
                        <h1 className='text-xl font-bold text-blue-500 '>Sales</h1>
                        <p className='text-neutral-500 leading-7 tracking-wide'>10X your sales demand using Circle Payment wallet to accept payment on your website</p>
                    </div>
                </div>

                <div className=" grid justify-items-center text-center w-1/3  h-full ">
                    <div className="flex flex-col text-left pl-16 justify-center">
                        <h1 className='text-xl font-bold text-blue-500 '>Turnover</h1>
                        <p className='text-neutral-500 leading-7 tracking-wide'>Breakeven fast and  Maximise profitability with recurring sales from Circle users  </p>
                    </div>
                </div>
            </div>


            <div className="h-fit w-full grid  justify-items-center text-center ">

                <div className="max-w-7xl mx-auto aria-label flex w-2/4 flex-col gap-4 ">
                    <div className='text-black text-5xl pt-32 font-black w-full'>Increase sales and demand for your business</div>
                    <p className='text-gray-400 mt-2 text-base p'>Increase sales and turnover by connecting and selling  to <br />willing to  pay, financially verified customers on myCircle. </p>
                     <Form/>
                    </div>
                </div>
                <div className="w-full h-screen mt-10 bg-black">

                </div>
            </div>
            

        
        <Footer />
        </>
    )
}