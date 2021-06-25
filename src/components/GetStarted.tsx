import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ReactElement } from "react";

const checkpoints = [
    {
        headline: "Clone the ‘Modern dApp Starterkit’ repository.",
        text: <span>Use the following command to clone the repository: <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">git clone git@github.com:ingokpp/modern-dapp-starterkit.git</code></span>
    },
    {
        headline: "Set up and start a local one click Ethereum blockchain using Ganache.",
        text: <span>Download and install the <a className="text-blue-700 font-medium opacity-75 hover:opacity-100 transition" href="https://www.trufflesuite.com/ganache" target="_blank" rel="noreferrer">the latest version of Ganache</a>.<br/>Start Ganache and click on the predefined Ethereum workspace. Thats it ✨ Now you have your own local Ethereum blockchain up and running.</span>
    },
    {
        headline: "Install all project dependencies using npm or yarn.",
        text: <span>Go to the root folder of your cloned repository and run the following command <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">npm install</code> or <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">yarn install</code><br/> Start the react frontend using <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">npm start</code> or <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">yarn start</code></span>
    },
]

const GetStarted = () => {
    return (
        <section className="bg-gray-200 block w-full">
            <div className="relative max-w-7xl mx-auto px-4">
                <main className="bg-white shadow-sm p-6 py-10 rounded-xl -translate-y-16">
                    <h2 id="GetStarted" className="text-gray-900 text-2xl md:text-3xl font-medium">
                        Get Started
                    </h2>
                    <strong className="text-gray-500 font-medium mt-3 block">
                        Follow these simple steps to get the project up and
                        running on your device:
                    </strong>
                    <hr className="mb-4" />
                    {checkpoints.map((checkpoint, index) => (
                        <CheckPoint key={index} headline={checkpoint.headline} text={checkpoint.text} />
                    ))}
                </main>
            </div>
        </section>
    );
};

interface CheckPointProps {
    headline: string;
    text: ReactElement
}

const CheckPoint = (props: CheckPointProps) => {
    const { headline, text } = props;
    return (
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="transition flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{headline}</span>
                        <ChevronUpIcon
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-blue-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {text}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default GetStarted;
