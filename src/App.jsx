import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

const App = () => {
  return(
    <div className="bg-black">
      <div
        style={{
          // backgroundImage: `url(${})`,
          // backgroundPosition: `50% 50%`,
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact/>
    </div>
  )
}

export default App