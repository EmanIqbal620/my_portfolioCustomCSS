"use client"; 

import React from "react";
import Image from "next/image";
import myImage from "../../../public/image.webp"; 

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg md:w-1/2 w-4/6 mb-10 md:mb-0"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={myImage}
              width={250}  
              height={300} 
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            style={{
              color: "#4a5568", 
              fontFamily: "Arial, sans-serif", 
              textAlign: "left", 
              padding: "0 2rem", 
            }}
          >
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              style={{ fontWeight: "700" }} 
            >
              About Me
              <br className="hidden lg:inline-block" />
            </h1>
            <p
              className="mb-5 leading-relaxed"
              style={{
                fontSize: "1.1rem", 
                lineHeight: "1.8", 
              }}
            >
              I’m Eman Iqbal, a passionate web developer dedicated to turning ideas into seamless digital experiences. I specialize in modern responsive designs and scalable solutions.
            </p>
            <div className="flex justify-center">
              <button
                style={{
                  backgroundColor: "#3b82f6", 
                  padding: "0.5rem 1.5rem", 
                  border: "none",
                  borderRadius: "0.375rem",
                  color: "white", // Text color
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLButtonElement; // Cast to HTMLButtonElement
                  target.style.backgroundColor = "#2563eb"; // Change on hover
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLButtonElement; // Cast to HTMLButtonElement
                  target.style.backgroundColor = "#3b82f6"; // Reset on mouse out
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
