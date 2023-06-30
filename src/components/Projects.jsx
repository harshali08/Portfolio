import React from 'react'
import ProjCard from './ProjCard'

const Projects = () => {
  return (
    <div className='my-6' style={{marginTop:"5rem"}}>
    <h1 style={{color:"white",textAlign:"center"}}>PROJECTS</h1>
    <h3  style={{color:"#EBEBEB",textAlign:"center" ,marginTop:"50px"}}>Checkout Some of my Work 👇</h3>
    <div className='d-flex flex-row flex-wrap justify-content-center m-6 ' style={{marginTop:"3rem",marginLeft:"3.5rem",marginRight:"3.5rem"}}>
      <ProjCard s={require('../assets/Travel-website.png')} title={"Travel Website"} h={175} w={320} link={"https://travel-website-oaaqcp37w-harshalifarde-gmailcom.vercel.app/"} gitlink={'https://github.com/harshali08/Travel-Website'}  ></ProjCard>
      <ProjCard s={require('../assets/covid-tracker.png')} title={"Covid Tracker"} h={175} w={320} link={'https://covid-tracker-ox28lobd7-harshalifarde-gmailcom.vercel.app/'} gitlink={'https://github.com/harshali08/covid-tracker'}></ProjCard>
      <ProjCard s={require('../assets/digital-clock.png')} title={"Digital Clock"} h={175} w={319} link={"https://digital-clock-b78zaza8y-harshalifarde-gmailcom.vercel.app/"} gitlink={'https://github.com/harshali08/digital_clock'}></ProjCard>
      <ProjCard s={require('../assets/temp-converter.png')} title={"Temperature Converter"} h={175} w={319} link={'https://temp-converter-57ltsz466-harshalifarde-gmailcom.vercel.app/'} gitlink={'https://github.com/harshali08/Temp-Converter'}></ProjCard>
      <ProjCard s={require('../assets/to-do-list.png')} title={"To-Do App"} h={175} w={319} link={"https://to-do-list-nqzuk5pnc-harshalifarde-gmailcom.vercel.app/"} gitlink={'https://github.com/harshali08/to-do-list'}></ProjCard>
   
    </div>
    </div>
  )
}

export default Projects