"use client";

import Image from 'next/image';
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftCircleIcon,
  ArrowsRightLeftIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  ScaleIcon,
  Squares2X2Icon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { InboxStackIcon } from "@heroicons/react/20/solid";

const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: Squares2X2Icon,
    current: false,
    isAppInitialized: false,
  },
  {
    name: "Organization Profile",
    href: "#",
    icon: SunIcon,
    current: true,
    isAppInitialized: false,
  },
  {
    name: "Account Statements",
    href: "#",
    icon: ArrowsRightLeftIcon,
    current: false,
    isAppInitialized: false,
  },
  {
    name: "Grants",
    href: "#",
    icon: ScaleIcon,
    current: false,
    isAppInitialized: false,
  },
  {
    name: "Sponsors",
    href: "#",
    icon: CircleStackIcon,
    current: false,
    isAppInitialized: false,
  },
  {
    name: "Reports",
    href: "#",
    icon: ClipboardDocumentCheckIcon,
    current: false,
    isAppInitialized: false,
  },
  {
    name: "Action History",
    href: "#",
    icon: InboxStackIcon,
    current: false,
    isAppInitialized: false,
  },
];

function classNames({ classes = [] }: { classes?: any[] } = {}) {
  return classes.filter(Boolean).join(" ");
}

export default async function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 py-6 pb-4 ring-1 ring-white/10">
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames({
                                  classes: [
                                    item.current
                                      ? "bg-teal-950 text-lime-500"
                                      : item.isAppInitialized
                                        ? "text-slate-50 hover:text-white hover:bg-gray-800"
                                        : "text-gray-500 hover:text-white hover:bg-gray-800",

                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                                  ],
                                })}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <ArrowLeftCircleIcon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                            />
                          Close Menu
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 py-6 pb-4">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames({
                          classes: [
                            item.current
                              ? "bg-teal-950 text-lime-500"
                              : item.isAppInitialized
                                ? "text-slate-50 hover:text-white hover:bg-gray-800"
                                : "text-gray-500 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          ],
                        })}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <ArrowLeftCircleIcon
                    className="h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  Close Menu
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
