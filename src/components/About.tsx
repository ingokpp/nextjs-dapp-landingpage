const AboutSection = () => {
    return (
        <section className="bg-gray-900 pb-32 sm:pt-5">
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
                                Lorem ipsum dolor sit amet consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam.
                            </p>
                            <p className="mt-3 text-sm text-gray-300">
                                consetetur sadipscing elitr, sed nonumy eirmod
                                tempor invidunt ut labore et dolore magn
                            </p>
                        </div>
                        <div className="relative bg-white shadow-sm flex-1 rounded-xl bg-opacity-10 border border-opacity-50 px-4 py-4 text-white glow">
                            <span className="font-medium text-lg text-gray-100">
                                React
                            </span>
                            <p className="mt-4 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam.
                            </p>
                            <p className="mt-3 text-sm text-gray-300">
                                consetetur sadipscing elitr, sed nonumy eirmod
                                tempor invidunt ut labore et dolore magn
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
                                Lorem ipsum dolor sit amet consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam.
                            </p>
                            <p className="mt-3 text-sm text-gray-300">
                                consetetur sadipscing elitr, sed nonumy eirmod
                                tempor invidunt ut labore et dolore magn
                            </p>
                        </div>
                        <div className="relative bg-white shadow-sm flex-1 rounded-xl bg-opacity-10 border border-opacity-50 px-4 py-4 text-white glow">
                            <span className="font-medium text-lg text-gray-100">
                                Typescript
                            </span>
                            <p className="mt-4 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam.
                            </p>
                            <p className="mt-3 text-sm text-gray-300">
                                consetetur sadipscing elitr, sed nonumy eirmod
                                tempor invidunt ut labore et dolore magn
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
