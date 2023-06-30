import React from 'react'
// import ProcessDiv from './ProcessDiv'
import './css/SkillBox.css'

const SkillBox = (props) => {
  return (
    <>
    
{/*            
                <div className="serviceBox m-3 ">
                   <img src={props.s} height={props.h} width={props.w} style={{marginTop:'10px'}}></img>
                    <h3 className="title" >{props.title}</h3>
                  
                </div> */}
                <div className="skillBoxContainer">
      <div className="serviceBox m-3">
        <img src={props.s} height={props.h} width={props.w} style={{ marginTop: '10px' }}></img>
        <div className="titleContainer">
          <h3 className="title">{props.title}</h3>
        </div>
      </div>
    </div>
           
           
    
    </>
  )
}

export default SkillBox