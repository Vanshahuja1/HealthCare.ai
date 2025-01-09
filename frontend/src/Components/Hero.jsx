import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export const Hero = ({ onClick }) => {
    return (
        <div className="h-[70vh] md:h-[100vh] w-full">
            {/* Background Image */}
            <div className="w-full h-[70vh] md:h-[100vh] absolute -z-10">
                <img
                    src="https://fptsoftware.com/-/media/project/fpt-software/fso/blog/hp-content/2/ai-in-healthcare-a-stakeholder-perspective.jpg?h=772&iar=0&w=1251&modified=20231014085038&hash=8424FB00497702F0A83F6E73FABF0DC7"
                    alt="IntroImg"
                    className="w-full h-full bg-cover bg-center object-cover brightness-50"
                />
            </div>

            {/* Content */}
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-[90%]">
                    {/* Headline */}
                    <h1 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug md:leading-tight tracking-wide drop-shadow-md">
                        Empowering Healthcare
                        <br />
                        <span className="text-[#00d4ff]">AI-Driven Solutions</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-white text-base sm:text-lg md:text-xl mt-4 md:mt-6 leading-relaxed tracking-wide">
                        Discover the future of healthcare with cutting-edge artificial intelligence.
                        <br />
                        From diagnostics to personalized care, we're revolutionizing how you manage
                        <br />
                        your health and well-being.
                    </p>

                    {/* Call to Action Button */}
                    <div
                        className="buttons mt-10 md:mt-16 flex justify-center"
                        onClick={onClick}
                    >
                        <div
                            className="p-3 md:p-4 cursor-pointer hover:bg-[#00d4ff99] border-solid border-2 border-white text-white flex items-center gap-2 md:gap-3 rounded-lg hover:scale-105 transform transition-transform duration-300"
                        >
                            Explore Technologies
                            <BsArrowRight className="text-xl md:text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
