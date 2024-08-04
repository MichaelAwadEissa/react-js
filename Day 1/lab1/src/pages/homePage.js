import Hero from '../components/Hero/Hero'
import React from 'react'
import './homePage.css'
import GetInTouch from '../components/get in touch/GetInTouch'
import Skills from '../components/skills/skills'
import AboutMe from '../components/aboutMe/aboutMe'
import Portfolio from '../components/portofolio/portfolio.js'

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <AboutMe/>
            <Portfolio/>
            <Skills/>
            <GetInTouch/>
        </div>
    )
}

export default HomePage;