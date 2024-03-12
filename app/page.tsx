"use client";
import Header from "./component/header";
import Footer from "./component/footer";
import TeamMemberCard from"./component/customer";
import Animation from "./component/animax";
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
        <section className="homepage max-w-7xl  mx-auto aria-label overflow-hidden h-lvl px-6 md:px-3 bg-white font-Outfit box-border  ">
          <div className="flex max-w-8xl lg:flex-row lg:px-3 md:px-3 flex-col  text-base border-b-0">
            <div className="lg:w-2/3 lg:pr-[10rem] w-full pt-16 relative  h-fit bg-white">
              <h1 className="text-black  text-4xl lg:text-5xl font-black leading-tight md:leading-normal">
                Join a <span className="text-homeblue">Circle </span> that
                allows you
                <span className="text-4xl lg:text-5xl text-green-500 ml-3 font-black">
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
              </h1>{" "}
              <Shade className="absolute top-[6.2rem] left-[4rem] lg:top-[7.5rem] lg:left-[8.5rem]" />
              <p className="text-gray-500 pt-5 lg:text-xl text-xl">
                Create or join cross border and multicurrency groups that <br />{" "}
                allows you to become financially free, accountable & build a{" "}
                <br /> community of financially responsible connections.
              </p>
              <div className="firstimg gap-8 flex pt-16">
                <a className="hover:cursor-pointer" href="http://">
                  
                  <Google  />
                </a>
                <a className="hover:cursor-pointer" href="http://">
                  <Apple />
                </a>


              </div>
            </div>
            <div className="lg:w-[55%] relative bg-white">
                    <Animation/>
                    </div>
          </div>
          <div className="feature grid items-start w-full mt-32 lg:mb-10">
            <h2 className="text-black md:text-center font-semibold text-2xl mb-8">
              Featured In
            </h2>
            <div className="flex md:justify-center w-full flex-wrap mb-16">
              <Image src={Sift} className="mr-3 " height={40} alt={""} />
              <Image src={Start} className="mr-3 " height={40} alt={""} />
              <Image src={Angel} className="mr-3 " height={40} alt={""} />
              <Image src={Hunt} className="" height={40} alt={""} />
            </div>
          </div>
        </section>
        <section className="secondnav max-w-7xl w- lg:w-full mx-auto aria-label">
        <iframe width="1300" height="800" src="https://www.youtube.com/embed/lys_5qx9od8?si=C0mOu1N1vURVQFqm" title="YouTube video player"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="lg:w-full md:w-full w-full"></iframe>
        </section>

        <section>
          <div className="thirdnav max-w-7xl md:mt-8 lg:mt-20 mx-auto aria-label h-full w-full bg-white">
            <header className="lg:flex lg:flex-col lg:mb-16 lg:items-center p-6">
              <button className="mb-4 cursor-default px-4 py-2 text-center rounded-xl font-semibold text-homeblue border-homeblue border bg-slate-300 hover:bg-homeblue hover:text-white">
                Features
              </button>
              <div className="text-black lg:text-3xl text-2xl font-extrabold">
                myCircle is Seamlessly interwoven to the money lifestyle
              </div>
            </header>

            <div className="tab h-auto p-5 gap-4 lg:h-[25rem] md:mt-5 items-end flex flex-col md:flex-row md:gap-3 lg:gap-4 justify-center">
              <div className="relative md:w-full md:rounded-2xl  bg-homeash h-[20rem]  p-6 lg:h-80 w-full lg:w-1/3 lg:rounded-2xl">
                <h2 className="text-lg pb-3 lg:text-xl font-bold">Spend</h2>
                <p className="text-sm text-brandblack lg:text-base">
                  Checkout with my Circle wallet creates an autosave lifestyle.
                  Save on discounts that automatically create savings.
                </p>

                <Image
                  height={200}
                  width={200}
                  objectFit="cover"
                  src={Earn}
                  alt=""
                  className="absolute  md:w-1/2 right-14 scale-x-[-1]"
                />
                <h1 className="absolute flex bottom-8 hover:cursor-pointer text-getstarted">
                  Get Started
                  <span className="ml-2">
                    <ArrowUp />
                  </span>
                </h1>
              </div>

              <div className="bg-homeblue md:h-[30rem] md:rounded-2xl md:w-full lg:h-[27rem] h-[23rem] relative p-6 md:mt-5 lg:py-10  lg:w-1/3 lg:rounded-2xl">
                <h2 className="text-lg pb-3 text-white lg:text-xl font-bold">
                  Save
                </h2>
                <p className="text-sm text-white lg:text-base">
                  Create and join multiple accountable savings group to earn
                  more than 15% on annual interest rate.
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
                  className="absolute md:w-1/2 md:right-12 md:top-[13rem] lg:top-[9rem] right-24"
                />
              </div>

              <div className="bg-homeash md:rounded-2xl relative md:1/3 h-[20rem] p-6 md:h-80 w-full lg:w-1/3  lg:rounded-2xl">
                <h2 className="text-lg pb-3  md:text-xl font-bold">Earn</h2>
                <p className="text-sm text-brandblack lg:text-base">
                  Checkout with my Circle wallet creates an autosave lifestyle.
                  Save on discounts that automatically create savings.
                </p>

                <Image
                  height={200}
                  width={200}
                  objectFit="cover"
                  src={Spend}
                  alt=""
                  className="absolute md:w-1/2 left-20"
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
          <div className="max-w-7xl mx-auto aria-label socialize flex flex-col gap-5 px-5 mb-5 lg:flex-row justify-center md:gap-5 md:my-28 ">
            <div className=" h-96 w-full  py-10 px-7 bg-homelightgreen gap-6 md:rounded-2xl">
              <div className="  px-4 w-24 py-2 text-center rounded-xl font-semibold text-homeblue border-homeblue border hover:bg-homeblue hover:text-white bg-slate-300">
                Socialize
              </div>
              <h1 className="text-lg md:text-4xl font-black mt-7">
                Build financially credible and <br /> Accountable Connections
              </h1>
              <p className="text-sm text-brandblack md:text-base">
                Connect with vetted and verified individuals ready to <br />{" "}
                take your financial dreams to the next level. Build <br />{" "}
                sustainable relationships or meet that lucky person.
              </p>

              <h1 className=" flex text-getstarted hover:cursor-pointer pt-5">
                Get Started
                <span className="ml-2 ">
                  <ArrowUp />
                </span>
              </h1>
            </div>
            <div className=" h-96 w-full md:w-full lg::w-[35rem] bg-homemediumgreen lg:rounded-2xl flex items-center justify-center">
              <Image src={Text} className="w-[20rem]  lg:w-[35rem]" alt="" />
            </div>
          </div>
        </section>

        <section className="Business px-5 my-6">
          <div className="max-w-7xl mx-auto flex-col gap-5 flex lg:flex-row md:gap-5 md:mb-6 lg:mb-16 lg:gap-5">
            <div className=" h-96 md:w-full md:flex md:justify-center md:items-center w-full bg-homepink lg:rounded-2xl">
              <Image
                src={Stack}
                height={500}
                width={500}
                alt=""
                className="w-full md:w-1/2 lg:w-full"
              />
            </div>
            <div className=" h-96 w-full py-10 px-7 bg-homelightpink gap-6 lg:rounded-2xl">
              <div className="  px-4 w-24 py-2 text-center rounded-xl font-semibold text-homeblue border-homeblue border bg-slate-300 hover:bg-homeblue hover:text-white">
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
            <div className="flex px-5 py-10 ">
              <div className="px-5 py-3 text-homeblue border border-homeblue  rounded-3xl font-semibold shadow-md hover:bg-homeblue hover:text-white cursor-pointer">
                Security
              </div>
            </div>
            <div className="text-black px-5 text-3xl mb-6 font-extrabold">
              Your Security comes first
            </div>
            <div className="flex md:grid md:gap-4 md:px-5 md:grid-cols-2 rounded-2xl lg:flex lg:flex-row flex-col gap-9 justify-center px-6 ">
              <div className="lg:h-96 h-[18rem] px-8 p-3 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
                <Sheild />
                <h2 className="text-xl pt-8 font-lg pb-6  ">
                  Multi Level Authentication
                </h2>
                <p className="text-base text-brandblack md:text-base pt-2">
                  Hi-Grade, multiple level authentication, keeping your 
                  money safe at all time
                </p>
              </div>
              <div className="lg:h-96 h-[18rem]  px-8 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
                <Protect />
                <h2 className="text-xl pt-8 font-lg pb-6  ">Data Protection</h2>
                <p className="text-base text-brandblack md:text-base pt-2">
                  Openness and transparency  in handling, storage and
                   processing of your data
                </p>
              </div>
              <div className="lg:h-96 h-[18rem]  px-8 py-16 lg:w-1/3 w-full rounded-2xl bg-white">
                <Laptop />
                <h2 className="text-xl pt-8 font-lg pb-6  ">
                  Regulated Autorities{" "}
                </h2>
                <p className="text-base text-brandblack md:text-base pt-2">
                  Highly regulated corporative society with  CBN
                  Bank level partnership
                </p>
              </div>
              <div className="lg:h-96 h-[18rem]  px-8 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
                <Laptop />
                <h2 className="text-xl font-lg pb-6  ">Secure Bank</h2>
                <p className="text-base text-brandblack md:text-base pt-2">
                  Partnered with established  financial institutions to
                   double proof all transaction
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto flex flex-col items-start h-fit pb-8">
            <div className="flex  p-5 lg:py-8 ">
              <div className="px-5 py-3 bg-homeash rounded-3xl font-semibold text-homeblue border border-homeblue hover:bg-homeblue hover:text-white">
                Customer Success Stories
              </div>
            </div>
            <div className="text-black p-5 text-3xl  mb-6 font-extrabold">
              Real Voices, Real Experience
            </div>
            <div className="flex flex-col  lg:flex-row w-full  no-scrollbar h-auto overflow-x-auto rounded-2xl gap-8 px-6 md:px-0">
      <TeamMemberCard src={Smile} comment="Openness and transparency in  handling, storage and processing of your data" name="Obi Chikason" job="Entrepreneur"/>
      <TeamMemberCard src={Monica} comment="Ricky Osalumese" name="Obi Chikason" job="Entrepreneur" />
      <TeamMemberCard src={White} comment="Ricky Osalumese" name="Obi Chikason" job="Entrepreneur"/>
      <TeamMemberCard src={Smile} comment="Ricky Osalumese" name="Obi Chikason" job="Entrepreneur" />

    </div>
            </div>
        </section>

        <section className="flexible fonts[Outfit]  h-[35rem] overflow-hidden bg-black font-Outfit box-border  ">
          <div className="max-w-7xl mx-auto flex px-16 text-base md:flex-row flex-col lg:flex-row w-full border-b-0">
            <div className="pt-32 items-center w-full md:w-1/2 lg:w-2/4 h-fit bg-black">
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
                <a className="hover:cursor-pointer" href="http://">
                  {" "}
                  <Google class />
                </a>
                <a className="hover:cursor-pointer" href="http://">
                  <Apple />
                </a>
              </div>
            </div>
            <div className="relative md:flex md:justify-center bg-black w-full lg:w-2/4 lg:h-fit h-[30rem] ">
              <Image
                height={500}
                width={500}
                src={Phone}
                className="absolute md:w-9/12 md:right-[2rem] object-contain  top-36"
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
