import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbarr from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import './App.css'

const App = () => {
  return (
   <>
       <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/> 
 <div >
    <Navbarr></Navbarr>
    <Home></Home>
    {/* <About></About> */}
    <Skills></Skills>
    <Projects></Projects>
    <Footer></Footer>
   </div>
   </>
  )
}

export default App