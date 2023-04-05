import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Andriod App Developer" key="desc" />
        <meta name="author" content="Nazmus Sadat Nuhin" />

        <title>Nazmus Sadat Nuhin | Andriod Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="mx-6">
        <div className="grid content-center min-h-screen">
          <div className="flex flex-wrap">
            <div className="inline-flex items-center justify-center">
              <h1 className="text-7xl mr-3 text-red-400 font-black">NAZMUS</h1>
            </div>
            <div className="inline-flex items-center justify-center">
              <h1 className="text-7xl mr-3  text-red-600 font-black">SADAT</h1>
            </div>
            <div className="inline-flex items-center justify-center">
              <h1 className="text-7xl mr-3  text-red-800 font-black">NUHIN</h1>
            </div>
          </div>
          <div className="text-3xl my-2">
            <h1 className="text-gray-500">Email: nuhin13@gmail.com</h1>
          </div>
          <div className=" my-8">
            <p className="text-gray-400 text-justify">
              I'm an experienced senior software engineer and Android app
              developer who always focuses on a high-quality user experience. In
              the last ten+ years, I worked for small and large clients, banks,
              and government agencies on critical projects and shipped apps for
              tens of millions of users. I know how to deal with large legacy
              systems and quickly and effectively set up and launch greenfield
              apps.
            </p>
          </div>
          <div className="inline-flex">
            <div className=" my-6">
              <a href="https://github.com" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  className="text-gray-600 hover:text-red-400 transition duration-300 ease-in-out"
                />
              </a>
            </div>
            <div className="mx-2 my-6">
              <a href="https://linkedin.com" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  className="text-gray-600 hover:text-red-400 transition duration-300 ease-in-out"
                />
              </a>
            </div>
            <div className="mx-2 my-6">
              <a href="https://facebook.com" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="3x"
                  className="text-gray-600 hover:text-red-400 transition duration-300 ease-in-out"
                />
              </a>
            </div>
            <div className="mx-2 my-6">
              <a href="https://twitter.com" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="3x"
                  className="text-gray-600 hover:text-red-400 transition duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
