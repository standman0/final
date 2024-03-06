"use client";
import Header from "./component/header";
import Footer from "./component/footer";
import { TypeAnimation } from "react-type-animation";
import Sift from "@/app/images/sift.jpg";
import Hunt from "@/app/images/hunt.jpg";
import Start from "@/app/images/startupboot.jpg";
import Angel from "@/app/images/angels.jpg";
import Caro from "@/app/images/Caro.png";
import Image from "next/image";
import Google from "@/public/play-store.svg";
import Apple from "@/public/apple-store.svg";
import Spend from "@/app/images/spend.png";
import Save from "@/app/images/Save.png";
import Earn from "@/app/images/earn.png";
import Text from "@/app/images/text.png";
import Stack from "@/app/images/Stack.png";
import Monica from "@/app/images/Monica.png";
import Smile from "@/app/images/Smile.jpeg";
import Phone from "@/app/images/Phone.png";
import White from "@/app/images/white.png";
import ArrowUp from "@/public/arrowup.svg";
import ArrowUpW from "@/public/arrowupwhite.svg";
import Sheild from "@/public/sheild.svg";
import Laptop from "@/public/laptop.svg";
import Protect from "@/public/protect.svg";
import Shade from "@/public/shade.svg";

const ANIMATION_DURATION = 2000;

export default function Home() {
  return (
    <>
    <Header />
    <div className="overflow-hidden">
      
      <section className="homepage max-w-7xl  mx-auto aria-label overflow-hidden h-lvl bg-white font-Outfit box-border  ">
        <div className="flex max-w-8xl lg:flex-row lg:px-4  px-2 flex-col  text-base border-b-0">
          <div className="lg:w-2/3 lg:pr-[10rem] w-full pt-16 relative  h-fit bg-white">
            <h1 className="text-black  text-4xl lg:text-5xl font-black leading-tight md:leading-normal">
              Join a <span className="text-blue-700">Circle </span> that  allows you
              <span  className="text-4xl lg:text-5xl text-green-500 ml-3 font-black">
                <TypeAnimation
                  sequence={[
                    "Grow wealth",
                    ANIMATION_DURATION,
                    "Save",
                    ANIMATION_DURATION,
                    "Earn",
                    ANIMATION_DURATION,
                    "Invest",
                    ANIMATION_DURATION,
                    "Socialize",
                    ANIMATION_DURATION,
                  ]}
                  speed={1}
                  repeat={Infinity}
                 
                /> 
              </span>
            </h1> <Shade className='absolute top-[7.5rem] left-[8.5rem]'/>
            <p className="text-gray-500 pt-5 lg:text-xl text-xl">
              Create or join cross border and multicurrency groups that <br />{" "}
              allows you to become financially free, accountable & build a{" "}
              <br /> community of financially responsible connections.
            </p>

            <div className="firstimg gap-8 flex pt-8 md:pt-16">
            <a className="hover:cursor-pointer" href="http://"> <Google class />
             
             </a>
             <a className="hover:cursor-pointer" href="http://"><Apple /></a> 
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto md:pt-0"></div>
        </div>
        <div className="feature grid items-start justify-center w-full md:h-48 pt-20  lg:mb-10">
          <h2 className="text-black text-center font-bold text-lg md:text-xl">
            Featured In
          </h2>
          <div className="flex w-2/5 ml-5">
            <Image
              src={Sift}
              className="mr-3 w-1/2"
              height={40}
              alt={""}
            />
            <Image
              src={Start}
              className="mr-3 w-1/2"
              height={40}
              alt={""}
            />
            <Image
              src={Angel}
              className="mr-3 w-1/2"
              height={40}
              alt={""}
            />
            <Image src={Hunt} className="w-1/2" height={40} alt={""} />
          </div>
        </div>
      </section>
      <section className="secondnav max-w-7xl mx-auto aria-label">
        <Image src={Caro} width={5000} height={5000} alt={""} />
      </section>
      <section>
  <div className="thirdnav max-w-7xl mx-auto aria-label h-full w-full bg-white">
    <header className="flex flex-col items-center">
      <div className="mb-4 px-4 py-2 text-center rounded-xl font-semibold text-homeblue border-blue-700 border bg-slate-300">
        Features
      </div>
      <div className="text-black lg:text-3xl text-2xl p-3 font-extrabold">
        myCircle is Seamlessly interwoven to the money lifestyle
      </div>
    </header>

    <div className="tab h-auto lg:h-[32rem] mt-12 items-end flex flex-col md:flex-row gap-4 justify-center">
      <div className="relative bg-homeash h-[20rem]  p-6 lg:h-80 w-full md:w-1/3 lg:rounded-2xl mb-4 md:mb-0">
        <h2 className="text-lg pb-3 lg:text-xl font-bold">Spend</h2>
        <p className="text-sm text-brandblack lg:text-base">
          Checkout with my Circle wallet creates an autosave lifestyle. Save on discounts that automatically create savings.
        </p>

        <Image
          height={200}
          width={200}
          objectFit="cover"
          src={Earn}
          alt=""
          className="absolute right-14 scale-x-[-1]"
        />
        <h1 className="absolute flex bottom-8 hover:cursor-pointer text-getstarted">
          Get Started
          <span className="ml-2">
            <ArrowUp />
          </span>
        </h1>
      </div>

      <div className="bg-homeblue h-[20rem] relative p-6 mt-5 lg:py-10 md:h-full  lg:w-1/3 lg:rounded-2xl mb-4 md:mb-0">
        <h2 className="text-lg pb-3 text-white lg:text-xl font-bold">Save</h2>
        <p className="text-sm text-white lg:text-base">
          Create and join multiple accountable savings group to earn more than 15% on annual interest rate.
        </p>

        <h1 className="absolute flex bottom-16 hover:cursor-pointer text-white">
          Get Started
          <span className="ml-2">
            <ArrowUpW />
          </span>
        </h1>

        <Image
          height={200}
          width={200}
          objectFit="cover"
          src={Save}
          alt=""
          className="absolute right-24 lg:mt-10"
        />
      </div>

      <div className="bg-homeash relative  h-[20rem] p-6 md:h-80 w-full lg:w-1/3  lg:rounded-2xl">
        <h2 className="text-lg pb-3  md:text-xl font-bold">Earn</h2>
        <p className="text-sm text-brandblack md:text-base">
          Checkout with my Circle wallet creates an autosave lifestyle. Save on discounts that automatically create savings.
        </p>

        <Image
          height={200}
          width={200}
          objectFit="cover"
          src={Spend}
          alt=""
          className="absolute left-20"
        />
        <h1 className="flex absolute  lg:right-8 bottom-8 hover:scale-200 hover:cursor-pointer text-getstarted">
          Get Started
          <span className="ml-2">
            <ArrowUp />
          </span>
        </h1>
      </div>
    </div>
  </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto aria-label socialize flex flex-col lg:flex-row justify-center gap-5 my-28 ">
          <div className=" h-96 w-full py-10 px-7 bg-homelightgreen gap-6 rounded-2xl">
            <div className="  px-4 w-24 py-2 text-center rounded-xl font-semibold text-homeblue border-blue-700 border bg-slate-300">
              Socialize
            </div>
            <h1 className="text-lg md:text-4xl font-black mt-7">
              Build financially credible and <br /> Accountable Connections
            </h1>
            <p className="text-sm text-brandblack md:text-base">
              Connect with vetted and verified individuals ready to <br /> take
              your financial dreams to the next level. Build <br /> sustainable
              relationships or meet that lucky person.
            </p>

            <h1 className=" flex text-getstarted hover:cursor-pointer pt-5">
              Get Started
              <span className="ml-2">
                <ArrowUp />
              </span>
            </h1>
          </div>
          <div className=" h-96 w-full lg:w-[25rem] bg-homemediumgreen lg:rounded-2xl">
            <Image src={Text} height={500} width={500} alt="" />
          </div>
        </div>
      </section>

      <section className="Business">
        <div className="max-w-7xl mx-auto flex-col flex lg:flex-row  mb-16 gap-5">
          <div className=" h-96 w-[30rem] bg-homepink lg:rounded-2xl">
            <Image src={Stack} height={500} width={500} alt="" className="w-9/12 lg:w-full"/>
          </div>
          <div className=" h-96 w-full py-10 px-7 bg-homelightpink gap-6 lg:rounded-2xl">
            <div className="  px-4 w-24 py-2 text-center rounded-xl font-semibold text-homeblue border-blue-700 border bg-slate-300">
              Business
            </div>
            <h1 className="text-lg md:text-4xl font-black mt-7">
              10X your sales demand
            </h1>
            <p className="text-base text-brandblack md:text-lg pt-2">
              Accept payment with the myCircle wallet api and triple sales{" "}
              <br /> demand. Showcase and have access to financially qualified{" "}
              <br /> lead. Say goodbye to “I will get back to you”.
            </p>

            <h1 className=" flex text-getstarted pt-5 hover:cursor-pointer">
              Get Started
              <span className="ml-2">
                <ArrowUp />
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-homelightpurple">
        <div className="max-w-7xl mx-auto flex flex-col items-start security h-full pb-20 ">
          <div className="flex px-5 py-8 ">
            <div className="px-5 py-3 text-blue-800 border border-blue-700  rounded-3xl font-semibold shadow-md hover:bg-blue-600 cursor-pointer">
              Security
            </div>
          </div>
          <div className="text-black px-5 text-3xl mb-6 font-extrabold">
            Your Security comes first
          </div>
          <div className="flex rounded-2xl lg:flex-row flex-col gap-9 justify-center">
            <div className="lg:h-96 h-[18rem] px-8 p-3 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
              <Sheild />
              <h2 className="text-xl pt-8 font-lg pb-6  ">
                Multi Level Authentication
              </h2>
              <p className="text-base text-brandblack md:text-base pt-2">
                Hi-Grade, multiple level authentication, keeping your <br />{" "}
                money safe at all time
              </p>
            </div>
            <div className="lg:h-96 h-[18rem]  px-8 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
              <Protect />
              <h2 className="text-xl pt-8 font-lg pb-6  ">Data Protection</h2>
              <p className="text-base text-brandblack md:text-base pt-2">
                Openness and transparency <br /> in handling, storage and <br />{" "}
                processing of your data
              </p>
            </div>
            <div className="lg:h-96 h-[18rem]  px-8 py-16 lg:w-1/3 w-full rounded-2xl bg-white">
              <Laptop />
              <h2 className="text-xl pt-8 font-lg pb-6  ">
                Regulated Autorities{" "}
              </h2>
              <p className="text-base text-brandblack md:text-base pt-2">
                Highly regulated <br /> corporative society with <br /> CBN Bank
                level partnership
              </p>
            </div>
            <div className="lg:h-96 h-[18rem]  px-8 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
              <Laptop />
              <h2 className="text-xl font-lg pb-6  ">Secure Bank</h2>
              <p className="text-base text-brandblack md:text-base pt-2">
                Partnered with established <br /> financial institutions to{" "}
                <br /> double proof all transaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto flex flex-col items-start h-fit pb-8">
          <div className="flex  p-5 lg:py-8 ">
            <div className="px-5 py-3 bg-homeash rounded-3xl font-semibold text-blue-800 border border-blue-700">
              Customer Success Stories
            </div>
          </div>
          <div className="text-black p-5 text-3xl  mb-6 font-extrabold">
            Real Voices, Real Experience
          </div>
          <div className="flex flex-col lg:flex-row w-full h-auto overflow-x-auto rounded-2xl  gap-8">
            <div className="lg:w-1/4 w-full shrink-0 grow-0 flex flex-col relative pt-32 h-96 rounded-2xl bg-homeash">
              <p className="text-center text-lg font-medium">
                Openness and transparency <br /> in handling, storage and <br />{" "}
                processing of your data
              </p>
              <p className="absolute bottom-20 right-44 text-lg">
                Obi Chikason
              </p>
              <p className="absolute bottom-14 right-44">Entrepreneur</p>
              <div className="w-36 h-36 absolute bottom-3 right-7 bg-black rounded-full">
                <Image
                  src={Smile}
                  height={100}
                  width={100}
                  alt=""
                  objectFit="cover"
                  className="rounded-full object-cover border border-blue-900 w-36 h-36"
                />
              </div>
            </div>
            <div className="lg:w-1/4 w-full shrink-0 grow-0 flex flex-col relative pt-32 h-96 rounded-2xl bg-homeash">
              <p className="text-center text-lg font-medium"></p>
              <p className="absolute bottom-20 right-44 text-lg">
                Obi Chikason
              </p>
              <p className="absolute bottom-14 right-44">Entrepreneur</p>
              <div className="w-36 h-36 absolute bottom-3 right-7 bg-black rounded-full">
                <Image
                  src={Monica}
                  height={100}
                  width={100}
                  alt=""
                  objectFit="cover"
                  className="rounded-full object-cover border border-blue-900 w-36 h-36"
                />
              </div>
            </div>
            <div className="lg:w-1/4 w-full shrink-0 grow-0 flex flex-col relative pt-32 h-96 rounded-2xl bg-homeash">
              <p className="text-center text-lg font-medium"></p>
              <p className="absolute bottom-20 right-44 text-lg">
                Obi Chikason
              </p>
              <p className="absolute bottom-14 right-44">Entrepreneur</p>
              <div className="w-36 h-36 absolute bottom-3 right-7 bg-black rounded-full">
                <Image
                  src={White}
                  height={100}
                  width={100}
                  alt=""
                  objectFit="cover"
                  className="rounded-full object-cover border border-blue-900 w-36 h-36"
                />
              </div>
            </div>
            <div className="lg:w-1/4 w-full shrink-0 grow-0 flex flex-col relative pt-32 h-96 rounded-2xl bg-homeash">
              <p className="text-center text-lg font-medium"></p>
              <p className="absolute bottom-20 right-44 text-lg">
                Obi Chikason
              </p>
              <p className="absolute bottom-14 right-44">Entrepreneur</p>
              <div className="w-36 h-36 absolute bottom-3 right-7 bg-black rounded-full">
                <Image
                  src={White}
                  height={100}
                  width={100}
                  alt=""
                  objectFit="cover"
                  className="rounded-full object-cover border border-blue-900 w-36 h-36"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flexible fonts[Outfit]  h-[35rem] overflow-hidden bg-black font-Outfit box-border  ">
        <div className="max-w-7xl mx-auto flex px-16 text-base flex-col lg:flex-row w-full border-b-0">
          <div className="pt-32 items-center w-full lg:w-2/4 h-fit bg-black">
            <h2 className="text-white text-4xl font-bold mb-7 ">
              What flexible saving look like
            </h2>
            <p className="text-neutral-300 texl-2xl">
              With myCircle, you have the ability to save without an income
              currencies in the blink of an eye. Our cutting-edge technology
              ensures that your transactions are not only swift but also
              executed at the optimal rates, maximizing the values of every
              exchange
            </p>

            <div className="firstimg gap-8 flex py-12 mb-10">
             <a className="hover:cursor-pointer" href="http://"> <Google class />
             
              </a>
              <a className="hover:cursor-pointer" href="http://"><Apple /></a> 
            </div>
          </div>
          <div className="relative bg-black w-full lg:w-2/4 lg:h-fit h-[30rem] ">
            <Image
              height={500}
              width={500}
              src={Phone}
              className="absolute object-contain  top-36"
              alt=""
            />
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
