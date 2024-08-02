import Hero from '../components/Hero/Hero'
import React from 'react'
import './homePage.css'
import GetInTouch from '../components/get in touch/GetInTouch'
import Skills from '../components/skills/skills'

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Skills/>
            <GetInTouch/>
        </div>
    )
}

export default HomePage;