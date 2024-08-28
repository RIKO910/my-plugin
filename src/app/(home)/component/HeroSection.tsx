import React from 'react';
import group from "@/../public/Group.png"
import frame from "@/../public/Frame 27.png"
import Image from "next/image";
const HeroSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
                {/* Left Column - Text Content */}
                <div className="lg:w-1/2">
                    <Image src={frame} alt="Frame 1" className="mb-6" />
                    {/*<h2 className="text-xl text-blue-500 font-medium mb-2">What we do</h2>*/}
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                        We Make Amazing <span className="text-blue-600">WordPress Plugins.</span>
                    </h1>
                    <p className="text-gray-500 text-lg mb-6">
                        Experience the transformative impact of our cutting-edge tools and customized solutions designed to elevate your business.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-blue-600 text-white px-6 py-3 text-lg font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                        Explore Plugins &rarr;
                    </a>
                </div>

                {/* Right Column - Image/Illustration */}
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <Image
                        src={group}
                        alt="Illustration"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
