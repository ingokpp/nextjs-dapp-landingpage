import {
    BanIcon,
    CodeIcon,
    ColorSwatchIcon,
    DocumentSearchIcon,
    SparklesIcon,
    TerminalIcon
} from "@heroicons/react/outline";

const features = [
    {
        name: "Tailwindcss",
        description:
            "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
        icon: SparklesIcon,
    },
    {
        name: "ESLint",
        description:
            "ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.",
        icon: CodeIcon,
    },
    {
        name: "Husky",
        description:
            "Husky improves your commits and more 🐶! You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.",
        icon: DocumentSearchIcon,
    },
    {
        name: "Prettier",
        description:
            "An opinionated code formatter that supports many languages and integrates with most editors.",
        icon: ColorSwatchIcon,
    },
    {
        name: "Commitizen",
        description:
            "When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.",
        icon: TerminalIcon,
    },
    {
        name: "Lint-staged",
        description:
            "Automatically run configurable linters against staged git files and don't let 💩 slip into your code base.",
        icon: BanIcon,
    },
];

const Features = () => (
    <div id="Features" className="bg-gray-200 pb-20">
        <div className="relative max-w-7xl mx-auto p-4">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-medium pl-6 mb-4">
                Features
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <div key={feature.name}>
                        <div className="flow-root bg-gray-50 shadowm-sm rounded-lg px-6 pb-4">
                            <div>
                                <div className="flex space-x-2 mt-8">
                                    <feature.icon
                                        className="h-6 w-6 text-gray-900"
                                        aria-hidden="true"
                                    />
                                    <h3 className="text-lg font-medium text-gray-900 tracking-tight">
                                        {feature.name}
                                    </h3>
                                </div>
                                <p className="mt-5 text-base text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Features;
