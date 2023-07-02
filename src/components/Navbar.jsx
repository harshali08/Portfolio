

// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import './css/Navbar.css'

// // function Navbarr() {
// //   return (
// //     <Navbar expand="lg" className="bg-tertiary navbar fixed-top mb-5"  >
// //       <Container >
// //         <Navbar.Brand href="/" className='nav-logo'>Harshali</Navbar.Brand>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" style={{ backgroundColor: "white",fontWeight:"bolder"}} />

// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="ms-auto" style={{ color: "white" }}>
// //             <Nav.Link href="/">Home</Nav.Link>
// //             <Nav.Link href="#about">About</Nav.Link>
// //             <Nav.Link href="#skills">Skills</Nav.Link>
// //             <Nav.Link href="#projects">Projects</Nav.Link>
// //             <Nav.Link href="#contact">Contact</Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // }

// // export default Navbarr;

// import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './css/Navbar.css';

// function Navbarr() {
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section[id]');
//       const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i];
//         const sectionTop = section.offsetTop - 50;
//         if (scrollPosition >= sectionTop) {
//           setActiveSection(section.id);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (id) => {
//     return id === activeSection;
//   };

//   return (
//     <Navbar expand="lg" className="bg-tertiary navbar fixed-top mb-5">
//       <Container>
//         <Navbar.Brand href="/" className="nav-logo">
//           Harshali
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="custom-toggler"
//           style={{ backgroundColor: 'white', fontWeight: 'bolder' }}
//         />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ color: 'white' }}>
//             <Nav.Link href="#home" className={isActive('') ? 'nav-link active' : 'nav-link'}>
//               Home
//             </Nav.Link>
//             <Nav.Link href="#about" className={isActive('about') ? 'nav-link active' : 'nav-link'}>
//               About
//             </Nav.Link>
//             <Nav.Link href="#skills" className={isActive('skills') ? 'nav-link active' : 'nav-link'}>
//               Skills
//             </Nav.Link>
//             <Nav.Link href="#projects" className={isActive('projects') ? 'nav-link active' : 'nav-link'}>
//               Projects
//             </Nav.Link>
//             <Nav.Link href="#contact" className={isActive('contact') ? 'nav-link active' : 'nav-link'}>
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbarr;


import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/Navbar.css';

function Navbarr() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 50;
        if (scrollPosition >= sectionTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (id) => {
    return activeSection === id || (activeSection === '' && id === '');
  };

  return (
    <Navbar expand="lg" className="bg-tertiary navbar fixed-top mb-5">
      <Container>
        <Navbar.Brand href="/" className="nav-logo">
          Harshali
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          style={{ backgroundColor: 'white', fontWeight: 'bolder' }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Nav.Link href="#home" className={isActive('home') ? 'nav-link active' : 'nav-link'}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={isActive('about') ? 'nav-link active' : 'nav-link'}>
              About
            </Nav.Link>
            <Nav.Link href="#skills" className={isActive('skills') ? 'nav-link active' : 'nav-link'}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={isActive('projects') ? 'nav-link active' : 'nav-link'}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className={isActive('contact') ? 'nav-link active' : 'nav-link'}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
