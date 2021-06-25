/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import { AcademicCapIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

const navigation = [
    { name: "Get Started", href: "#GetStarted" },
    { name: "Features", href: "#Features" },
    { name: "Contribute", href: "#Contribute" },
];

const NavigationBar = () => (
    <Popover>
        {({ open }) => (
            <>
                <nav
                    className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <span className="sr-only">dApp-Starterkit</span>
                                <h1 className="text-2xl text-white font-extrabold italic">dApp-Starterkit</h1>
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <MenuIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-10 md:flex md:ml-10">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-medium text-white hover:text-gray-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>

                <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        static
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
                    >
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl text-gray-800 font-extrabold italic">dApp-Starterkit</h1>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <a
                                href="https://github.com/ingokpp/modern-dapp-starterkit"
                                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
        )}
    </Popover>
);

const Header = () => {
    return (
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-600 overflow-hidden">
            <div
                className="hidden lg:block absolute inset-0 opacity-10"
                aria-hidden="true"
            >
                <svg
                    className="absolute right-full transform translate-y-1/4 translate-x-3/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                >
                    <defs>
                        <pattern
                            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={784}
                        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                    />
                </svg>
                <svg
                    className="absolute left-full transform md:-translate-y-2/4 -translate-x-3/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                >
                    <defs>
                        <pattern
                            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={784}
                        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                    />
                </svg>
            </div>
            <div className="relative pt-6">
                <NavigationBar />
                <main className="relative max-w-7xl mx-auto px-4 pt-7 pb7 sm:pt-14 sm:pb-14 space-y-5 mb-16">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl z-0">
                        <span className="block text-blue-200">
                            Build awesome
                        </span>{" "}
                        <span className="text-white block">
                            Blockchain dApps.
                        </span>
                    </h1>
                    <p className="text-base text-gray-200 sm:text-xl lg:text-lg xl:text-xl md:w-3/4 lg:w-2/4">
                        Truffle and React combined with everything you need to start building decentralized apps.
                    </p>
                    <div className="flex items-center space-x-2">
                        <a className="button" href="#GetStarted" role="button">
                            <AcademicCapIcon className="w-5 h-5 mr-1" />
                            Get Started
                        </a>
                        <a className="button-outline" href="https://github.com/ingokpp/modern-dapp-starterkit" target="_blank" rel="noreferrer" role="button">
                            <svg
                                className="h-5 w-5 mr-1"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7.5 0.672684C3.6325 0.672684 0.5 3.80518 0.5 7.67268C0.5 10.7702 2.50375 13.3864 5.28625 14.3139C5.63625 14.3752 5.7675 14.1652 5.7675 13.9814C5.7675 13.8152 5.75875 13.2639 5.75875 12.6777C4 13.0014 3.545 12.2489 3.405 11.8552C3.32625 11.6539 2.985 11.0327 2.6875 10.8664C2.4425 10.7352 2.0925 10.4114 2.67875 10.4027C3.23 10.3939 3.62375 10.9102 3.755 11.1202C4.385 12.1789 5.39125 11.8814 5.79375 11.6977C5.855 11.2427 6.03875 10.9364 6.24 10.7614C4.6825 10.5864 3.055 9.98268 3.055 7.30518C3.055 6.54393 3.32625 5.91393 3.7725 5.42393C3.7025 5.24893 3.4575 4.53143 3.8425 3.56893C3.8425 3.56893 4.42875 3.38518 5.7675 4.28643C6.3275 4.12893 6.9225 4.05018 7.5175 4.05018C8.1125 4.05018 8.7075 4.12893 9.2675 4.28643C10.6062 3.37643 11.1925 3.56893 11.1925 3.56893C11.5775 4.53143 11.3325 5.24893 11.2625 5.42393C11.7087 5.91393 11.98 6.53518 11.98 7.30518C11.98 9.99143 10.3438 10.5864 8.78625 10.7614C9.04 10.9802 9.25875 11.4002 9.25875 12.0564C9.25875 12.9927 9.25 13.7452 9.25 13.9814C9.25 14.1652 9.38125 14.3839 9.73125 14.3139C11.1209 13.8448 12.3284 12.9517 13.1839 11.7604C14.0393 10.569 14.4996 9.13936 14.5 7.67268C14.5 3.80518 11.3675 0.672684 7.5 0.672684Z"
                                />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </main>
                <HeaderWave />
            </div>
        </div>
    );
};
const HeaderWave = () => (
    <svg
        className="text-gray-700"
        viewBox="0 0 1440 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0 90.9999V50.9999C114.746 26.6554 229.493 2.3109 329 0.999893C428.507 -0.311112 512.775 21.4114 595 31.9999C677.225 42.5884 757.407 42.043 855 31.9999C952.593 21.9568 1067.6 2.41616 1168 3.99989C1268.4 5.58362 1354.2 28.2918 1440 50.9999V90.9999H0Z"
            fill="currentColor"
        />
    </svg>
);

export default Header;
