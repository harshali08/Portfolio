import React from 'react'
import AboutComp from './AboutComp'
import './css/About.css'

const About = () => {
  return (
    <div id='about ' className='pt-4 px-1'>
    <div>
    <h1 style={{color:"White",textAlign:"center",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}} className='mb-5 '>About Me</h1>
    <div className='d-flex flex-row flex-wrap justify-content-center  '>
      <div className='ms-3  left-side'>
        <img src={require('../assets/home-page.png')} ></img>
      </div>
      <div style={{width:"57%"}} className='me-0 mt-5 right-side'>
        <AboutComp></AboutComp>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default About