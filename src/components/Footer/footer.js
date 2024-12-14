import React from 'react';
import './footer.css';
import logoJAY from '../../assets/JAY.svg';
import user from '../../assets/user.svg'


const Footer = () => {
  return (
    <div className = "footer">
      <div class = "FooterTop">
        <div class = "FooterTopLeft">
            <img src = {logoJAY} alt='logo' />
            <p>I'm Jay kumar, a full-stack developer .</p>
        </div>
        <div className="FooterTopRight">
          <div className="FooterEmailInput">
            <img src={user} alt="User" />
            <input type="email" placeholder='Enter Your Email'/>
          </div>
          <div className="FooterSubscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className = "FooterBottem">
        <p className="FooterBottomLeft">© 2024 Jay Kumar. All rights reserved.</p>
        <div className="FooterBottomRight">
          <p>Term of Services</p>
          <p>Privicy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
