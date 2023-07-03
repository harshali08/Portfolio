import React from 'react';
// import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" mt-5 " style={{width:"80%",margin:"0 auto"}} >
      <footer className="text-center text-white bg-black bg-opacity-75">
       
        <div className="text-center py-3" style={{backgroundColor: "#0F0D28" }}>
        ⒸCopyright 2023 .made by 
          <a className="text-white m-2 text-decoration-none fw-bolder"  href="https://github.com/harshali08">
         Harshali Farde  </a>
        </div>
      </footer>
    </div>
  );

};

export default Footer;
