import React, { useEffect } from 'react';
import './nav.css'
import menu from '../../assets/menu_24dp_3D52A0 _FILL0_wght400_GRAD0_opsz24.svg';

const Nav = () => {
  useEffect(() => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    const handleMenuClick = () => {
      navMenu.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuClick);

    // Cleanup event listener on component unmount
    return () => {
      menuIcon.removeEventListener('click', handleMenuClick);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className='nav'>
      <img src='/JAY.svg' alt='logo' className='logo' />
      <img src={menu} alt='menu' className='menu-icon' />
      <ul className='nav-menu'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#Blog'>Blog</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  );
};

export default Nav;
