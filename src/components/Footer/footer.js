import React from 'react';
import './footer.css';
import logoJAY from '../../assets/JAY.svg';





const Footer = () => {
  return (
    <div className="footer">
      <div class = "FooterTop">
        <div class = "FooterTopLeft">
            <img src = {logoJAY} alt='logo' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
