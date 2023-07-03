
import React,{useRef} from "react";
import "./css/Contact.css";
import { BsFillSendFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_me489rq', 'template_xgx6v7i', form.current, 'ib2ZAD9aFlJGP1DVL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    // <div id="contact" style={{ paddingTop: "80px",border:"1px solid red" }}>
    //   <h1
    //     style={{
    //       color: "White",
    //       textAlign: "center",
    //       textShadow: "3px 3px #9463FF",
    //       fontWeight: "bolder",
    //       fontSize: "3rem",
    //     }}
    //     className="mb-5 "
    //   >
    //     CONTACT
    //   </h1>
    //   <h3   style={{color:"#EBEBEB",textAlign:"center" ,marginTop:"50px",color:"#E1E1E1"}}>Love to here from you, Get in Touch👋</h3>

    //   <div className="d-flex justify-content-center mt-3">
    //     <form onSubmit={sendEmail} ref={form}>
    //       <div class="mb-3" style={{ backgroundColor: "1D1B39" }}>
    //         <label
    //           for="exampleFormControlInput1"
    //           class="form-label mx-2 my-2"
    //           style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
    //         >
    //           Name
    //         </label>
    //         <input
    //           type="name"
    //           class="form-control mx-2"
    //           style={{
    //             width: "400px",
    //             backgroundColor: "#1D1B39",
    //             height: "3rem",
    //             border: "none",
    //             outline: "none",
    //             color: "white",
    //           }}
    //           id="exampleFormControlInput1"
    //           placeholder="name@example.com"
    //           name="name"
    //         />
    //       </div>
    //       <div class="mb-3">
    //         <label
    //           for="exampleFormControlInput1"
    //           class="form-label mx-2 my-2"
    //           style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
    //         >
    //           Email address
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control mx-2"
    //           style={{
    //             width: "400px",
    //             backgroundColor: "#1D1B39",
    //             height: "3rem",
    //             border: "none",
    //             outline: "none",
    //             color: "white",
    //           }}
    //           id="exampleFormControlInput1"
    //           placeholder="name@example.com"
    //           name="email"
    //         />
    //       </div>
    //       <div class="mb-3">
    //         <label
    //           for="exampleFormControlTextarea1"
    //           class="form-label mx-2 my-2"
    //           style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
    //         >
    //           Message
    //         </label>
    //         <textarea
    //           class="form-control  mx-2"
    //           style={{
    //             width: "400px",
    //             backgroundColor: "#1D1B39",
    //             height: "8rem",
    //             border: "none",
    //             outline: "none",
    //             color: "white",
    //           }}
    //           id="exampleFormControlTextarea1"
    //           rows="3"
    //           name="message"
    //         ></textarea>
    //       </div>
    //       <div>
    //         <button
    //           type="submit"
    //           class="cont-but mx-2 px-1"
    //           style={{ fontWeight: "bolder" }}
    //           role="button"
    //         >
    //           Send
    //           <BsFillSendFill
    //             style={{
    //               marginLeft: "10px",
    //               marginTop: "3px",
    //               fontSize: "15px",
    //             }}
    //           ></BsFillSendFill>
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    
    <div className=' contact' style={{  backgroundColor: "#0F0D28",width:'90%',margin:'0 auto',paddingTop:"80px"}} id='contact'>
     <h1
        style={{
          color: "White",
          textAlign: "center",
          textShadow: "3px 3px #9463FF",
          fontWeight: "bolder",
          fontSize: "3rem",
        }}
        className="mb-5 "
      >
        CONTACT
      </h1>
      <h3   style={{color:"#EBEBEB",textAlign:"center" ,marginTop:"50px",color:"#E1E1E1"}}>Love to here from you, Get in Touch👋</h3>

                
                <div className="text-center" name="Contact" style={{color:'#F2F3F4'}}>
                        <div className="">
                            {/* <div className="fs-1 py-4">Get In Touch <span style={{color:'#fc2569'}}><FaHandPointDown size={40}/></span></div> */}
                        </div>
                        <div className="">
                            <form ref={form} onSubmit={sendEmail} className="" >
                                <input type="text" placeholder="Enter your name" name="user_name" required className="inputt fs-4 my-3 p-2" style={{backgroundColor: "#0F0D28",color:'#F2F3F4',border:'solid',borderWidth:'1px',borderColor:'#F2F3F4',borderRadius:'6px',outline:'none'}} /><br />
                                <input type="email" placeholder="Enter your Email" name="user_email" required className="inputt fs-4 my-3 p-2" style={{backgroundColor: "#0F0D28",color:'#F2F3F4',border:'solid',borderWidth:'1px',borderColor:'#F2F3F4',borderRadius:'6px',outline:'none'}} /><br />
                                <textarea placeholder="Enter your message" name="message" required rows={6} className="inputt fs-4 my-3 p-2" style={{backgroundColor: "#0F0D28",color:'#F2F3F4',border:'solid',borderWidth:'1px',borderColor:'#F2F3F4',borderRadius:'6px',outline:'none'}} ></textarea><br />
                                {/* <button type='submit' value="Send" className='px-5 py-2 mx-4 my-2 mb-4 fs-5 fw-semibold me-5' style={{backgroundColor:'#fc2569',color:'white',border:'none',borderRadius:'5px',fontFamily:'Kanit'}} >Submit</button> */}
                                <div className="d-flex justify-content-center">
          <button
              type="submit"
              class="cont-but mx-2 px-1"
              style={{ fontWeight: "bolder" }}
              role="button"
            >
              Send
              <BsFillSendFill
                style={{
                  marginLeft: "10px",
                  marginTop: "3px",
                  fontSize: "15px",
                }}
              ></BsFillSendFill>
            </button>
          </div>
                            
                            </form>
                        </div>
                </div>

                
            </div>
  );
};

export default Contact;
