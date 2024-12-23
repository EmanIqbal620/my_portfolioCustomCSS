'use client'; 

import React from 'react';

const Contact = () => {
    return (
        <div id="Contact">
            <section style={{ color: "#4a5568", fontFamily: "Arial, sans-serif" }} className="text-gray-600 body-font relative">
                <div style={{
                    padding: "6rem 1.25rem",
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "stretch", 
                }} className="container mx-auto flex sm:flex-nowrap flex-wrap">
                    <div style={{
                        width: "48%", // Take 48% of the width
                        backgroundColor: "#e2e8f0", // bg-gray-300
                        borderRadius: "0.5rem", // rounded-lg
                        overflow: "hidden",
                        position: "relative",
                    }} className="sm:mr-10">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                filter: "contrast(1.2) opacity(0.4)",
                            }}
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.073323865186!2d67.2177652!3d24.89735635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3375aacada597%3A0x8e5e5b6be52c37d4!2sGharibabad%20Malir%20Cantonment%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1733586181623!5m2!1sen!2s"
                        />
                    </div>

                    <div style={{
                        width: "48%", 
                        backgroundColor: "#ffffff", // bg-white
                        display: "flex",
                        flexDirection: "column",
                        padding: "2rem", // py-8
                        marginTop: "2rem",
                    }} className="lg:flex-grow md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 style={{
                            fontSize: "2rem", // sm:text-4xl
                            fontWeight: "500", // font-medium
                            marginBottom: "1rem", // mb-4
                            color: "#1a202c", // text-gray-900
                        }}>Contact</h2>
                        <p style={{ color: "#4a5568", marginBottom: "1.25rem", lineHeight: "1.625" }}>
                            Feel free to contact.
                        </p>

                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="name" style={{ fontSize: "0.875rem", color: "#4a5568" }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    borderRadius: "0.375rem", // rounded
                                    border: "1px solid #e2e8f0",
                                    marginTop: "0.5rem",
                                    fontSize: "1rem", // text-base
                                    color: "#4a5568",
                                    outline: "none",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="email" style={{ fontSize: "0.875rem", color: "#4a5568" }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    borderRadius: "0.375rem", // rounded
                                    border: "1px solid #e2e8f0",
                                    marginTop: "0.5rem",
                                    fontSize: "1rem", // text-base
                                    color: "#4a5568",
                                    outline: "none",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="message" style={{ fontSize: "0.875rem", color: "#4a5568" }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    borderRadius: "0.375rem", // rounded
                                    border: "1px solid #e2e8f0",
                                    marginTop: "0.5rem",
                                    fontSize: "1rem", // text-base
                                    color: "#4a5568",
                                    resize: "none",
                                    height: "8rem", // h-32
                                }}
                            />
                        </div>

                        <button
                            style={{
                                backgroundColor: "#3b82f6", // bg-blue-500
                                color: "#ffffff", // text-white
                                padding: "0.75rem 2rem", // py-2 px-6
                                border: "none",
                                borderRadius: "0.375rem", // rounded
                                fontSize: "1.125rem", 
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                            }}
                            onMouseOver={(e) => {
                                const target = e.target as HTMLElement; 
                                target.style.backgroundColor = "#2563eb"; 
                            }}
                            onMouseOut={(e) => {
                                const target = e.target as HTMLElement; 
                                target.style.backgroundColor = "#3b82f6";
                            }}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
