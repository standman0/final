"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import BusinessForm from "@/app/component/business-form";
import Image from "next/image";
import BusinessData from "@/public/busness.svg";
import Chow from "@/app/images/Chop.png";
import Market from "@/app/images/Market.png";
import Ball from "@/public/ball.svg";

export default function Business() {
  return (
    <>
      <div className="business overflow-hidden bg-white">
        <Header />
        <div className="max-w-7xl mx-auto aria-label overflow-hidden md:h-[32rem] lg:h-[42rem] md:mb-10 font-Outfit box-border  ">
          <div className="flex lg:flex-row md:flex-row flex-col text-base overflow-hidden w-full h-full">
            <div className=" p-6 w-full h-full">
              <div className="px-12 py-3 mt-10 w-fit bg-homelightpurple rounded-3xl font-semibold text-homeblue ">
                <span className="text-sm px-6">Business</span>
              </div>
              <div className=" pt-10 mb-10 items-center w-full h-fit ">
                <h2 className="text-black text-3xl lg:text-5xl leading-nomal  font-extrabold mb-3 ">
                  Sell to Financially verified customers
                </h2>
                <p className="text-neutral-400 pt-5 texl-2xl">
                  Collect payment with myCircle integratable payment api and
                  enjoy 10x business sales. myCircle offers financially
                  verified, willing to pay customers. Build functional leads and
                  sales pipeline with bankable customers.
                </p>
              </div>
              <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600 bg-homeblue">
                Get Started
              </button>
            </div>

            <div className="flex w-full h-full items-end justify-center relative md:w-full  bg-teal-50 min-h-96">
              <Image
                src={Chow}
                alt=""
                className="z-10 w-1/2 md:w-1/2 right-[2rem] top-[7.5rem] md:top-[16rem] absolute lg:right-[2rem] lg:top-[15rem]"
              />
              <Image
                src={Market}
                alt=""
                className="z-0 w-1/2 absolute  top-[2rem] right-[8rem] md:top-[11rem] lg:left-24 lg:top-[5.5rem]"
              />
            </div>
          </div>
        </div>

        <section>
          <div className=" max-w-7xl mx-auto aria-label h-fit md:h-80 flex flex-col md:flex-row rounded-xl bg-teal-50">
            <div className="grid justify-items-center text-center md:w-1/3 w-full h-full">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="lg:text-xl pt-7 text-2xl font-bold text-homeblue ">
                  Customers
                </h1>
                <p className="text-gray-500  lg:leading-7 lg:tracking-wide">
                  Meet myCircle’s star rated financially qualified customers
                  with willingness to pay
                </p>
              </div>
            </div>

            <div className=" grid justify-items-center text-center w-full md:w-1/3  h-full ">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="md:text-xl text-2xl pt-7 font-bold text-homeblue ">
                  Sales
                </h1>
                <p className="text-gray-500 leading-7 tracking-wide">
                  10X your sales demand using Circle Payment wallet to accept
                  payment on your website
                </p>
              </div>
            </div>

            <div className=" grid justify-items-center text-center w-full md:w-1/3  h-full ">
              <div className="flex flex-col text-left p-7 md:w-full md:pl-16 justify-center">
                <Ball />
                <h1 className="md:text-xl text-2xl pt-7 font-bold text-homeblue ">
                  Turnover
                </h1>
                <p className="ext-gray-500 leading-7 tracking-wide">
                  Breakeven fast and Maximise profitability with recurring sales
                  from Circle users{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-fit w-full grid mb-8  lg:justify-items-center text-center ">
          <div className="max-w-7xl mx-auto aria-label flex lg:w-2/4 flex-col gap-4 p-6">
            <div className="text-black text-3xl lg:text-5xl pt-6 lg:pt-32 font-black w-full">
              Increase sales and demand for your business
            </div>
            <p className="text-gray-400 mt-2 text-base">
              Increase sales and turnover by connecting and selling to willing
              to pay, financially verified customers on myCircle.{" "}
            </p>
            <BusinessForm />
          </div>
        </div>
        <div className=" max-w-7xl mx-auto aria-label w-full lg:w-full mt-10 ">
          <BusinessData className="" />
        </div>
      </div>

      <Footer />
    </>
  );
}
