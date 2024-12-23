'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div>
            <section
                style={{
                    backgroundImage: "url('/bg best.jpg')", 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundColor: "#fca5a5", 
                    color: "#4a5568", 
                    height: "100vh", // h-screen
                    width: "100%", // w-full
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row", // Flex row for side-by-side
                        alignItems: "center", // Align vertically in center
                        justifyContent: "space-between", // Space out text and image
                        margin: "0 auto",
                        padding: "6rem 1.25rem", // px-5 py-24
                        maxWidth: "1200px",
                    }}
                >
                    {/* Text section */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end", // Align text to the right
                            textAlign: "right", // Ensures text is aligned to the right
                            marginBottom: "4rem", // mb-16
                            maxWidth: "50%", // Limit text width for balance
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "3rem", // text-3xl
                                fontWeight: "500", // font-medium
                                color: "#1a202c", // text-gray-900
                                marginBottom: "1rem", // mb-4
                            }}
                        >
                            I am
                            <br />
                            <Typewriter
                                options={{
                                    strings: ['Web developer', 'UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div
                            style={{
                                width: "100px",
                                height: "2px",
                                backgroundColor: "#3b82f6", // bg-blue-700
                                marginBottom: "1rem", // mb-4
                            }}
                        ></div>
                        <p
                            style={{
                                marginBottom: "2rem", // mb-8
                                lineHeight: "1.75", // leading-relaxed
                                color: "#6b7280", // text-gray-500
                                maxWidth: "600px", // max width for better text alignment
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        >
                            Hi, I’m Eman Iqbal, a passionate web developer from Karachi, Pakistan. Currently, I’m focused on honing my skills to become a successful full-stack developer. Creativity drives me, and I enjoy building unique projects, especially in the e-commerce space. My goal is to push the boundaries of what I can create while delivering high-quality and innovative solutions.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Link href={"#Contact"}>
                                <button
                                    style={{
                                        backgroundColor: "#4f46e5", // bg-indigo-500
                                        color: "#ffffff", // text-white
                                        border: "0",
                                        padding: "0.5rem 1.5rem", // py-2 px-6
                                        fontSize: "1.125rem", // text-lg
                                        borderRadius: "0.375rem", // rounded
                                        transition: "background-color 0.3s ease",
                                    }}
                                    onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        const target = e.target as HTMLButtonElement;
                                        target.style.backgroundColor = "#4338ca"; // hover:bg-indigo-600
                                    }}
                                    onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        const target = e.target as HTMLButtonElement;
                                        target.style.backgroundColor = "#4f46e5"; // bg-indigo-500
                                    }}
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image section */}
                    <div
                        style={{
                            maxWidth: "300px", // Set max width for image
                            width: "100%", // Make the width 100% but limit it to 300px
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            className="object-cover object-center rounded-full border-4 border-gray-500"
                            alt="hero"
                            width={300} // Image width 300px
                            height={300} // Image height 300px
                            src="/image.webp" // Custom image URL
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
