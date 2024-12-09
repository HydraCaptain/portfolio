import React from 'react';
import './App.css';
import Nav from './components/navbar/nav';
import Me from './components/me/me';
import About from './components/about/about';
import Mywork from './components/mywork/mywork.js';
import Certificate from './components/certificates/certificate.js';
import Contact from './components/contact/contact.js';




function App() {
  return (
    <div className="App">
      <Nav />
      <Me />
      <About />
      <Mywork />
      <Certificate />
      <Contact />
      
    </div>
  );
}

export default App;
