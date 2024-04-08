import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
  <div className="footer-main">
    <footer className="footer">
      <div className="footer-section">
        <h1>Scriven Write</h1>
        <p>publish your book with us</p>
        <p>+91 83035 69780</p>
        <Link to="mailto:scrivenwrites@gmail.com">scrivenwrites@gmail.com</Link>
      </div>
      <div className="footer-section">
        <h4>Links</h4>
        <div>
          <Link to="/publish/book">publish my book</Link>
        </div>
        <div>
          <Link to="/store/book">book store</Link>
        </div>
        <div>
          <Link to="/about">About us</Link>
        </div>
        <div>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
      <div className="footer-section">
        <h4>Follow Us On:</h4>
        <div className="social-icons">
          <Link to="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></Link>
          <Link to="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></Link>
          <Link to="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></Link>
        </div>
      </div>
      <div className="footer-section">
        <h4>Address:</h4>
        <p>Chowk, Shahjahanpur (UP), India</p>
      </div>
      
        
    
    </footer>
    <p className="all-rights">All Rights Reserved &copy; Scriven Writes</p>
    </div>
  );
};

export default Footer;
