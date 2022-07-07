import React from "react";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Tom.
                        {/* <br className="hidden lg:inline-block" />I love to build amazing
                        apps. */}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a newly graduated Computer Engineer from Dublin, Ireland! On this site I have included my contact details
                        and some examples of previous work over the last couple of years &#127774;.
                    </p>
                    <div className="flex justify-center">
                        {/* <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a> */}
                        <a
                            href="#projects"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Projects
                        </a>
                        <a href="https://github.com/tmulligan98" style={{ marginLeft: '1.5em' }}>
                            <AiFillGithub size={40} />
                        </a>
                        <a href="mailto:mulligto@tcd.ie" style={{ marginLeft: '1.5em' }}>
                            <AiOutlineMail size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/tom-mulligan-1aa440169" style={{ marginLeft: '1.5em' }}>
                            <AiFillLinkedin size={40} />
                        </a>

                    </div>
                </div>

                <div className="md:w-1/5 w-2/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="hero"
                        src={require("./me.jpg")}
                    />
                </div>



            </div>
        </section >
    );

}