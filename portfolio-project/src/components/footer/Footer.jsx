import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className='footer-content'>
            <p className='footer-left'> 2025 Chirani Rajapaksha. Thanks for stopping by.</p>
            <div className='footer-right'>
                <a href="https://www.linkedin.com/in/chirani-rajapaksha/" target="_blank">LinkedIn</a>
                <a href="https://web.facebook.com/chirani.rajapaksha.16" target="_blank">Facebook</a>
                <a href="https://www.instagram.com/chiranirajapaksha/" target="_blank">Instagram</a>

            </div>
        </div>
    </div>
  )
}

export default Footer