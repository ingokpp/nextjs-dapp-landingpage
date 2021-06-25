const AboutSection = () => {
    return (
        <section className="bg-gray-700 pb-32 sm:pt-5">
            <div className="sm:grid sm:grid-cols-2 sm:gap-5 relative max-w-7xl mx-auto px-4">
                <div>
                    <span className="font-bold text-white text-sm block mb-3 pt-4 sm:pt-0 text-center sm:text-left">
                        &mdash; FRAMEWORKS{" "}
                        <span className="sm:hidden">&mdash;</span>
                    </span>
                    <div className="sm:flex sm:space-x-5 space-y-4 sm:space-y-0">
                        <div className="relative bg-white shadow-sm flex-1 rounded-xl bg-opacity-10 border border-opacity-50 px-4 py-4 text-white glow">
                            <span className="font-medium text-lg text-gray-100">
                                Truffle
                            </span>
                            <p className="mt-4 text-sm text-gray-300">
                                Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
                            </p>
                            <p className="mt-3 text-sm text-gray-300">
                                Write simple, manageable deployment scripts that acknowledge your application will change over time.
                            </p>
                        </div>
                        <div className="relative bg-white shadow-sm flex-1 rounded-xl bg-opacity-10 border border-opacity-50 px-4 py-4 text-white glow">
                            <span className="font-medium text-lg text-gray-100">
                                React
                            </span>
                            <p className="mt-4 text-sm text-gray-300">
                                React is a JavaScript library for building user interfaces.
                            </p>
                            <p className="mt-3 text-sm text-gray-300">
                                Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="font-bold text-white text-sm block mb-3 mt-4 sm:mt-0 text-center sm:text-left">
                        &mdash; UNDER THE HOOD{" "}
                        <span className="sm:hidden">&mdash;</span>
                    </span>
                    <div className="sm:flex sm:space-x-5 space-y-4 sm:space-y-0">
                        <div className="relative bg-white shadow-sm flex-1 rounded-xl bg-opacity-10 border border-opacity-50 px-4 py-4 text-white glow">
                            <span className="font-medium text-lg text-gray-100">
                                Solidity
                            </span>
                            <p className="mt-4 text-sm text-gray-300">
                                Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state. With it you can create contracts for uses such as voting and crowdfunding.
                            </p>
                        </div>
                        <div className="relative bg-white shadow-sm flex-1 rounded-xl bg-opacity-10 border border-opacity-50 px-4 py-4 text-white glow">
                            <span className="font-medium text-lg text-gray-100">
                                Typescript
                            </span>
                            <p className="mt-4 text-sm text-gray-300">
                                Typed JavaScript at Any Scale.<br/>By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.
                            </p>
                            <p className="mt-3 text-sm text-gray-300">
                                Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
