import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='pt-10 bg-image'>

    <div>
        <p className='px-10 py-5 text-2xl text-justify text-slate-200 indent-16'>
            Everything we do is designed to inspire the world to play, and we believe we’re at our best when we listen, learn, and empower each other. We celebrate openness and curiosity and are committed to making a positive impact in the world. 
            We hire creative, collaborative, inclusive people with diverse backgrounds who enrich our culture and challenge us to be better people and better at what we do. And we nurture inclusive leaders who foster a belonging culture and a place where everyone can thrive, fulfill their potential and make the best games. Find out what makes us different. 
        </p>
        <br/>
        {/* cards */}

        <div className='my-3 ml-36 columns-3 gap-14'>

                <div className='w-56 h-56 text-gray-700 transition duration-300 ease-in-out delay-150 bg-blue-500 border-2 rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 drop-shadow-2xl'>
                    <h2 className='py-4 text-3xl font-bold text-center text-black hover:text-white'>Creativity</h2>
                    <p className='px-5 mt-5 font-bold text-justify text-gray-800 text-1xl indent-10'>Striving to bring imagination, original ideas, and excitement to everything we do.</p>
                </div>

                <div className='w-56 h-56 text-gray-700 transition duration-300 ease-in-out delay-150 bg-blue-500 border-2 rounded-lg drop-shadow-2xl hover:-translate-y-1 hover:scale-110 hover:bg-orange-500'>
                <h2 className='py-4 text-3xl font-bold text-center text-black hover:text-white'>Pioneering</h2>
                <p className='px-5 mt-5 font-bold text-justify text-gray-800 text-1xl indent-10'>Acting with the curiosity and courage that it takes to experiment, innovate, and lead.</p>
                </div>

                <div className='w-56 h-56 text-gray-700 transition duration-300 ease-in-out delay-150 bg-blue-500 border-2 rounded-lg drop-shadow-2xl hover:-translate-y-1 hover:scale-110 hover:bg-orange-500'>
                <h2 className='py-4 text-3xl font-bold text-center text-black hover:text-white'>Passion</h2>
                <p className='px-5 mt-5 font-bold text-justify text-gray-800 text-1xl indent-10'>We are at our best when we pursue what we love, and have fun doing it. </p>
                </div>

        </div>

            </div>

        {/* cards */}

        <br/>
        <h2 className='px-10 py-3 text-4xl font-bold text-white hover:text-orange-500'>Our Practices</h2>
        <br/>
        <p className='px-10 text-2xl text-justify text-slate-200 indent-16'>
        We believe in the power of positive play and that being part of a gaming community should be a fun, fair, and safe experience for all. We are equally committed to building a workplace that spurs creativity and innovation and is as diverse as the communities we serve.
        As a leading global entertainment business, we want to inspire through our actions and create a positive impact in the world. This isn’t a destination but an ongoing journey of transparency and continual progress. You can find out how we’re getting on, and read our Impact Report.
        </p>
        <br/>
        <h1 className='px-10 py-3 text-6xl font-bold text-white hover:text-orange-500'> About Our Technology</h1>

        <br/>
        <h2 className='px-10 py-3 text-6xl font-bold text-white'>Together with our game creators, we push technology forward to deliver the future of play</h2>
        <br/>
        <p className='px-10 py-5 text-2xl text-justify text-white'>With our unmatched IP, our creativity and our unique relationship with hundreds of millions of players around the world – Electronic Arts is striving to lead the way with ground-breaking experiences. Our aim is to push industry boundaries, exceed player expectations and blur the lines between games, entertainment and reality.</p>
    </div>

    
  )
}

export default About