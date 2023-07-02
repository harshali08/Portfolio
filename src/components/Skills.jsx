import React from 'react'
import SkillBox from './SkillBox'

const Skills = () => {
  return (
    <div id='skills' className='' style={{paddingTop:"100px"}}>
    <div  className=' mb-6' > <h1 className='mt-2' style={{textAlign:"center",color:"white",marginTop:"10vh",marginBottom:"5vh",textShadow: "3px 3px #9463FF",fontWeight:"bolder", fontSize:"3rem"}}>SKILLS</h1>
    <h3 style={{textAlign:"center",color:"white",marginTop:"2vh",marginBottom:"2vh",color:"#E1E1E1"}}>Here are Some of My Skills 🌟</h3>
    <div className='d-flex flex-row flex-wrap justify-content-center ' style={{marginLeft:"3rem", marginRight:"3rem"}} >
    <SkillBox s={require('../assets/Cplusplus.png')} title="C++" h={110} w={125}></SkillBox>
    <SkillBox s={require('../assets/Java.png')} title="Java" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/Python.png')} title="Python" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/HTML.png')} title="HTML" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/CSS.png')} title="CSS" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/JS.png')} title="Javascript" h={90} w={80}></SkillBox>
    <SkillBox s={require('../assets/Tailwind.png')} title="Tailwind" h={120} w={120}></SkillBox>
    <SkillBox s={require('../assets/Bootstrap.png')} title="Bootstrap" h={120} w={120}></SkillBox>
    <SkillBox s={require('../assets/ReactJs.png')} title="ReactJS" h={100} w={100}></SkillBox>
   
    <SkillBox s={require('../assets/Node Js.png')} title="NodeJs" h={110} w={130}></SkillBox>
    
    <SkillBox s={require('../assets/expressjs.png')} title="ExpressJs" h={90} w={90}></SkillBox>
    <SkillBox s={require('../assets/Mongodb.png')} title="MongoDB" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/git.png')} title="Git" h={110} w={110}></SkillBox>
    <SkillBox s={require('../assets/github.png')} title="GitHub" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/Linux.png')} title="Linux" h={110} w={110}></SkillBox>
    <SkillBox s={require('../assets/figma.png')} title="Figma" h={90} w={90}></SkillBox>
    </div>
    </div>
    </div>
  )
}

export default Skills