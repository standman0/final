"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import PhoneSaveIllustration from "@/public/save-phone-illustration.svg";
import FinalSaveIllustration from "@/public/save-final-illustration.svg";
import Ball from "@/public/ball.svg";
import SecondaryIntroBox from "../component/secondary-intro";

export default function Save() {
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
                    The reliable way to <br /> save and grow wealth
                  </h2>
                  <p className="text-gray-500 px-6 pt-5 lg:text-[1.15rem] lg:w-[90%]">
                    myCircle provides a reliable and effortless way to save,
                    invest, and build wealth, offering high interest ensuring
                    accountable practical savings that allows you grow wealth
                    seamlessly.
                  </p>
                  <button className="px-14 mt-6 mb-10 md:px-10 lg:mb-6 py-4 rounded-md text-white hover:bg-green-600  ml-6 bg-homeblue">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="flex mr-[2rem] w-full h-full items-end justify-center relative md:w-full  bg-teal-50">
                <PhoneSaveIllustration className="w-[80%] md:w-[95%]" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=" max-w-7xl mx-auto aria-label h-fit md:h-72 flex flex-col md:flex-row rounded-xl bg-teal-50">
            <SecondaryIntroBox
              title="Maximum Interest"
              description="Enjoy over 15% in savings interest annually on all circle groups and unused funds in wallet"
            />
            <SecondaryIntroBox
              title="Automated Savings"
              description="Automate your savings by using the auto deposit feature that lets you save anytime"
            />
            <SecondaryIntroBox
              title="Flexible"
              description="Set flexible Access to your savings or Interest whenever you want across multiple groups"
            />
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-7xl   w-full grid  justify-items-center text-center mb-20">
            <div className="flex w-full md:w-2/5 flex-col gap-4 ">
              <div className="text-black text-3xl  lg:text-5xl mb-0 pt-24 font-extrabold">
                Start growing wealth <br />
                Create or join Circle
              </div>
              <p className="text-gray-500 mt-2 px-6">
                Lets help with that financial goal and target, myCircle makes
                you accountable and committed to your savings goals
              </p>
              <div className="flex justify-center mt-6  gap-6">
                <button className="px-10 py-3 rounded-md md:text-sm md:px-7 bg-homeblue text-white">
                  Create a Circle
                </button>
                <button className="rounded-md px-10 py-3  bg-homeblue text-white  ">
                  Join a circle
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto  md:max-w-4xl bg-white">
            <FinalSaveIllustration />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
