"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Pig from "@/app/images/piggy.png";
import Ball from "@/public/ball.svg";
import Image from "next/image";
import EarnIllustration from "@/public/earn-illustration.svg";
import Google from "@/public/play-store.svg";
import Apple from "@/public/apple-store.svg";

export default function Product() {
  return (
    <>
      <Header />
      <div className="product    max-w-7xl mx-auto aria-label bg-white">
        <div className=" overflow-x-hidden ">
          <div className=" flex overflow-x-hidden md:flex-row lg:max-h-[42rem] text-base flex-col lg:flex-row overflow-hidden  md:mb-10">
            <div className="p-5">
              <div className="px-12 py-3 mt-10 w-fit bg-homelightpurple rounded-3xl font-semibold text-homeblue ">
                <span className="text-sm px-6">Earn</span>
              </div>
              <div className=" pt-5 items-center h-fit bg-white">
                <h2 className="text-black text-4xl lg:text-5xl leading-nomal  font-extrabold mb-3 ">
                  Seamless Earning from your Circles
                </h2>
                <p className="text-neutral-500 pt-5 texl-2xl">
                  For every circle group created, you earn a percentage of the
                  interest generated on savings accrued by your groups. You
                  unlock a new income level for every user milestones reached.
                  more circles with o created the more you earn
                </p>
              </div>
              <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600 bg-homeblue">
                Get Started
              </button>
            </div>

            <div className="flex mr-[2rem] w-full h-full items-end justify-center relative md:w-full  bg-teal-50">
              <EarnIllustration className="md:w-[95%]" />
            </div>
          </div>
        </div>

        <section>
          <div className=" max-w-7xl mx-auto aria-label h-fit md:h-80 flex flex-col md:flex-row rounded-xl bg-teal-50">
            <div className="grid justify-items-center text-center md:w-1/3 w-full h-full">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="lg:text-xl pt-7 text-2xl font-bold text-homeblue ">
                  Create
                </h1>
                <p className="text-gray-500  lg:leading-7 lg:tracking-wide">
                  The more circles created, the more your potential income
                  opportunities
                </p>
              </div>
            </div>

            <div className=" grid justify-items-center text-center w-full md:w-1/3  h-full ">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="md:text-xl text-2xl pt-7 font-bold text-homeblue ">
                  Save
                </h1>
                <p className="text-gray-500 leading-7 tracking-wide">
                  Earnings generated are subjected to actual prevailing residual
                  interest rate. You earning
                </p>
              </div>
            </div>

            <div className=" grid justify-items-center text-center w-full md:w-1/3  h-full ">
              <div className="flex flex-col text-left p-7 md:w-full pt-5 md:pl-16 justify-center">
                <Ball />
                <h1 className="md:text-xl text-2xl pt-7 font-bold text-homeblue ">
                  Cashout
                </h1>
                <p className="text-gray-500 leading-7 tracking-wide">
                  Pay out your earnings at the end of each months, regardless,
                  it keeps generating income
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-h-[42rem] mb-16 w-full grid  justify-items-center text-center ">
          <div className="flex lg:w-2/5 px-4 flex-col gap-4 ">
            <div className="text-black text-5xl mb-0 pt-16 font-extrabold">
              Save <span className="text-homeblue">Money</span>{" "}
            </div>
            <div className="text-black text-5xl font-extrabold">
              Earn <span className="text-earngreena">Money </span>{" "}
            </div>
            <p className="text-neutral-500 mt-2">
              As the admin and group creator, earn a percentage of the interest
              accrued by your circlers, get paid every month
            </p>
            <div className="flex justify-center mt-6  gap-6">
              <button className="px-10 py-3 rounded-md text-white bg-homeblue hover:bg-green-500 hover:text-homeblue">
                Create a Circle
              </button>
              <button className="rounded-md px-10 py-3 text-white  bg-homeblue hover:bg-green-500 hover:text-homeblue  ">
                Join a circle
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto aria-label">
          <div className="py-12 lg:rounded-xl bg-spendblue flex flex-col md:flex-row lg:flex-row md:gap-16 lg:h-[28rem] lg:mx-6">
            {/* <div className="img md:w-1/2  lg:w-1/2 h-full"> */}
              <Image
                src={Pig}
                alt=""
                className="object-cover relative md:left-[2rem] md-1/2 lg:w-3/8 max-w-screen-[75%]"
              />
            {/* </div> */}
            <div className="flex flex-col p-4 md:w-1/2 justify-center">
              <h1 className="text-white text-5xl font-extrabold mb-8">
                Spend with ease of mind{" "}
              </h1>
              <p className="ttext-neutral-500 text-base text-white ">
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
      </div>
      <Footer />
    </>
  );
}
