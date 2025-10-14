import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I am currently available for new job opportunities.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt=''/> <p>chirani.rajapaksha.97@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt=''/> <p>+94-770716994</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt=''/> <p>Galle, Sri Lanka</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact