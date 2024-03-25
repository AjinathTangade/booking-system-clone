"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
  PlayCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
const dropdownLink = [
  {
    name: "Book a Stay",
    description: "Get a better understanding og=f your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Spack direactly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Connect our Supprt Team",
    description: "Your custmers data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callToAction = [
  { name: "See Demo Booking", href: "", icon: PlayCircleIcon },
  { name: "Contact Support", href: "", icon: PhoneIcon },
];
function Header() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#013B94]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-white">
            <span className=" font-bold text-2xl text-white">Booking.com</span>
            {/* <img src="" alt="" /> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only"> Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg rinf-1 ring-gray-900/5">
                <div className="p-4">
                  {dropdownLink.map((dropLink, index) => (
                    <div
                      key={index}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <dropLink.icon className="h-6 w-6 text-[#013B94] group-hover:text-blue-600" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={dropLink.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {dropLink.name}
                          <span className="absolute isert-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]"></p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/50 bg-gray-50">
                  {callToAction.map((call, index) => (
                    <a
                      href={call.href}
                      key={index}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm fontsemiblod leading-6 text-[#01B94] hover:bg-gray-100"
                    >
                      <call.icon className="h-5 w-5 flex-none text-[#013B94]" />
                      {call.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
}

export default Header;
