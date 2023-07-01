import React from 'react'
import AboutComp from './AboutComp'
import './css/About.css'

const About = () => {
  return (
    <div id='about' style={{paddingTop:"100px"}}>
    
    <h1 style={{color:"White",textAlign:"center",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}} className='mb-5'>ABOUT ME</h1>
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      <div className='ms-5'>
        <img src={require('../assets/home-page.png')}></img>
      </div>
      <div style={{width:"50%",backgroundColor:"pink"}} className='comp'>
        <AboutComp></AboutComp>
      </div>
      </div>
    </div>
  )
}

export default About