import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  SquaresPlusIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  GlobeEuropeAfricaIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Logo from "@/public/logo.svg";
import Recycle from "@/public/recycle.svg";
import Air from "@/public/air.svg";

const individuals = [
  {
    name: "Save",
    description: "myCircle seamless saving that pays you to save",
    href: "/save",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Spend",
    description: "Pay with myCircle and earn discounts for auto savings",
    href: "/spend",
    icon: Air,
  },
  {
    name: "Socialize",
    description: "Have fun and build accountable network",
    href: "/socialize",
    icon: Air,
  },
  {
    name: "Earn",
    description: "Earn to save on mycircle, even if you under earn.",
    href: "/earn",
    icon: Recycle,
  },
];
const businesses = [
  {
    name: "Business",
    description: "Improve business sales, collect payment with myCircle",
    href: "/business",
    icon: Air,
  }
];

const influencers = [
  {
    name: "Influencers",
    description: "Connect with your fans while building a recurring income ",
    href: "/Influencers",
    icon: PlusIcon,
  }
];


const company = [
  {
    name: "About us",
    description:
      "Get to know about myCircle, vision and mission and why we exist",
    href: "/about",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Blog",
    description: "Visit our blogs and zone Join the myCircle community",
    href: "https://mycircleafrica.medium.com/",
    icon: Recycle,
    target: "_blank"
  },
  {
    name: "Learn",
    description:
      "Get more knowledge on how to build wealth and be financially literate. ",
    href: "#",
    icon: Air,
    target: "_blank"
  },
  {
    name: "Careers",
    description: "Join our wonderful team Visit our recruitment page",
    href: "https://www.linkedin.com/company/mycircle-africa/jobs/",
    icon: PlusIcon,
    target: "_blank"
  },
  {
    name: "Team",
    description: "Meet and know the team and face  behind myCircle.",
    href: "/about#team",
    icon: PlusIcon,
  },
  {
    name: "Contact Us",
    description:
      "Want to peak with us, available 24/5 on calls, emails and all socials.",
    href: "/contact",
    icon: PlusIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  function toggleBlur() {
    setIsBlurred((prev) => !prev);
  }

  return (
    <header className="bg-white border-b border-b-500">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Circle</span>
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-10">
        <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-900 focus:border-0">
              For Individuals
            </Popover.Button>

            {isBlurred && (
              <div className="fixed inset-0 bg-black opacity-50 z-40 backdrop-blur-md" />
            )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
                  {individuals.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 rounded-lg p-4 py-5 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-iconblue group-hover:bg-white">
                        <item.icon
                          className="h-5 w-5 text-icon group-hover:text-homeblue"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-homeblue text-md"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mb-1 text-gray-600 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-900">
              For Businesses
            </Popover.Button>

            {isBlurred && (
              <div className="fixed inset-0 bg-black opacity-50 z-40 backdrop-blur-md" />
            )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
                  {businesses.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 rounded-lg p-4 py-5 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-iconblue group-hover:bg-white">
                        <item.icon
                          className="h-5 w-5 text-icon group-hover:text-homeblue"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-homeblue text-md"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mb-1 text-gray-600 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-900">
              For Influencers
            </Popover.Button>

            {isBlurred && (
              <div className="fixed inset-0 bg-black opacity-50 z-40 backdrop-blur-md" />
            )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
                  {influencers.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 rounded-lg p-4 py-5 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-iconblue group-hover:bg-white">
                        <item.icon
                          className="h-5 w-5 text-icon group-hover:text-homeblue"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-homeblue text-md"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mb-1 text-gray-600 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-900">
              Company
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
                  {company.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 rounded-lg p-4 py-5 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-iconblue group-hover:bg-white">
                        <item.icon
                          className="h-5 w-5 text-icon group-hover:text-homeblue"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-homeblue text-md"
                          target={item.target || ""}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mb-1 text-gray-600 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/faq"
            className="text-sm leading-6 text-gray-900"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-sm leading-6 text-gray-900"
          >
            Contact Us
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md border border-transparent bg-homeblue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Get Started
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Circle</span>
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        For Individuals
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...individuals].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        For Businesses
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...businesses].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        For Influencers
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...influencers].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Company
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...company].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
