"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Image from "next/image";
import Phone from "@/app/images/Chow.png";
import Ball from "@/public/ball.svg";
import Splash from "@/public/splash.svg";
import Bank from "@/app/images/Bank.png";
import Google from "@/public/play-store.svg";
import Apple from "@/public/apple-store.svg";

export default function Spend() {
  return (
    <div className="bg-white">
      <div className="product bg-white">
        <Header />
        <div className=" max-w-7xl mx-auto aria-label overflow-x-hidden h-fit lg:pb-12 bg-white font-Outfit box-border  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="lg:mt-8 px-6">
              <div className="px-12 py-3 mt-10 w-fit bg-homelightpurple rounded-3xl font-semibold text-homeblue ">
                <span className="text-sm px-6">Spend</span>
              </div>
              <div className=" pt-10 items-center w-full h-fit bg-white">
                <h2 className="text-black text-3xl  lg:text-5xl leading-nomal  font-extrabold mb-3 ">
                  Save while spending on merchants
                </h2>
                <p className="text-neutral-400 pt-5 md:xl lg:texl-2xl">
                  Swap&apos;s money transfer feature is engineered for speed and
                  security. Whether you&apos;re sending money to family abroad
                  or settling international business transactions, our platform
                  ensures that your funds are transferred swiftly and securely.
                </p>
              </div>
              <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600 bg-homeblue">
                Get Started
              </button>
            </div>

            <div className="flex mr-[2rem] w-full h-full items-end justify-center relative md:w-full  bg-teal-50">
              <Splash className="md:w-[95%]" />
            </div>
          </div>
        </div>

        <section>
          <div className=" max-w-7xl mx-auto aria-label h-fit md:h-80 flex flex-col md:flex-row rounded-xl bg-teal-50">
            <div className="grid justify-items-center text-center md:w-1/3 w-full h-full">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="lg:text-xl pt-7 text-2xl font-bold text-homeblue ">
                  Expense
                </h1>
                <p className="text-gray-500  lg:leading-7 lg:tracking-wide">
                  Leverage your expense to create savings for you. Eat, shop,
                  drink and flex as you save
                </p>
              </div>
            </div>

            <div className=" grid justify-items-center text-center w-full md:w-1/3  h-full ">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="md:text-xl text-2xl pt-7 font-bold text-homeblue ">
                  Discount
                </h1>
                <p className="text-gray-500 leading-7 tracking-wide">
                  As you spend, you earn as high as 30% in discount that auto
                  saves in your wallet
                </p>
              </div>
            </div>

            <div className=" grid justify-items-center text-center w-full md:w-1/3  h-full ">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="md:text-xl text-2xl pt-7 font-bold text-homeblue ">
                  Interest
                </h1>
                <p className="text-gray-500 leading-7 tracking-wide">
                  Your discount also earns interest and this is available to
                  spend or withdraw every 30 days
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-fit px-6 max-w-7xl mx-auto aria-label md:flex-row lg:my-16 h-[49rem] md:h-[26rem]  flex flex-col lg:flex-row lg:rounded-xl bg-spendblue">
          <div className="">
            <Image
              src={Bank}
              alt=""
              className="object-cover md:h-[26rem]  h-[20rem] lg:w-[52rem] md:w-[60rem] "
            />
          </div>
          <div className="flex flex-col justify-center md:ml-3">
            <h1 className="text-white text-3xl mb:text-5xl font-extrabold mb-8">
              Spend with ease of mind{" "}
            </h1>
            <p className="text-white text-base ">
              With myCircle, you have the ability to swap currencies in the
              blink of an eye. Our cutting-edge technology ensures that your
              transactions are not only swift but also executed at the optimal
              rates, maximizing the value of every exchange.
            </p>
            <div className="flex pt-7 gap-5">
              <Google />
              <Apple />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
