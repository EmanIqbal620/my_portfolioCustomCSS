import React from "react";
import Image from "next/image";
import myImage from "../../../public/image.webp"; 

const About = () => {
  return (
    <div id="about">
      <section style={{ color: '#4A4A4A', fontFamily: 'sans-serif' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '6rem 1.25rem',
          display: 'flex',
          flexDirection: 'row', // Image on the left, text on the right
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Image Section */}
          <div style={{
            maxWidth: '28rem',
            width: '100%',
            marginBottom: '2.5rem',
            marginRight: '2rem',
            textAlign: 'center'
          }}>
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={myImage} 
              width={300}
              height={400}
            />
          </div>
          
          {/* Text Section */}
          <div style={{
            width: '50%',
            paddingLeft: '2rem',
            textAlign: 'left'
          }}>
            <h1 style={{
              fontSize: '2.25rem',
              marginBottom: '1rem',
              fontWeight: '500',
              color: '#1F2937'
            }}>
              About Me
            </h1>
            <p style={{
              marginBottom: '1.25rem',
              lineHeight: '1.75'
            }}>
              I’m Eman Iqbal, a passionate web developer dedicated to turning ideas into seamless digital experiences. I specialize in modern responsive designs and scalable solutions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Additional content can be added here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
