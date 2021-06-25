/* eslint-disable @next/next/no-img-element */
const Contribute = () => {
    return (
        <div className="relative bg-gray-100 py-16 sm:py-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative sm:py-16 lg:py-0">
                    <div
                        aria-hidden="true"
                        className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                    >
                        <div className="absolute inset-y-0 right-1/2 w-full bg-blue-50 shadow-sm rounded-r-3xl lg:right-72" />
                        <svg
                            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                            width={404}
                            height={392}
                            fill="none"
                            viewBox="0 0 404 392"
                        >
                            <defs>
                                <pattern
                                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                                height={392}
                                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                            />
                        </svg>
                    </div>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src="/wow.jpg"
                                alt="Hi, i am Ingo."
                            />
                            <div className="absolute inset-0  mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-90" />
                            <div className="relative px-8">
                                <h2 className="text-2xl sm:text-3xl font-medium text-white">
                                    About me
                                </h2>
                                <blockquote className="mt-8">
                                    <div className="relative text-lg font-medium text-white md:flex-grow">
                                        <p className="relative">
                                            Hi 🤚, my name is Ingo. I am a passionated software developer trying to contribute helpful stuff to the blockchain community. The goal of this starterkit is to reduce the pain that comes along setting up a professional dApp-project. I love to connect with new people in the crypto space.
                                        </p>
                                    </div>

                                    <footer className="mt-4">
                                        <a
                                            href="https://twitter.com/IngoKpp"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base font-semibold text-blue-200"
                                        >
                                            @ingokpp
                                        </a>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Contribute" className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 id="GetStarted" className="text-gray-900 text-2xl md:text-3xl font-medium">
                            Learn how to contribute
                        </h2>
                        <div className="mt-6 text-gray-500 space-y-6">
                            <p className="text-lg">
                                I am very thankfull for all kind of contributions this project gets. Lets do something good for the crypto community. Feel free to develop new features, fix bugs or just commit an idea. Everybody is invited to make this staterkit better.
                            </p>
                            <p className="text-lg">
                                The project should run on Windows/MacOs/Linux. If you have any trouble on your system - let me know. <br/><br/> Do the following to get started:
                            </p>
                            <p className="text-base leading-7">
                                <ul>
                                    <li>1. Fork the repository</li>
                                    <li>2. Create your branch: <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">git checkout -b my-feature</code></li>
                                    <li>3. Commit your changes (pls use commitizen): <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">git cz</code></li>
                                    <li>4. Push to the branch: <code className="bg-blue-50 shadow-sm p-1 rounded-lg px-2 text-sm">git push origin my-feature.</code></li>
                                </ul>
                            </p>
                            <p className="text-base leading-7">
                                After your pull request is merged, you can safely delete your branch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contribute;
