import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const checkpoints = [
    "Clone the ‘Modern dApp Starterkit’ repository.",
    "Set up and start a local one click Etherum Blockchain using Ganache.",
    "Install all project dependencies using npm or yarn.",
];

const GetStarted = () => {
    return (
        <section className="bg-gray-200 block w-full">
            <div className="relative max-w-7xl mx-auto px-4">
                <main className="bg-white shadow-md p-6 py-10 rounded-xl -translate-y-16">
                    <h2 className="text-gray-900 text-2xl md:text-3xl font-medium">
                        Get Started
                    </h2>
                    <p className="text-gray-500 mt-5 mb-10">
                        Lorem ipsum dolor sit amet, consetetur elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <strong className="text-gray-500 font-medium">
                        Follow these simple steps to get the project up and
                        running on your device:
                    </strong>
                    <hr className="mb-4" />
                    {checkpoints.map((checkpoint, index) => (
                        <CheckPoint key={index} text={checkpoint} />
                    ))}
                </main>
            </div>
        </section>
    );
};

interface CheckPointProps {
    text: string;
}

const CheckPoint = (props: CheckPointProps) => {
    const { text } = props;
    return (
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="transition flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{text}</span>
                        <ChevronUpIcon
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-blue-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        No.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default GetStarted;
