import React from 'react';
import './about.css';
import JayAboutimg from '../../assets/JayAboutimg.jpg';



const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className='title' >
          <h2>About Me</h2>
        </div>
        <div className='AboutSection'>
          <div className='Aboutimg'>
            <img src = {JayAboutimg} alt='about img' />
          </div>
          <div className="AboutContent">
          <div className='para'>
            <p>I'm Jay kumar, a final-year engineering student and full-stack developer</p>
            <p> A results-driven Full Stack and Mobile Application Developer with expertise in Java, Android
                Development, and web technologies. Proficient in designing responsive, intuitive, and scalable
                applications for mobile and web platforms. Strong understanding of software development principles,UI/UX best practices, and integration of APIs for seamless user experiences. Developed a Health CareApp using Firebase and Google Fit API, showcasing skills in both backend and frontend development.Passionate about learning new tools and frameworks to deliver innovative and high-quality solutions.</p>
          </div>
          <div className='skills'>
            <div className='skill'><p>Frontend</p><hr style={{width:"60%"}}/></div>
            <div className='skill'><p>Backend</p><hr style={{width:"90%"}}/></div>
            <div className='skill'><p>Android</p><hr style={{width:"30%"}}/></div>
            <div className='skill'><p>L L M</p><hr style={{width:"70%"}}/></div>
          </div>
          </div>
        </div>
        <div className='Achivements'>
          <div className='Achivment'><h1>6+</h1><p>Internship completed</p></div><hr/>
          <div className='Achivment'><h1>23+</h1><p>Project completed</p></div><hr/>
          <div className='Achivment'><h1>Freasher</h1><p>experiences</p></div>
        </div>
      </div>
    </section>
  );
};

export default About;
