import React, { useState, useRef } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [setMenu] = useState();
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className = 'navbar'>
        <img className='logo' src = {logo} alt = "logo"/>
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
        <ul ref={menuRef} className = 'nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#educationAndWork'><p onClick={()=>setMenu("educationAndWork")}>Education & Work</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#blogs'><p onClick={()=>setMenu("blogs")}>Blogs</p></AnchorLink></li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar