import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <img src = {logo} alt = "logo"/>
        <ul className = 'nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Education & Work</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Blogs</li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar