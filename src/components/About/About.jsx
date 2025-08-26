import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>

      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>

        {/* Left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>

        {/* gretting */}
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
          Hi, I am
        </h1>

        {/* name */}
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
          Abhishek Raut
        </h2>
        {/* Skills heading with typing effect*/}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
          <span className="text-white">I am a </span>
          <span className="text-[#8245ec]">
            <Typewriter
              words={['Front-end Developer', 'UI/UX Designer', 'Coder']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h3>

        {/* About me Parsgraph */}
        <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
          I am a front-end developer and recent IT graduate, passionate about building interactive and user-friendly web experiences. Skilled in React, JavaScript, and Tailwind CSS, I focus on creating responsive designs with smooth functionality. With additional exposure to backend technologies, I have a solid foundation in full-stack development and a constant drive to learn and create impactful digital solutions.
          
        </p>

        {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1oD2JT8X7RySOZ2SMaFuGEZmObp12-WOr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
      </div>
    </section>
  )
}

export default About