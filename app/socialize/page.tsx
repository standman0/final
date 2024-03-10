"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Image from "next/image";
import Heart from "@/app/images/Heart.png";
import Ball from "@/public/ball.svg";
import Zig from "@/public/zigzag.svg";
import SocialImport from "@/public/social.svg";

export default function Social() {
  return (
    <div className="bg-white">
      <Header />
      <div className=" mx-auto aria-label lg:mb-6 max-w-7xl h-full lg:max-h-[42rem]  overflow-hidden bg-white">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
          <div className="lg:mt-8 px-6">
            <div className="px-12 py-3 mt-10 w-fit bg-homelightpurple rounded-3xl font-semibold text-homeblue ">
              <span className="text-sm px-6">Socialize</span>
            </div>
            <div className="pt-5 items-center flex-grow bg-white">
              <h2 className="text-black lg:text-5xl text-3xl leading-nomal font-extrabold mb-3 ">
                Connect & build real relationships
              </h2>
              <p className="text-neutral-400 text-base  md:pt-5 lg:texl-2xl pr-5">
                myCircle allows you socialize, chat and have fun within circle
                threads in each circle groups. Private and Public conversations
                can be initiated. With the myCircle premium business groups,
                business opportunities can be discussed and executed jointly.
              </p>
            </div>
            <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600 bg-homeblue">
              Get Started
            </button>
          </div>

          <div className="flex w-full h-full items-end justify-center relative md:w-full  bg-teal-50">
            <SocialImport className="w-[80%] md:w-[95%]" />
          </div>
        </div>
      </div>

      <div className="lg:max-w-7xl  mx-auto aria-label w-auto md:flex-row lg:h-80 flex flex-col lg:flex-row rounded-xl bg-teal-50 ">
        <div className="grid justify-items-center text-center w-full lg:w-1/3  h-full">
          <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
            <Ball />
            <h1 className="text-xl mt-5 font-bold text-homeblue ">Connect</h1>
            <p className="text-neutral-500 md:text-sm leading-7 tracking-wide">
              Connect and link up with like minded financially reliable and
              accountable connects{" "}
            </p>
          </div>
        </div>

        <div className=" grid justify-items-center text-center w-full lg:w-1/3  h-full ">
          <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
            <Ball />
            <h1 className="text-xl mt-5 font-bold text-homeblue ">Network</h1>
            <p className="text-neutral-500 md:text-sm leading-7 tracking-wide">
              Grow your Network, join business Groups, execute joint Business
              and share your risk{" "}
            </p>
          </div>
        </div>

        <div className=" grid justify-items-center text-center w-full lg:w-1/3  h-full ">
          <div className="flex flex-col text-left p-6 lg:pl-16 justify-center">
            <Ball />
            <h1 className="text-xl mt-5 font-bold text-homeblue ">Engage</h1>
            <p className="text-neutral-500 md:text-sm leading-7 tracking-wide">
              Engage on circle threads, learn financial literacy Realtime from
              financial experts{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto aria-label md:flex-row md:mt-6 flex flex-col lg:flex-row lg:my-32 gap-6 w-full h-auto mb-6 md:p-6">
        <div className="p-6 img relative   bg-blue-950 md:w-1/2 md:rounded-xl lg:w-1/3 lg:rounded-xl">
          {/* <Zig className="absolute w-auto left-[12.5rem]  md:w-[12rem] md:left-36 md:bottom-[5rem] bottom-[3rem] lg:bottom-10 lg:right-4" /> */}
          <Image
            src={Heart}
            height={300}
            width={300}
            alt=" "
            className=" md:w-10/12"
          />
        </div>
        <div className=" flex flex-col p-6 justify-center  ">
          <h1 className="text-black text-2xl md:mb-6 lg:text-3xl mb-10 font-black">
            Easy way to Socialize with <br />
            Financially verified connections{" "}
          </h1>
          <p className="text-gray-500 font-medium tracking-wide">
            Invest your spare funds, create new income lines - Build Business
            Relationships
          </p>
          <p className="text-gray-500 font-medium tracking-wide">
            Expand your net worth and grow financial influence - Build Personal
            Relationships
          </p>
          <p className="text-gray-500 font-medium tracking-wide">
            Start your marriage on a strong financial foundation - Build
            Romantic Relationships
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
