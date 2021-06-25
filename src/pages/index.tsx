/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import AboutSection from "../components/About";
import Contribute from "../components/Contribute";
import Features from "../components/Features";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>dApp Starterkit</title>
                <meta
                    name="description"
                    content="Truffle and React combined with everything you need to start building decentralized apps."
                />

                <meta property="og:title" content="dApp-Starterkit" />
                <meta property="og:site_name" content="dApp-Starterkit" />
                <meta property="og:url" content="https://modern-dapp-landingpage.vercel.app/" />
                <meta property="og:description" content="Truffle and React combined with everything you need to start building decentralized apps." />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="/thumbnail_v1.jpg" />
                
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>

            <Header />
            <AboutSection />
            <GetStarted />
            <Features />
            <Contribute />
        </div>
    );
}
