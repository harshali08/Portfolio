import React from 'react'
import AboutComp from './AboutComp'
import './css/About.css'

const About = () => {
  return (
    <div id='about'   style={{paddingTop:"80px"}}>
    <div>
    <h1 style={{color:"White",textAlign:"center",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}} className='mb-5 '>About Me</h1>
    <h3 style={{textAlign:"center",color:"#E1E1E1",marginTop:"2vh",marginBottom:"2vh"}}>Here you will find more information about me🙋‍♀️</h3>

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