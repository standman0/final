"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Image from "next/image";
import Splash from "@/public/splash.svg";
import Bank from "@/app/images/Bank.png";
import Google from "@/public/play-store.svg";
import Apple from "@/public/apple-store.svg";
import SecondaryIntroBox from "../component/secondary-intro";

export default function Spend() {
  return (
    <div className="bg-white">
      <div className="product bg-white">
        <Header />
        <div className=" max-w-7xl mx-auto aria-label overflow-x-hidden h-fit md:pb-12 bg-white font-Outfit box-border  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="lg:mt-8 px-6">
              <div className="px-12 py-3 mt-10 w-fit bg-homelightpurple rounded-3xl font-semibold text-homeblue ">
                <span className="text-sm px-6">Spend</span>
              </div>
              <div className=" pt-10 items-center w-full h-fit bg-white">
                <h2 className="text-black text-3xl  lg:text-5xl leading-nomal  font-extrabold mb-3 ">
                  Save while spending on merchants
                </h2>
                <p className="text-gray-500 pt-5 lg:text-[1.15rem] lg:w-[90%]">
                  Create automatic spending opportunities with myCircle today.
                  Partnered with over 52 merchants, myCircle offers you more
                  than 20% in discount sales, auto deposited to your savings
                  wallet
                </p>
              </div>
              <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600 bg-homeblue">
                Get Started
              </button>
            </div>

            <div className="flex mr-[2rem] w-full h-full items-end justify-center relative md:w-full  bg-teal-50">
              <Splash className="w-[37%] md:w-[55%] lg:w-[55%]" />
            </div>
          </div>
        </div>

        <section>
          <div className=" max-w-7xl mx-auto aria-label h-fit md:h-72 flex flex-col md:flex-row rounded-xl bg-teal-50">
            <SecondaryIntroBox
              title="Expense"
              description="Leverage your expense to create savings for you. Eat, shop, drink and flex as you save"
            />
            <SecondaryIntroBox
              title="Discount"
              description="As you spend, you earn as high as 30% in discount that auto saves in your wallet"
            />
            <SecondaryIntroBox
              title="Interest"
              description="Your discount also earns interest and this is available to spend or withdraw every 30 days"
            />
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
            <p className="text-white text-base lg:w-[75%]">
            You not only earn discounts when you spend on myCircle, your discounts are continually in an interest generating mode, creating wealth and additional income for you as you spend.
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
