"use client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Image from "next/image";
import Img from "@/app/images/ABoutUs.jpeg";
import Arrow from "@/public/arrow.svg";
import World from "@/app/images/globe.png";
import Coins from "@/app/images/coins.png";
import Ricky from "@/app/images/Ricky.png";
import Monica from "@/app/images/Monica.png";
import Larry from "@/app/images/Larry.jpeg";

export default function Product() {
  return (
    <>
      <Header />
      <div
        aria-label="Global"
        className=" overflow-hidden bg-white box-border "
      >
        <section className=" bg-about">
          <div className="flex flex-col max-w-7xl mx-auto arial-label  lg:gap-20  lg:flex-row px-4 p-6 border-b-0">
            <div className="lg:w-5/12  ">
              <div className="mt-6 px-4 lg:px-12 py-3 w-fit bg-green-200 rounded-3xl font-semibold text-green-700 shadow-md cursor-pointer">
                About Us
              </div>
              <div className="pt-10">
                <h2 className="text-3xl md:text-6xl font-extrabold mb-3">
                  Meet the first set of{" "}
                  <span className="text-green-700">Cyclers</span>
                </h2>
                <p className="text-neutral-400 text-sm md:text-lg pt-5">
                  Our story began in 2018, when a group of friends, earning too
                  little to save decided to re-invent saving and investing.
                </p>
                <p className="text-neutral-400 text-sm md:text-lg pt-5">
                  After a thorough expense review, against all odds, they
                  scoured several ways of saving that wouldn’t require them to
                  dip into their income. This gave rise to myCircle.
                </p>
                <p className="text-neutral-400 text-sm md:text-lg pt-5">
                  A set of ambitious professionals went on to redefine the way
                  saving can be done, stress-free by refocusing on expense
                  optimization, group support, discount purchase, community, and
                  trust.
                </p>
                <p className="text-neutral-400 text-sm md:text-xl pt-5">
                  myCircle has gone on to be the easiest way to save and build
                  wealth while building a community of trust.
                </p>
              </div>
            </div>
            <div className=" lg:w-[40rem] sm:w-full mt-20 ">
              <Image
                src={Img}
                alt=""
                height={1000}
                width={1000}
                objectFit="contain"
                className="rounded-2xl h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className=" ">
          <div className="w-full max-w-7xl p-6 mx-auto arial-label mt-14 flex flex-col md:flex-row gap-4 rounded-xl bg-white ">
            <div className="w-full lg:w-8/12 ">
              <div className="text-center p-2 w-32 mb-5 rounded-3xl bg-green-200 font-semibold text-green-500 shadow-md">
                Our Vision
              </div>
              <div className="">
                <h1 className="text-3xl md:text-2xl lg:text-4xl font-extrabold mb-5 text-black">
                  Building an accountable
                  <br />
                  community of savers
                </h1>
                <p className="text-neutral-500 md:text-sm leading-7 text-base">
                  Our Goal is to provide software solutions that streamline work
                  processes, enhance productivity, improve life and enable
                  business scalability
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/5 lg:w-1/3 mt-4 md:mt-0">
              <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
                <Arrow />
                <h1 className="text-xl lg:text-2xl font-bold text-homeblue my-3">
                  Our Vision
                </h1>
                <p className="text-neutral-500 leading-7 md:text-sm text-base">
                  To revolutionize the way people save and invest by fostering a
                  sense of community, accountability and financial empowerment.
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/5  lg:w-1/3 mt-4 md:mt-0">
              <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
                <Arrow />
                <h1 className="text-xl  lg:text-2xl font-bold text-homeblue my-3">
                  Our Mission
                </h1>
                <p className="text-neutral-500 md:text-sm leading-7 text-base">
                  To revolutionize the way people save and invest by fostering a
                  sense of community, accountability and financial empowerment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="flex max-w-7xl md:px-5 mx-auto flex-col md:items-start item center bg-white px-6 ">
            <div className="text-center p-2 w-32 mb-5 rounded-3xl bg-green-200 font-semibold text-green-500 shadow-md">
              Team
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center w-full">
              <div className="flex items-center justify-center h-full bg-aboutgray rounded-2xl p-6">
                <div className=" overflow-hidden">
                  <Image
                    src={Ricky}
                    alt=""
                    className="rounded-full w-[14rem] h-[14rem] object-cover"
                  />
                  <h1 className="font-bold text-xl mt-3 text-black text-center">
                    Ricky Osalumese
                  </h1>
                  <h1 className="font-bold text-lg mt-2 text-black text-center">
                    CEO
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center h-full bg-aboutblue rounded-2xl p-6">
                <div className=" overflow-hidden">
                  <Image
                    src={Monica}
                    alt=""
                    className="rounded-full w-[14rem] h-[14rem] object-cover"
                  />
                  <h1 className="font-bold text-xl text-white mt-3 text-center">
                    Monica Owobiyi
                  </h1>
                  <h1 className="font-bold text-lg text-white mt-2 text-center">
                    Operations
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center h-full bg-aboutgreen rounded-2xl p-6">
                <div className="overflow-hidden">
                  <Image
                    src={Larry}
                    alt=""
                    className="rounded-full w-[14rem] h-[14rem] object-cover"
                  />
                  <div className="">
                    <h1 className="font-bold text-xl mt-3 text-black text-center">
                      Larry Osahon
                    </h1>
                    <h1 className="font-bold text-lg mt-2 text-black text-center">
                      Product
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex max-w-7xl mx-auto arial-label  mb-20 flex-col px-7 md:flex-row gap-7 w-full h-auto md:h-screen mt-20">
            <div className="w-full md:w-2/4 h-full flex flex-col md:ml-9 gap-5">
            <div className="text-center p-2 w-32 mb-5 rounded-3xl bg-green-200 font-semibold text-green-500 shadow-md">
                Our Drive
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">
                Sustainable Finance, <br /> Bridging Wealth Inequality
              </h1>
              <p className="text-neutral-500 leading-7 text-base">
                We unlock new value that fits your needs by combining leading 
                technologies and the most advanced financial software
                solutions.
              </p>
              <p className="text-neutral-500 leading-7 text-base">
                Our biggest drive is bridging the inequality in wealth
                acquisition and
                distribution across Africa. We achieve this by ensuring all our
                users 
                are independently avail values of wealth creation and
                possibility of earning from each other.
              </p>
              <div className=" rounded-xl">
                <Image
                  src={World}
                  alt=""
                  height={400}
                  width={480}
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="img hidden md:block w-full md:w-1/2 lg:w-2/4 rounded-xl">
              <Image
                src={Coins}
                alt=""
                height={1000}
                width={560}
                objectFit="contain"
                className="rounded-2xl mt-20 "
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
