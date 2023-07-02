import React from 'react'
import './css/Home.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaMailchimp } from 'react-icons/fa';


const Home = () => {
  return (
     <>
      <div className='d-flex flex-row flex-wrap justify-content-center home mb-5 ' style={{width:'100%'}}>
        <div className='ms-3 mt-1 '>
             <div >
              <h4 className='domain'>Hii I'm</h4>
              <h1 className='name' data-text="Harshali Farde">Harshali Farde</h1>
              <h4 className='domain'>Full Stack Developer</h4>
              <p className='m-2' style={{width:"480px"}}>I am a passionate developer love to build  beautiful ang engaging websites.I always explore to the new technologies and happy to learn new things.</p>
             </div>
             <div className='d-flex flex-row justify-content-left mt-5'>
              
           
            <a className="btn btn-outline-light btn-floating m-2 p-2" href="https://www.linkedin.com/in/4768a421a/" role="button">
              <FaLinkedinIn fontSize={25}/>
            </a>
            <a className="btn btn-outline-light btn-floating m-2 p-2" href="https://github.com/harshali08" role="button" >
              <FaGithub fontSize={25}/>
            </a>
              <a className="btn btn-outline-light btn-floating m-2 p-2" href="mailto:harshalifarde@gmail.com" role="button" >
              <MdOutlineMailOutline fontSize={25}/>
            </a>

             </div>
            
           <div className='d-flex flex-row my-2'>
             {/* <button class="button-43 me-3" role="button"><a href='#projects'>Projects</a></button> */}
             <button class="home-but me-3" role="button"><a href='#about'>About Me</a></button>
             <button class="home-but" role="button"><a href='#projects'>Projects</a></button>

             </div>
           
    
        </div>
        <div className=' my-5 image_div'>
          <img src={require('../assets/About-me.png') } ></img>
        </div>
        
      </div>
     </>
  )
}

export default Home