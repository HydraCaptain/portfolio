import React from 'react';
import './contact.css';
import email from '../../assets/mail_24dp_091A59_FILL0_wght400_GRAD0_opsz24.png';
import location from '../../assets/location_on_24dp_091A59_FILL0_wght400_GRAD0_opsz24.png';
import smartphone from '../../assets/smartphone_24dp_091A59_FILL0_wght400_GRAD0_opsz24.png';


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f2dacc8b-c19d-4fa0-b1b1-ec6495046a33");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          alert(data.message);
        }
    };

  return (
    <div id='Contact' className='Contact'>
        <div className="ContactTitle">
            <h1>Get in Touch</h1>
        </div>
        <div className="ContactSection">
            <div className="ContactLeft">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                <div className="ContactDetails">
                    <div className="ContactDetail"><img src={email} alt="" /><p>Jayk33505@gmail.com</p></div>
                    <div className="ContactDetail"><img src={location} alt="" /><p>Deoghar, Jharkhand, India (814143)</p></div>
                    <div className="ContactDetail"><img src={smartphone} alt="" /><p>+91 9798358323</p></div>
                </div>
            </div>
            <form onSubmit={onSubmit} class = "ContactRight">
                <label htmlFor=''>For You</label>
                <input type='text' placeholder='Enter Your Name' name='name' />
                <label htmlFor=''>Your Email</label>
                <input type='text' placeholder='Enter Your Email' name='email' />
                <label htmlFor=''>Enter Your Message</label>
                <textarea name='message' rows={8} placeholder='Your Message'></textarea>
                <button type='submit' className='ContactSubmit'>Submit now</button>
            </form>
        </div>
    </div>
  );
}


export default Contact;
