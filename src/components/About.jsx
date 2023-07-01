import React from 'react'
import AboutComp from './AboutComp'
import './css/About.css'

const About = () => {
  return (
    <div>
    <h1 style={{color:"White",textAlign:"center"}} className='mb-5'>About Me</h1>
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      <div className='ms-5'>
        <img src={require('../assets/home-page.png')}></img>
      </div>
      <div style={{width:"50%",}}>
        <AboutComp></AboutComp>
      </div>
      </div>
    </div>
  )
}

export default About