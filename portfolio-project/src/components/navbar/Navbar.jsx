import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/underline.png'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className = 'navbar'>
        <img src = {logo} alt = "logo"/>
        <ul className = 'nav-menu'>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#educationAndWork'><p onClick={()=>setMenu("educationAndWork")}>Education & Work</p></AnchorLink>{menu==="educationAndWork"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#blogs'><p onClick={()=>setMenu("blogs")}>Blogs</p></AnchorLink>{menu==="blogs"?<img src={underline} alt='' />:<></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar