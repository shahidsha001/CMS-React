import { Facebook, FaceOutlined, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';
import '../navbarStyle.css';

import {ReactNavbar} from "react-responsive-animate-navbar";


function NavBar(props) {
    return (
        <div className="fixed">
         
         <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://svgshare.com/i/KHh.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "About", to: "/articles" },
          { name: "Our Services", to: "/about" },
          { name: "News & Blogs", to: "/contact" },
          { name: "Our Clients", to: "/contact" },
          { name: "Testimonials", to: "/contact" },
          { name: "Contact", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />

        </div>
    );
}

export default NavBar;