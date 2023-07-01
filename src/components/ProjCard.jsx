import React from "react";
import "./css/ProjCard.css";
import { PiGithubLogoFill } from "react-icons/pi";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const ProjCard = (props) => {
  console.log(props);
  return (
 <>


      <div className=" mx-4 my-3 " >
            <div class="serviceBox_2 my-4 mx-3" style={{height:'20rem'}}>
                <div class="service-icon_2 d-flex justify-content-center align-items-center"><a href={props.link}> <BsBoxArrowInUpRight fontSize={25}  color="black"></BsBoxArrowInUpRight></a></div>
               
                <div class="service-content_2">
                <img src={props.s} height={170} style={{width:"100%", borderRadius:"10px"}}></img>
                
                    <h4 class="title_2 my-3" style={{textAlign:"center"}}>{props.title}</h4>
                    <div className="d-flex flex-row justify-content-center my-4">
                    <button  class="read-more p-1"><a href={props.gitlink}>Source Code<PiGithubLogoFill color="black" fontSize={25}></PiGithubLogoFill></a></button>
                    </div>
                </div>
            </div>
            </div>
    
 
        


 </>
  );
};

export default ProjCard;
