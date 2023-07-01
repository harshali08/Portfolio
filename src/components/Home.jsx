import React from 'react'
import './css/Home.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaMailchimp } from 'react-icons/fa';


const Home = () => {
  return (
     <>
      <div className='d-flex flex-row flex-wrap justify-content-around home'>
        <div className='ms-5 my-5'>
             <div >
              <h4 className='domain'>Hii I'm</h4>
              <h1 className='name'>Harshali Farde</h1>
              <h4 className='domain'>Full Stack Developer</h4>
              <p>sgyhuijhfdfg sdrftgyhuij esdrtfyuh fghj sdfghj styui sdfghjk qwertyuio zxcvbnmwertyu wertyuidfgh</p>
             </div>
             <div className='d-flex flex-row justify-content-left mt-5'>
              
           
            <a className="btn btn-outline-light btn-floating m-1 p-2" href="#!" role="button">
              <FaLinkedinIn fontSize={25}/>
            </a>
            <a className="btn btn-outline-light btn-floating m-1 p-2" href="#!" role="button">
              <FaGithub fontSize={25}/>
            </a>
              <a className="btn btn-outline-light btn-floating m-1 p-2" href="#!" role="button">
              <MdOutlineMailOutline fontSize={25}/>
            </a>

             </div>
            
           <div className='d-flex flex-row my-2'>
             <button class="button-43 me-3" role="button"><a>Projects</a></button>
             <button class="button-44" role="button"><a>Projects</a></button>
             </div>
           
    
        </div>
        <div className=' my-5'>
          <img src={require('../assets/About-me.png') } ></img>
        </div>
        
      </div>
     </>
  )
}

export default Home