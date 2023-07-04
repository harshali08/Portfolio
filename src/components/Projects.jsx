import React from 'react'
import ProjCard from './ProjCard'

const Projects = () => {
  return (
    <div id='projects' className='pt-3' style={{width:'90%',margin:'0 auto'}}>
    <div className='my-6' style={{marginTop:"5rem"}}>
    <h1 style={{color:"white",textAlign:"center",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}}>PROJECTS</h1>
    <h3  style={{color:"#EBEBEB",textAlign:"center" ,marginTop:"50px",color:"#E1E1E1"}}>Checkout Some of my Work 👇</h3>
    <div className='d-flex flex-row flex-wrap justify-content-center m-5 mt-2 ' style={{marginTop:"3rem",marginLeft:"3.5rem",marginRight:"3.5rem"}}>
      <ProjCard s={require('../assets/Travel-website.png')} title={"Travel Website"} h={175} w={320} link={"https://travel-website-ochre-tau.vercel.app/"} gitlink={'https://github.com/harshali08/Travel-Website'}  ></ProjCard>
      <ProjCard s={require('../assets/covid-tracker.png')} title={"Covid Tracker"} h={175} w={320} link={'https://covid-tracker-ten-mu.vercel.app/'} gitlink={'https://github.com/harshali08/covid-tracker'}></ProjCard>
      <ProjCard s={require('../assets/digital-clock.png')} title={"Digital Clock"} h={175} w={319} link={"https://digital-clock-seven-eta.vercel.app/"} gitlink={'https://github.com/harshali08/digital_clock'}></ProjCard>
      <ProjCard s={require('../assets/temp-converter.png')} title={"Temperature Converter"} h={175} w={319} link={'https://temp-converter-bice.vercel.app/'} gitlink={'https://github.com/harshali08/Temp-Converter'}></ProjCard>
      <ProjCard s={require('../assets/to-do-list.png')} title={"To-Do App"} h={175} w={319} link={"https://to-do-list-woad-nine.vercel.app/"} gitlink={'https://github.com/harshali08/to-do-list'}></ProjCard>
         <ProjCard s={require('../assets/note-keeping-app.png')} title={"Note-Keeping-App"} h={175} w={319} link={"https://note-keeping-app-eta.vercel.app/"} gitlink={'https://github.com/harshali08/note-keeping-app'}></ProjCard>

    </div>
    </div>
    </div>
  )
}

export default Projects