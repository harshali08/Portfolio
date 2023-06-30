import React from 'react'
import SkillBox from './SkillBox'

const Skills = () => {
  return (
    <div > <h1 className='mt-6 ' style={{textAlign:"center",color:"white",marginTop:"10vh"}}>Skills</h1>
    
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
    
   
    <SkillBox s={require('../assets/Mongodb.png')} title="MongoDB" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/git.png')} title="Git" h={110} w={110}></SkillBox>
    <SkillBox s={require('../assets/github.png')} title="GitHub" h={125} w={125}></SkillBox>
    <SkillBox s={require('../assets/Linux.png')} title="Linux" h={110} w={110}></SkillBox>
    <SkillBox s={require('../assets/figma.png')} title="Figma" h={90} w={90}></SkillBox>
    </div>
    </div>
  )
}

export default Skills