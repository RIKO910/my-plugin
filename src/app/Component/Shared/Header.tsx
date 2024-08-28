"use client";

import React from 'react';
import { Menu, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import nextheme from '../../../../public/rextheme.png'
import Image from "next/image";

const Header = () => {
    return (
        <Disclosure as="nav" className="bg-white ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Image src={nextheme} alt="nextheme" className=" w-44 mb-2 h-7" />
                        {/*<span className="ml-2 text-xl font-bold text-blue-600">NextTheme</span>*/}
                    </div>
                    <div className="flex justify-center flex-grow">
                        <div className="hidden sm:flex sm:space-x-8">
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-blue-600"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Plugins
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Docs
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Support
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Blog
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Menu as="div" className="relative">
                            <Menu.Button className="inline-flex items-center text-gray-700 hover:text-blue-600">
                                ENG
                                <svg
                                    className="ml-1 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Menu.Button>
                        </Menu>
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                            Login
                        </button>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                        </Disclosure.Button>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                    >
                        Home
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Plugins
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Docs
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Support
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Blog
                    </Disclosure.Button>
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Login
                    </button>
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default Header;
