import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div
            style={{
                backgroundColor: "white", // bg-white
                zIndex: "50", // z-50
                position: "sticky",
                top: "0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
            }}
        >
            <header
                style={{
                    color: "#4B5563", // text-gray-600
                    fontFamily: "sans-serif", // default body font
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "0.5rem 1rem", // p-2
                        justifyContent: "space-between",
                        alignItems: "center",
                        maxWidth: "1200px", 
                        margin: "0 auto", 
                    }}
                >
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1.25rem", // text-xl
                            fontWeight: "700", // font-bold
                            color: "#1F2937", // text-gray-900
                        }}
                    >
                        <span
                            style={{
                                marginLeft: "0.5rem", // ml-2
                            }}
                        >
                            MY Portfolio
                        </span>
                    </a>

                    <nav
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem", // space-x-6
                        }}
                    >
                        <Link href="/">
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "#6B7280", // text-gray-600
                                    transition: "color 0.3s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.color = "#1F2937"; // hover:text-gray-900
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = "#6B7280"; // back to default text-gray-600
                                }}
                            >
                                Home
                            </a>
                        </Link>
                        <Link href="#about">
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "#3B82F6", // text-blue-600
                                    transition: "color 0.3s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.color = "#1E40AF"; // hover:text-blue-700
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = "#3B82F6"; // back to default text-blue-600
                                }}
                            >
                                About
                            </a>
                        </Link>
                        <Link href="#contact">
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "#3B82F6", // text-blue-600
                                    transition: "color 0.3s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.color = "#1E40AF"; 
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = "#3B82F6"; 
                                }}
                            >
                                Contact
                            </a>
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
