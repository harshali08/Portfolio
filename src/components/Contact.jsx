import React, { useState, useRef } from 'react'
// import '../components/css/Contact.css'
// import Footer from '../components/Footer'
// import ReCAPTCHA from 'react-google-recaptcha';
// import Navbarr from "../components/Navbarr";

const Contact = () => {

   
   
    return (
        <>
            <div className=' pb-2 m-0' id='contact'  style={{paddingTop:"90px"}}>
            <div  className=' mb-6' > <h1 className='mt-2' style={{textAlign:"center",color:"white",marginTop:"10vh",marginBottom:"5vh",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}}>CONTACT</h1>
</div>
                  
                <div className='d-flex  align-items-center justify-content-center py-3 my-0 bg-body' style={{ backgroundColor: '#0F0D28', width: '50%', margin: '0 auto', borderRadius: '10px'}}>

                    <form className='form px-5 mx-2' style={{width:'100%'}}>
                        <div className='fs-5 fw-semibold mt-4' style={{ color: 'white' }}>Your Name</div>
                        <input className='my-2' type="text" name='name' style={{ backgroundColor: '#1D1B39', border:'none', outline: 'none',  width: '100%',height:"3.8rem" }} />

                        <div className='fs-5 fw-semibold mt-4' style={{ color: 'white' }}>Your E-Mail</div>
                        <input className='my-2' type="text" name='email'  style={{ backgroundColor: '#1D1B39', border:'none',outline: 'none',  width: '100%',height:"3.8rem" }}/>
                      
                        <div className='fs-5 fw-semibold mt-4' style={{color: 'white' }}>Message</div>
                        <textarea rows='5' className='my-2' type="textarea" name='msg'  style={{ backgroundColor: '#1D1B39',border:'none', outline: 'none',  width: '100%',height:"8rem" }}/>
                        <div className='d-flex justify-content-center pt-3' style={{}}><button type="button" className="btn fw-semibold fs-5 py-1 px-3" style={{ color: "#FFFFFF", backgroundColor: "#1D1B39", width: '20%' }} >Send</button></div>


                    </form>

                   
</div>

              

              

            </div>
         


        </>
    )
}

export default Contact