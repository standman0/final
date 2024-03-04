"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import PhoneSaveIllustration  from "@/public/save-phone-illustration.svg"
import FinalSaveIllustration  from "@/public/save-final-illustration.svg"
import Ball from '@/public/ball.svg'

export default function Save() {
  return (
    <>
      <div className="product">
        <Header />
        <section>
           <div className=" max-w-7xl mx-auto aria-label  overflow-x-hidden mb-8 pb-4 bg-white font-Outfit box-border  ">
          <div className="grid grid-flow-col justify-stretch text-base w-fit border-b-0">
            <div className="">
              <div className="mt-24 mb-3 px-12 py-3 w-fit  bg-gray-200 rounded-3xl font-semibold text-blue-900 shadow-md cursor-pointer">
                <span className="text-sm px-6">Save</span>
              </div>
              <div className=" pt-10 items-center w-8/12 h-fit bg-white">
                <h2 className="text-black text-5xl leading-nomal  font-extrabold mb-3 ">
                  The reliable way to save and grow wealth
                </h2>
                <p className="text-gray-500 pt-5 texl-2xl">
                  myCircle provides a reliable and effortless way to save,
                  invest and build wealth, offering high interest ensuring
                  accountable practical savings that allows you grow wealth
                  seamlessly.
                </p>
              </div>
              <button className="px-14 mt-6 py-4 rounded-md text-white hover:bg-green-600 hover:text-blue-900 bg-blue-900 ">
                Get Started
              </button>
            </div>

            <div className="bg-green-100 w-fit h-[45rem] ">
                <PhoneSaveIllustration/>
            </div>
          </div>
        </div>

        </section>
        <section>
 <div className=" max-w-7xl mx-auto aria-label  h-80 flex flex-row rounded-xl bg-teal-50">
          <div className="grid justify-items-center text-center w-1/3  h-full">
            <div className="flex flex-col text-left pl-16 justify-center">
              <Ball/>
              <h1 className="text-xl pt-7 font-bold text-blue-900 ">
                Maximum Interest
              </h1>
              <p className="text-gray-500 leading-7 tracking-wide">
                Enjoy over 15% in savings interest annually on all circle groups
                and unused funds in wallet
              </p>
            </div>
          </div>

          <div className=" grid justify-items-center text-center w-1/3  h-full ">
            <div className="flex flex-col text-left pl-16 justify-center">
            <Ball/>
              <h1 className="text-xl pt-7 font-bold text-blue-900 ">
                Automated Savings
              </h1>
              <p className="text-gray-500 leading-7 tracking-wide">
                Automate your savings by using the auto deposit feature that
                lets you save anytime
              </p>
            </div>
          </div>

          <div className=" grid justify-items-center text-center w-1/3  h-full ">
            <div className="flex flex-col text-left pl-16 justify-center">
            <Ball/>
              <h1 className="text-xl pt-7 font-bold text-blue-900 ">Flexible</h1>
              <p className="ext-gray-500 leading-7 tracking-wide">
                Set flexible Access to your savings or Interest whenever you
                want across multiple groups{" "}
              </p>
            </div>
          </div>
        </div>
        </section>
        <section>
 <div className="mx-auto max-w-7xl   w-full grid  justify-items-center text-center ">
          <div className="flex w-2/5 flex-col gap-4 ">
            <div className="text-black text-5xl mb-0 pt-24 font-extrabold">
              Start growing wealth
            </div>
            <div className="text-black text-5xl font-extrabold">
              Create or join Circle
            </div>
            <p className="text-gray-500 mt-2">
              Lets help with that financial goal and target, myCircle makes you
              accountable and committed to your savings goals
            </p>
            <div className="flex justify-center mt-6  gap-6">
              <button className="px-10 py-3 rounded-md bg-blue-900 text-white">
                Create a Circle
              </button>
              <button className="rounded-md px-10 py-3  bg-blue-900 text-white  ">
                Join a circle
              </button>
            </div>
          </div>
        </div>

        </section>
        <section>
        <div className="mx-auto max-w-7xl bg-white">
            <FinalSaveIllustration/>
        </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
