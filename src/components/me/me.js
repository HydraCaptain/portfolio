import React from 'react';
import './me.css'
import jaycirl from '../../assets/jaycirl.svg';


const Me = () => {
  return (
    <section id="me">
      <div className="hero">
        <div class = "img">
            <img src={jaycirl} alt="profile" />
        </div>
        <ul>
            <li><h1><span>I'm Jay kumar,</span>  a final-year engineering student and full-stack developer.</h1></li>
            <li><p>"Final-year engineering student and full-stack developer with a passion for building dynamic, user-friendly web and mobile applications that bridge creativity and functionality."</p></li>
        </ul>
      </div>
      <div class = "hero-action" >
        <div class ="hero-connect">Connect with me</div>
        <a href="@JAYKUMARport.pdf" class = "hero-resume" target="_blank" rel="noopener noreferrer">My resume</a>
      </div>
    </section>
    
  )
}

export default Me;
