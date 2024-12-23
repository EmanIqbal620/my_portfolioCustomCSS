import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <div>
            <footer
                style={{
                    backgroundColor: "#edf2f7", // bg-gray-200
                    color: "#4a5568", // text-gray-600
                    padding: "2rem 0",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "0 auto",
                        maxWidth: "1200px",
                        padding: "0 1.25rem", // px-5
                        flexWrap: "wrap", 
                    }}
                >
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#1a202c", // text-gray-900
                            fontWeight: "500", // font-medium
                        }}
                        href="#"
                    >
                        <div
                            style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                backgroundColor: "#3b82f6", // bg-blue-500
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    backgroundColor: "#ffffff", // bg-white
                                    borderRadius: "50%",
                                }}
                            ></div>
                        </div>
                        <span
                            style={{
                                marginLeft: "0.75rem",
                                fontSize: "1.25rem", // text-xl
                            }}
                        >
                            Eman Iqbal
                        </span>
                    </a>
                    <p
                        style={{
                            fontSize: "0.875rem", // text-sm
                            color: "#6b7280", // text-gray-500
                            borderLeft: "2px solid #e2e8f0", 
                            paddingLeft: "1rem", // sm:pl-4
                            marginTop: "1rem", // sm:mt-0
                        }}
                    >
                        © 2024 —
                    </p>
                    <span
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "1rem", // sm:mt-0
                        }}
                    >
                        <a
                            style={{
                                color: "#6b7280", // text-gray-500
                                marginRight: "1rem", // ml-3
                            }}
                            href="https://www.facebook.com"
                        >
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a
                            style={{
                                color: "#6b7280", // text-gray-500
                                marginRight: "1rem", // ml-3
                            }}
                            href="https://www.instagram.com"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a
                            style={{
                                color: "#6b7280", // text-gray-500
                            }}
                            href="https://www.twitter.com"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
