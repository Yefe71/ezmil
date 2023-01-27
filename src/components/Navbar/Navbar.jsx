import React, { useState, useEffect } from 'react';
import logo from "../../img/logo.svg"
import logocombo from "../../img/logocombnobg.svg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Navbar.css";


library.add(faFacebook, faInstagram, faTwitter, faYoutube, faSearch, faBars)



function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {



    const handleScroll = () => {
      const offset = 50;
      if (window.scrollY > offset) {
        setNavbarActive(true);
      } else {
        setNavbarActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
    return (
        <nav id="navbar" className={navbarActive ? 'navbar-active' : ''}>
          <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
          <div>
            <img src={logo} className="logo" alt="" />
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">What's New</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="social-medias">
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </ul>
            <form>
              <div className="input-wrap">
                <input type="search" placeholder="Search..." />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <img className="brand" src={logocombo} alt="" />
          <div className="container-inner">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Discography</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <form>
              <div className="input-wrap">
                <input placeholder="Search..." type="search" />
                <button type="reset">
                  <FontAwesomeIcon icon="search" />
                </button>
              </div>
            </form>
          </div>
          <i className="fas fa-bars" id="menu-btn" onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon icon={faBars} /></i>
        </div>
      </nav>
    )
}

export default Navbar;