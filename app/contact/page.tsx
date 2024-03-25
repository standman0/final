"use client";
import Footer from "@/app/component/footer";
import LinkedIn from "@/public/linkedin.svg";
import Twitter from "@/public/twitter.svg";
import Instagram from "@/public/instagram.svg";
import Link from "next/link";

export default function Question() {
  return (
    <>
      <div className="bg-white overflow-hidden ">
        <div className="w-full h-fit relative flex flex-col">
          <section className=" bg-helpblue relative h-72 ">
            <div className="absolute support-banner"></div>

            <div className="absolute w-full h-full">
              <div className="max-w-7xl mx-auto">
                <div className="text-right mt-20 px-6 ">
                  <Link href={"/"}>
                    <h2 className="font-medium lg:text-base lg:font-bold text-x text-white mb-8">
                      Go to myCircle Hompeage
                    </h2>
                  </Link>
                </div>
                <div className="px-6">
                  <h2 className="font-medium lg:text-base lg:font-bold text-x text-white mb-8">
                    Hello! how can we help you?
                  </h2>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto aria-label min-h-[calc(100vh-55rem)]">
            <div className="flex  h-fit w-full rounded-2xl mb-10 mt-[-4rem] lg:mt-0 top-52 flex-col lg:flex-row gap-8 justify-center">
              <div className="lg:w-1/3 max-w-[28rem] w-[90%]  p-8 relative lg:right-4 lg:left-1 lg:bottom-20 mx-auto shadow-2xl  bg-white">
                <h2 className="font-medium mb-5  text-homeblue text-lg">
                  Frequently Asked Question
                </h2>
                <p className="text-sm text-brandblack mb-4">
                  Get more information and quality answers to your questions,
                  including Circle groups management, Earning and circle shops
                </p>
                <button className="bg-homeblue px-3 py-2 text-white rounded-md  ">
                  {" "}
                  <Link href="/faq">See all FAQ</Link>{" "}
                </button>
              </div>
              <div className="lg:w-1/3 max-w-[28rem] w-[90%] p-8 relative  lg:right-4 lg:left-1 lg:bottom-20 mx-auto shadow-2xl bg-white">
                <h2 className="font-medium mb-5 text-homeblue text-lg">
                  Contact Us
                </h2>
                <p className="text-sm text-brandblack mb-4 mt-4">
                  Email us at{" "}
                  <span className="ml-3 text-sm font-bold">
                    info@myCircle.africa
                  </span>
                </p>
                <p className="text-sm text-brandblack mb-4 mt-4">
                  {" "}
                  Whatsapp{" "}
                  <span className="ml-3 font-bold text-sm ">
                    +2348038053478
                  </span>
                </p>
                <div className="flex flex-row">
                  <div className="flex">
                    <Link
                      className="flex mr-3"
                      target="_blank"
                      href="https://www.linkedin.com/company/mycircle-africa"
                    >
                      <LinkedIn />
                      <span className="text-sm font-semibold mx-1 text-homeblue">
                        myCircle
                      </span>
                    </Link>
                  </div>

                  <div className="flex">
                    <Link
                      className="flex mr-3"
                      target="_blank"
                      href="https://twitter.com/myCircleAfrica"
                    >
                      <Twitter />
                      <span className="text-sm  font-semibold text-homeblue mx-1">
                        myCircle
                      </span>
                    </Link>
                  </div>
                  <div className="flex">
                    <Link
                      className="flex mr-3"
                      target="_blank"
                      href="https://www.instagram.com/mycircleafrica/"
                    >
                      <Instagram />
                      <span className="text-sm  font-semibold text-homeblue ml-1">
                        myCircle
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" lg:w-1/3 max-w-[28rem] w-[90%] p-8 relative  lg:right-4 lg:left-1 lg:bottom-20 mx-auto shadow-2xl bg-white">
                <h2 className="font-medium mb-5 text-homeblue text-lg">
                  Live Support
                </h2>
                <p className="text-sm text-brandblack mb-5">
                  Our support team is ever ready to provide assistance to
                  whatever the problem you may be facing
                </p>
                <Link href="/contact">
                  <button className="bg-homeblue px-3 py-2 text-white rounded-md ">
                    Chat with us
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
