import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a target="_blank" href="https://www.instagram.com/herkesinmerakettigicapybara/"><InstagramIcon /></a>
      <a target="_blank" href="https://www.facebook.com/kerembera.okumus/"><FacebookIcon /></a>
      <a target="_blank" href="https://twitter.com/kermestwitatio"><TwitterIcon /></a>
      </div>

      <p> &copy; 2022 scelus 🤙🏻🤙🏻🤙🏻</p>
    </div>
  );
}

export default Footer;
