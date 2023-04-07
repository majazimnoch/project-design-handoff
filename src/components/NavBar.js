import React from 'react'
import { FaBars } from 'react-icons/fa'
import './NavBarCss.css'
import Namnlöst from '../assets/Namnlöst-1 2.svg'
import Fit from '../assets/Fit.svg'
import LogoTablet from '../assets/logo-tablet.png'

const NavBar = () => {
  return (
    <section className="nav-container">
      <nav className="nav-bar">
        <div className="icons-container">
          <img
            src={Namnlöst}
            alt="Logo"
            className="picture" />
          <img
            src={Fit}
            alt="Logotyp"
            className="picture" />
          <div className="logo-tablet-container">
            <img
              src={LogoTablet}
              alt="Logotyp"
              className="picture-tablet-vector" />
          </div>
        </div>
        <div className="menu-container">
          <ul>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Join us</a></li>
          </ul>
          <button type="button" className="hamburger-sign">
            <FaBars />
          </button>
        </div>
      </nav>
    </section>
  )
}

export default NavBar;