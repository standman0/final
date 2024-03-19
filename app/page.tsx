"use client";
import Header from "./component/header";
import Footer from "./component/footer";
import TeamMemberCard from "./component/customer";
import Animation from "./component/animax";
import { TypeAnimation } from "react-type-animation";
import Sift from "@/app/images/sift.jpg";
import Hunt from "@/app/images/hunt.jpg";
import Start from "@/app/images/startupboot.jpg";
import Angel from "@/app/images/angels.jpg";
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
import Alph from "@/public/alph.png";
import Nuru from "@/public/nuru.png";
import Obi from "@/public/Obi.png";
import Amee from "@/public/amee.png";
import Grace from "@/public/grace.png";
import Rekya from "@/public/rekya.png";
import Alex from "@/public/alex.png";
import Saidu from "@/public/sadiu.png";
import Emerald from "@/public/emerald.png";

const ANIMATION_DURATION = 2000;

export default function Home() {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <section className="bg-[#FBF9FC]">
        <div className="homepage max-w-7xl  mx-auto aria-label overflow-hidden h-lvl px-6 md:px-3 font-Outfit box-border  ">
          <div className="flex max-w-8xl lg:flex-row lg:px-3 md:px-3 flex-col  text-base border-b-0">
            <div className="lg:w-2/3 lg:pr-[10rem] w-full pt-16 relative  h-fit">
              <h1 className="text-black  text-4xl lg:text-[2.85rem] font-black leading-tight lg:leading-snug">
                Join a <span className="text-homeblue">Circle </span> that
                allows you
                <span className="text-4xl lg:text-[2.85rem] text-green-500 ml-3 font-black">
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
              <Shade className="absolute top-[6.7rem] left-[4rem] lg:top-[7.375rem] lg:left-[8.5rem]" />
              <p className="text-gray-500 pt-5 lg:text-xl lg:text-[1.15rem] lg:w-[90%]">
                Create or join cross border and multicurrency groups that {" "}
                allows you to become financially free, accountable & build a{" "}
                community of financially responsible connections.
              </p>
              <div className="firstimg gap-8 flex pt-16">
                <a className="hover:cursor-pointer" href="http://">
                  <Google />
                </a>
                <a className="hover:cursor-pointer" href="http://">
                  <Apple />
                </a>
              </div>
            </div>
            <div className="lg:w-[55%] relative">
              <Animation />
            </div>
          </div>
          <div className="feature grid items-start w-full mt-10 lg:mb-10">
            <h2 className="text-black md:text-center font-semibold text-2xl mb-8">
              Featured In
            </h2>
            <div className="flex md:justify-center w-full flex-wrap mb-12">
              <Image src={Sift} className="mr-3 " height={40} alt={""} />
              <Image src={Start} className="mr-3 " height={40} alt={""} />
              <Image src={Angel} className="mr-3 " height={40} alt={""} />
              <Image src={Hunt} className="" height={40} alt={""} />
            </div>
          </div>
        </div>
        </section>
        <section className="secondnav max-w-7xl w- lg:w-full mx-auto aria-label relative pb-[18rem] md:pb-[30rem] lg:pb-[35rem] mt-12">
          <iframe
            src="https://www.youtube.com/embed/lys_5qx9od8?si=C0mOu1N1vURVQFqm"
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full absolute top-0 left-0"
          ></iframe>
        </section>

        <section className="bg-[#404CCF0F] py-12 mt-12">
          <div className="thirdnav max-w-7xl  mx-auto aria-label h-full w-full">
            <header className="lg:flex lg:flex-col lg:mb-16 lg:items-center p-6">
              <button className="mb-4 cursor-default px-4 py-2 text-center rounded-xl font-semibold text-homeblue border-homeblue border bg-slate-300 hover:bg-homeblue hover:text-white">
                Features
              </button>
              <div className="text-black lg:text-3xl text-2xl font-extrabold">
                myCircle is Seamlessly interwoven to the money lifestyle
              </div>
            </header>

            <div className="tab h-auto p-5 pb-0 gap-4 lg:h-[25rem] md:mt-5 items-end flex flex-col md:flex-row md:gap-2 lg:gap-4 justify-center">
              <div className="relative md:w-full md:rounded-2xl  bg-homeash h-[20rem]  p-6 lg:h-80 w-full lg:w-1/3 rounded-2xl">
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
                <a href="/spend">
                <h1 className="absolute flex bottom-8 hover:cursor-pointer text-getstarted">
                  Get Started
                  <span className="ml-2">
                    <ArrowUp />
                  </span>
                </h1>
                </a>
              </div>

              <div className="bg-homeblue md:h-[30rem] md:rounded-2xl lg:h-[27rem] h-[23rem] relative p-6 md:mt-5 lg:py-10  w-full lg:w-1/3 rounded-2xl">
                <h2 className="text-lg pb-3 text-white lg:text-xl font-bold">
                  Save
                </h2>
                <p className="text-sm text-white lg:text-base">
                  Create and join multiple accountable savings group to earn
                  more than 15% on annual interest rate.
                </p>

                <a href="/save">
                <h1 className="absolute flex bottom-16 hover:cursor-pointer text-white">
                  Get Started
                  <span className="ml-2">
                    <ArrowUpW />
                  </span>
                </h1>
                </a>

                <Image
                  height={200}
                  width={200}
                  objectFit="cover"
                  src={Save}
                  alt=""
                  className="absolute md:w-1/2 md:right-12 md:top-[13rem] lg:top-[9rem] right-24"
                />
              </div>

              <div className="bg-homeash md:rounded-2xl relative md:1/3 h-[20rem] p-6 md:h-80 w-full lg:w-1/3  rounded-2xl">
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
                <a href="/earn">
                <h1 className="flex absolute  lg:right-8 bottom-8 hover:scale-200 hover:cursor-pointer text-getstarted">
                  Get Started
                  <span className="ml-2">
                    <ArrowUp />
                  </span>
                </h1>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7AAE71A] py-8 md:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto aria-label socialize flex flex-col px-5 lg:flex-row justify-center gap-8 md:gap-10 lg:gap-5">
            <div className="lg:h-96 w-full  py-10 px-7 bg-homelightgreen gap-6 rounded-2xl">
              <div className="  px-4 w-24 py-2 text-center rounded-xl font-semibold text-homeblue border-homeblue border hover:bg-homeblue hover:text-white bg-slate-300">
                Socialize
              </div>
              <h1 className="text-2xl md:text-4xl font-black mt-7 mb-2">
                Build financially credible and Accountable Connections
              </h1>
              <p className="text-sm text-brandblack md:text-base lg:text-[1.15rem] lg:w-[85%]">
                Connect with vetted and verified individuals ready to 
                take your financial dreams to the next level. Build 
                sustainable relationships or meet that lucky person.
              </p>

              <a href="/socialize">
              <h1 className=" flex text-getstarted hover:cursor-pointer pt-5">
                Get Started
                <span className="ml-2 ">
                  <ArrowUp />
                </span>
              </h1>
              </a>
            </div>
            <div className="md:h-80 lg:h-96 w-full md:w-full lg:w-[35rem] bg-homemediumgreen rounded-2xl flex items-center justify-center">
              <Image src={Text} className="w-[60%] md:h-[inherit] md:w-auto" alt="" />
            </div>
          </div>
        </section>

        <section className="Business py-8 md:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto flex-col px-5 flex lg:flex-row gap-8 md:gap-10 lg:gap-5">
            <div className="md:h-96 h-80 md:w-full flex justify-center items-center w-full bg-homepink rounded-2xl">
              <Image
                src={Stack}
                alt=""
                className="md:h-[inherit] md:w-auto"
              />
            </div>
            <div className="md:h-96 w-full py-10 px-7 bg-homelightpink gap-6 rounded-2xl">
              <div className="  px-4 w-24 py-2 text-center rounded-xl font-semibold text-homeblue border-homeblue border bg-slate-300 hover:bg-homeblue hover:text-white">
                Business
              </div>
              <h1 className="text-2xl md:text-4xl font-black mt-7">
                10X your sales demand
              </h1>
              <p className="text-base text-brandblack md:text-lg pt-2 lg:w-[75%]">
                Accept payment with the myCircle wallet api and triple sales 
                demand. Showcase and have access to financially qualified 
                lead. Say goodbye to “I will get back to you”.
              </p>

              <a href="/business">
              <h1 className=" flex text-getstarted pt-5 hover:cursor-pointer">
                Get Started
                <span className="ml-2">
                  <ArrowUp />
                </span>
              </h1>
              </a>-
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
                  Hi-Grade, multiple level authentication, keeping your money
                  safe at all time
                </p>
              </div>
              <div className="lg:h-96 h-[18rem]  px-8 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
                <Protect />
                <h2 className="text-xl pt-8 font-lg pb-6  ">Data Protection</h2>
                <p className="text-base text-brandblack md:text-base pt-2">
                  Openness and transparency in handling, storage and processing
                  of your data
                </p>
              </div>
              <div className="lg:h-96 h-[18rem]  px-8 py-16 lg:w-1/3 w-full rounded-2xl bg-white">
                <Laptop />
                <h2 className="text-xl pt-8 font-lg pb-6  ">
                  Regulated Autorities{" "}
                </h2>
                <p className="text-base text-brandblack md:text-base pt-2">
                  Highly regulated corporative society with CBN Bank level
                  partnership
                </p>
              </div>
              <div className="lg:h-96 h-[18rem]  px-8 py-16 w-full lg:w-1/3 rounded-2xl bg-white">
                <Laptop />
                <h2 className="text-xl font-lg pb-6  ">Secure Bank</h2>
                <p className="text-base text-brandblack md:text-base pt-2">
                  Partnered with established financial institutions to double
                  proof all transaction
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
            <div className="flex flex-col  lg:flex-row w-full  no-scrollbar h-auto overflow-x-auto rounded-2xl gap-8 px-5 md:px-5 lg:px-0">
              <TeamMemberCard
                src={Smile}
                comment="myCircle is not just a savings app; it's a financial empowerment tool. The combination of social interaction and automatic savings has completely changed the way I approach my finances. Highly recommend it to anyone serious about building wealth."
                name="Nathan A."
                job="Techie"
                index={1}
              />
              <TeamMemberCard
                src={Amee}
                comment="myCircle is not just a savings app; it's a financial empowerment tool. The combination of social interaction and automatic savings has completely changed the way I approach my finances. Highly recommend it to anyone serious about building wealth."
                name="Ameeda s."
                job="Human Resources"
                index={2}
              />
              <TeamMemberCard
                src={Alex}
                comment="Using myCircle has transformed the way I save money. The social savings aspect makes it fun and engaging, and I've seen a significant boost in my savings since joining."
                name="Alexandra G."
                job="Entrepreneur"
                index={3}
              />
              <TeamMemberCard
                src={Emerald}
                comment="I love the automatic savings feature! Being able to save a portion of my spending through merchant discounts is genius. It's like building wealth effortlessly."
                name="Emerald M."
                job="Product Manager"
                index={4}
              />
              <TeamMemberCard
                src={Saidu}
                comment="myCircle has created a community of like-minded individuals focused on financial responsibility. The group dynamics and shared goals make saving less daunting and more enjoyable."
                name="Saidu T."
                job="Content Creator"
                index={5}
              />
              <TeamMemberCard
                src={Nuru}
                comment="As a young earner, myCircle has given me a platform to save without feeling restricted. The social aspect and merchant discounts make it a win-win for my financial goals."
                name="Nurudeen A."
                job="Trader"
                index={6}
              />
              <TeamMemberCard
                src={Alph}
                comment="The discounts from partner merchants are a game-changer. I've saved more money than I thought possible, and it's become a habit I don't want to break s i offer discount also using the payment page"
                name="Alphonsus O."
                job="Business Woman"
                index={7}
              />
              <TeamMemberCard
                src={Rekya}
                comment="The myCircle team is responsive and committed to improving the user experience. It's refreshing to see a fintech company genuinely care about its users."
                name="Rekya S."
                job="Accountant"
                index={8}
              />
              <TeamMemberCard
                src={Grace}
                comment="The transparency in tracking my savings progress motivates me to stay on top of my financial goals. myCircle has turned saving into a positive and rewarding experience."
                name="Grace L."
                job="Sales"
                index={9}
              />
              <TeamMemberCard
                src={Obi}
                comment="The myCircle concept is brilliant. It seamlessly integrates socializing and saving, making the whole process enjoyable. The added bonus of discounts on everyday expenses is a fantastic incentive. It's a must-have for anyone looking to take control of their financial future."
                name="Obi Chikason"
                job="Entrepreneur"
                index={6}
              />

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
