import { CheckIcon } from "@heroicons/react/solid";

const checkpoints = [
    "Clone the ‘Modern dApp Starterkit’ repository.",
    "Set up and start a local one click Etherum Blockchain using Ganache.",
    "Install all project dependencies using npm or yarn.",
];

const GetStarted = () => {
    return (
        <section className="bg-gray-200 block w-full">
            <div className="relative max-w-7xl mx-auto px-4">
                <main className="bg-white shadow-md p-4 py-10 rounded-xl -translate-y-16">
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
                    <hr />
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
        <div className="flex items-center space-x-2 mt-3">
            <div className="p-1 bg-blue-200 rounded-lg">
                <CheckIcon className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-gray-500 text-sm">{text}</span>
        </div>
    );
};

export default GetStarted;
