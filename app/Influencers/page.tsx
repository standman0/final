"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import CheckRing from "@/public/check-ring.svg";
import Image from "next/image";
import Bulb from "@/app/images/bulb.png";
import Wallet from "@/app/images/wallet.png";
import Grow from "@/app/images/Growth.png";
import SecondaryIntroBox from "../component/secondary-intro";

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
              <p className="text-gray-500 pt-5 lg:text-[1.1rem] lg:w-[85%]">
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
            <Image src={Wallet} alt="" className="w-[55%] md:w-[75%]" />
          </div>
        </div>
      </div>

      <div className="w-auto mx-auto aria-label max-w-7xl md:flex-row flex-col lg:h-72 flex lg:flex-row rounded-xl bg-teal-50 ">
        <SecondaryIntroBox
          title="Connect"
          description="Connect with your fans on a personal level, Learn from them and build your brand positively"
        />
        <SecondaryIntroBox
          title="Earn"
          description="Easily Earn stress-free Monthly recurring income for your Circle of fans "
        />
        <SecondaryIntroBox
          title="Influence"
          description="Use your influence for good, promote financial literacy and support zero poverty."
        />
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row mt-6 lg:my-32 gap-52 md:gap-7 mx-auto aria-label max-w-7xl w-full h-auto">
        <div className="img md:rounded-xl md:px-7  h-40  lg:rounded-xl hidden md:block">
          <Image
            src={Bulb}
            alt=""
            className="object-contain md:rounded-2xl lg:rounded-2xl"
          />
        </div>
        <div className=" flex flex-col md:w-full justify-center p-5 w-full lg:pt-0 gap-3 py-12">
          <h1 className="text-black text-2xl lg:text-3xl font-black">
            Use your Platform to <br /> Influence financial <br /> freedom.
          </h1>
          <div className="flex text-gray-500 font-medium lg:tracking-wide">
            <CheckRing width="24" />
            <span className="ml-3">Connect with your fans personally</span>
          </div>
          <div className="flex text-gray-500 font-medium lg:tracking-wide">
            <CheckRing width="24" />
            <span className="ml-3">Help your fans create and build wealth</span>
          </div>
          <div className="flex text-gray-500 font-medium lg:tracking-wide">
            <CheckRing width="24" />
            <span className="ml-3">
              Earn from your fans through direct interest or get gifted
            </span>
          </div>
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
