"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Ball from "@/public/ball.svg";
import Image from "next/image";
import Bulb from "@/app/images/bulb.png";
import Wallet from "@/app/images/wallet.png";
import Grow from "@/app/images/Growth.png";

export default function Influence() {
  return (
    <div className="product bg-white">
      <Header />

      <div className="max-w-7xl mx-auto aria-label overflow-hidden md:h-[36rem] lg:h-[42rem] md:mb-10 font-Outfit box-border  ">
        <div className="flex lg:flex-row md:flex-row flex-col text-base overflow-hidden w-full h-full">
          <div className=" p-6 w-full h-full">
            <div className="px-12 py-3 mt-10 w-fit bg-homelightpurple rounded-3xl font-semibold text-homeblue ">
              <span className="text-sm px-6">Influence</span>
            </div>
            <div className=" pt-10 mb-10 items-center w-full h-fit ">
              <h2 className="text-black text-3xl lg:text-5xl leading-nomal  font-extrabold mb-3 ">
                Influence for Good Sustainable Finance
              </h2>
              <p className="text-neutral-400 pt-5 texl-2xl">
                Build a positive and life changing brand. Influence for good
                using myCircle sustainable finance. Create a Circle, Influence
                financial literacy and engage your tribe to building an
                accountable savings lifestyle and create a recurring monthly
                income whilst at it.
              </p>
            </div>
            <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600 bg-homeblue">
              Get Started
            </button>
          </div>

          <div className="flex w-full h-full items-end justify-center relative md:w-full  bg-teal-50 min-h-96">
            <Image
              src={Wallet}
              alt=""
              className="w-[80%]"
            />
          </div>
        </div>
      </div>

      <div className="w-auto mx-auto aria-label max-w-7xl md:flex-row flex-col lg:h-80 flex lg:flex-row rounded-xl bg-teal-50 ">
        <div className="grid justify-items-center text-center lg:w-1/3  h-full">
          <div className="flex flex-col  text-left p-5 lg:pl-16 justify-center">
            <Ball />
            <h1 className="text-xl font-bold mt-5 text-homeblue ">Connect</h1>
            <p className="text-neutral-500 leading-7 md:text-sm tracking-wide">
              Connect with your fans on a personal level, Learn from them and
              build your brand positively{" "}
            </p>
          </div>
        </div>

        <div className=" grid justify-items-center text-center lg:w-1/3  h-full ">
          <div className="flex flex-col text-left p-5 lg:pl-16 justify-center">
            <Ball />
            <h1 className="text-xl font-bold mt-5 text-homeblue ">Earn</h1>
            <p className="text-neutral-500 leading-7 md:text-sm tracking-wide">
              Just like creating content, create circles at zero cost and earn
              recurring monthly income
            </p>
          </div>
        </div>

        <div className=" grid justify-items-center text-center lg:w-1/3 mb-5  h-full ">
          <div className="flex flex-col text-left p-5 lg:pl-16 justify-center">
            <Ball />
            <h1 className="text-xl mt-5 font-bold text-homeblue ">Influence</h1>
            <p className="text-neutral-500 leading-7 md:text-sm tracking-wide">
              um is simply dummy text of the printing and typesetting indus
              tryum is simply dummy{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row mt-6 lg:my-32 gap-52 md:gap-7 mx-auto aria-label max-w-7xl w-full h-auto">
        <div className="img md:rounded-xl md:px-7  h-40  lg:rounded-xl hidden md:block">
          <Image
            src={Bulb}
            alt=""
            className="object-contain md:rounded-2xl lg:rounded-2xl"
          />
        </div>
        <div className=" flex flex-col md:w-full justify-center p-5 w-full lg:pt-0 gap-3   ">
          <h1 className="text-black text-2xl lg:text-3xl font-black">
            Use your Platform to <br /> Influence financial <br /> freedom.
          </h1>
          <p className="text-gray-500 font-medium lg:tracking-wide">
            Invest your spare funds, create new income lines
          </p>
          <p className="text-gray-500 font-medium lg:tracking-wide">
            Expand your net worth and grow financial influence{" "}
          </p>
          <p className="text-gray-500 font-medium lg:tracking-wide">
            Start your marriage on a strong financial foundation{" "}
          </p>
          <div className="w-auto bg-black rounded-3xl">
            <Image
              src={Grow}
              height={100}
              width={1000}
              alt=""
              className="object-cover rounded-2xl h-44 w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
