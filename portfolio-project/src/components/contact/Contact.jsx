import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // simple email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formData = new FormData(form);
  formData.append("access_key", "4201710e-5d73-4e24-b8b2-548f15357769");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    form.reset();
    alert(data.message);
  } else {
    alert("Something went wrong. Please try again later.");
  }
};

  return (
    <div id='contact' className='contact'>
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
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows={8} placeholder='Enter your message'/>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact