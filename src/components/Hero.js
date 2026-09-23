import React from 'react';
import heroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "I'm a Full-stack Developer",
    social: {
      twitter: 'https://x.com/Kathirkarikalan',
      GitHub : '',
      linkedIn: 'https://www.linkedin.com/in/kathirvel-m-300968316/',
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-10 py-32 bg-primary justify-center items-center">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-white font-bold text-5xl md:text-6xl font-hero-font leading-tight">
          Hi, <br /> I'm Kathirvel<span className="text-white"> M</span>
        </h1>
        <p className="mt-6 text-lg text-white md:text-xl">{config.subtitle}</p>
        <div className="mt-8 flex justify-center md:justify-start space-x-6">
          <a 
            href={config.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <AiOutlineTwitter size={40} />
          </a>
          <a 
            href={config.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-blue-600 transition-colors duration-300"
          >
            <AiOutlineFacebook size={40} />
          </a>
          <a 
            href={config.social.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-blue-700 transition-colors duration-300"
          >
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
        <img
          className="rounded-lg shadow-lg"
          src={heroImg}
          alt="Illustration of a developer working on a laptop"
        />
      </div>
    </section>
  );
}
