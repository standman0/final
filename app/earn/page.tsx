"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Pig from "@/app/images/piggy.png";
import Ball from "@/public/ball.svg";
import Image from "next/image";
import EarnIllustration from "@/public/earn-illustration.svg";
import Google from "@/public/play-store.svg";
import Apple from "@/public/apple-store.svg";
import SecondaryIntroBox from "../component/secondary-intro";

export default function Product() {
  return (
    <>
      <Header />
      <div className="product w-screen box-border overflow-hidden">
        <section>
          <div className="md:max-w-7xl md:mx-auto  w-screen overflow-x-hidden md:mb-8 md:pb-4 bg-white font-Outfit box-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <div className="lg:mt-8">
                <div className="px-12 py-3 mt-10 ml-5 w-fit bg-homelightpurple rounded-3xl font-semibold text-homeblue ">
                  <span className="text-sm px-6">Save</span>
                </div>
                <div className="pt-10 md:pt-3 md:items-center w-full md:w-full bg-white">
                  <h2 className="text-black text-3xl px-5 md:  lg:px-5 lg:text-5xl leading-normal font-extrabold md:mb-3">
                    Seamless Earning from your Circles
                  </h2>
                  <p className="text-gray-500 px-6 pt-5 lg:text-[1.15rem] lg:w-[90%]">
                    For every circle group created, you earn a percentage of the
                    interest generated on savings accrued by your groups. You
                    unlock a new income level for every user milestones reached.
                    more circles with o created the more you earn
                  </p>
                  <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600  ml-6 bg-homeblue">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="flex mr-[2rem] w-full h-full items-end justify-center relative md:w-full  bg-teal-50">
                <EarnIllustration className="w-[50%] md:w-[85%] mt-10 lg:mt-16" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=" max-w-7xl mx-auto aria-label h-fit md:h-72 flex flex-col md:flex-row rounded-xl bg-teal-50">
            <SecondaryIntroBox
              title="Create"
              description="The more circles created, the more your potential income opportunities"
            />
            <SecondaryIntroBox
              title="Save"
              description="Earnings generated are subjected to actual prevailing residual interest rate. You earning"
            />
            <SecondaryIntroBox
              title="Cashout"
              description="Pay out your earnings at the end of each months, regardless, it keeps generating income"
            />
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
              className="object-scale-down relative md:left-[2rem] md-1/2 lg:w-3/8 max-w-screen-[75%]"
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
