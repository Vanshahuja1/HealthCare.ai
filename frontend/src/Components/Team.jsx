import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'; // Icons for social links

export const Team = () => {
    return (
        <>
            {/* Team Section */}
            <section className="text-gray-600 h-screen body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                        Meet Our Team
                    </h1>
                    <div className=" flex-wrap -m-4 items-center justify-center">
                        {/* Team Member: You */}
                        <div className="p-4 lg:w-1/2 md:w-2/3">
                            <div className="h-full flex flex-col items-center text-center">
                                <img
                                    alt="Vansh Ahuja"
                                    className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4 border-4 border-indigo-500"
                                    src="https://www.shutterstock.com/shutterstock/photos/2302364083/display_1500/stock-photo-cute-boy-avatar-cartoon-character-2302364083.jpg" // Replace with your image URL
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-extrabold text-lg text-gray-900">
                                        Vansh Ahuja
                                    </h2>
                                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                                    <p className="mb-4">
                                        Passionate about building intuitive and user-friendly web
                                        applications using modern technologies. Experienced in React and Node.js.
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href="https://github.com/your-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-900"
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/your-linkedin"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <FaLinkedin size={24} />
                                        </a>
                                        <a
                                            href="https://your-portfolio.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <FaGlobe size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Member: Pooja Devrari */}
                        <div className="p-4 lg:w-1/2 md:w-2/3">
                            <div className="h-full flex flex-col items-center text-center">
                                <img
                                    alt="Pooja Devrari"
                                    className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center mb-4 border-4 border-indigo-500"
                                    src="https://thumbs.dreamstime.com/b/d-avatar-illustration-smiling-happy-girl-cartoon-close-up-portrait-standing-isolated-transparent-png-background-generative-272798686.jpg" // Replace with Pooja's image URL
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-extrabold text-lg text-gray-900">
                                        Pooja Devrari
                                    </h2>
                                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                                    <p className="mb-4">
                                        Skilled in creating dynamic, responsive websites with a focus on
                                        excellent user experiences. Proficient in HTML, CSS, and JavaScript.
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href="https://github.com/pooja-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-900"
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/pooja-linkedin"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <FaLinkedin size={24} />
                                        </a>
                                        <a
                                            href="https://pooja-portfolio.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <FaGlobe size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
