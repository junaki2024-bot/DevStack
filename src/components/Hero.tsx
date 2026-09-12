import React from 'react';
import hero from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white flex items-center justify-between">

            {/* Left Side */}
            <div className="w-1/2">

                <h1 className="text-2xl font-bold m-4 text-black">
                    Build Your Stack
                </h1>

                <h1 className="text-1xl font-bold m-4">
                    <span className="text-pink-500">Development</span>
                    <span className="text-purple-400"> Stack</span>
                </h1>

                <p className="text-gray-500 m-4">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                {/* Buttons */}
                <div className="m-4 flex gap-4">
                    <button className="text-white bg-amber-500 px-5 py-2 rounded-lg">
                        Explore Technologies
                    </button>

                    <button className="text-black border border-gray-400 px-5 py-2 rounded-lg">
                        Learn More
                    </button>
                </div>

            </div>

            {/* Right Side */}
            <div className="w-1/2 flex justify-center">
                <img
                    src={hero}
                    alt="Development Stack"
                    className="w-full max-w-md"
                />
            </div>

        </section>
    );
};

export default Hero;