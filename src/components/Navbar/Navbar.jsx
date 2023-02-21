import React, { useState, useEffect, useRef } from "react";
import logo from "../../container/img/logo.svg";
import logocombo from "../../container/img/ezlogosvgwhite.svg";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Navbar.css";

library.add(faFacebook, faInstagram, faTwitter, faYoutube, faSearch, faBars);

function Navbar(props) {
  const [navbarActive, setNavbarActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const offset = 150;
      if (window.scrollY > offset) {
        setNavbarActive(true);
      } else {
        setNavbarActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {changePage} = props;

  const closeMenu = () => {
    setMenuOpen(false);
    setNavbarActive(false);
  };

  
  return (
    <nav id="navbar" className={navbarActive ? "navbar-active" : ""}>
      <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <div>
          <img src={logo} className="logo" alt="" />
          <ul>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">What's New</Link>
            </li>
            <li>
              <Link to="#">Categories</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Projects</Link>
            </li>
            <li>
              <Link to="#">News</Link>
            </li>
            <li>
              <Link to="#">Store</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
          <ul className="social-medias">
           
            <Link to="#"><FontAwesomeIcon icon={["fab", "facebook"]} /></Link>
            <Link to="#"><FontAwesomeIcon icon={["fab", "instagram"]} /></Link>
            <Link to="#"><FontAwesomeIcon icon={["fab", "youtube"]} /></Link>
            <Link to="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></Link>
        
          </ul>

        </div>
      </div>
      <div className="container">
      <Link to="/"><img className="brand" src={logocombo} alt="" /></Link>
        <div className="container-inner">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
            <Link to="/discography" onClick={closeMenu}>Discography</Link>
            </li>
            {/* <li>
              <Link to="/ezmil">Ez Mil</Link>
            </li> */}
          </ul>

        </div>
        <i
          className="fas fa-bars"
          id="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </i>
      </div>
    </nav>
  );
}

export default Navbar;
