// import React from 'react'
// import AboutComp from './AboutComp'
// import './css/About.css'

// const About = () => {
//   return (
//     <div id='about' style={{paddingTop:"100px"}}>
    
//     <h1 style={{color:"White",textAlign:"center",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}} className='mb-5'>ABOUT ME</h1>
//     <div className='d-flex flex-row flex-wrap justify-content-center'>
//       <div className='ms-2'  >
//         <img src={require('../assets/home-page.png')}></img>
//       </div>
//       <div style={{width:"50vw"}} className='hello m-0 p-0' >
//         <AboutComp></AboutComp>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react'
import AboutComp from './AboutComp'
import './css/About.css'

const About = () => {
  return (
    <div id='about' style={{paddingTop:"100px"}}>
      <h1 style={{color:"White",textAlign:"center",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}} className='mb-5'>ABOUT ME</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        <div className='ms-2'  >
          <img src={require('../assets/home-page.png')}></img>
        </div>
        <div style={{width:"50vw"}} className='hello m-0 p-0' >
          <AboutComp></AboutComp>
        </div>
      </div>

      {/* Media Query */}
      <style>
        {`
        @media (max-width: 768px) {
          .hello {
            width: 80%;
          }
        }
        `}
      </style>
    </div>
  )
}

export default About
