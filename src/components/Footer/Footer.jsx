import React from "react";
import "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
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
library.add(faFacebook, faInstagram, faTwitter, faYoutube, faSearch, faBars);

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} FFP Records </p>
      <ul className="social-medias2">
           
           <a href="https://www.facebook.com/ffpmgmtpr/">
               <FontAwesomeIcon icon={["fab", "facebook"]} />
           </a>
           <a href="https://www.instagram.com/ffp_records/">
               <FontAwesomeIcon icon={["fab", "instagram"]} />
           </a>
           <a href="https://www.youtube.com/channel/UCFXM-iJBNvGizjQvRf7KXRA">
               <FontAwesomeIcon icon={["fab", "youtube"]} />
           </a>
          <a href="https://twitter.com/ffpmgmtpr">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
       
         </ul>
    </footer>
  );
};

export default Footer;