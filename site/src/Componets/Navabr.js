import React from 'react';
import "./Navbar.css"
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';

// import Contact from './Contact'
// import Login from './Login'
// import Search from './Search'



function Navabr() {
  return (
    <>
      <nav className='main-nav'>
        <div className="logo">
          <h2>
            <span>T</span>
            <span>H</span>
            <span>E</span>
            <span>T</span>
            <span>I</span>
            <span>T</span>
            <span>L</span>
            <span>E</span>
          </h2 >
        </div>
        <div className='menu-link mobile-menu-link'>
          <ul>
            <li>
              <Link to='#'>HOME</Link>
            </li>
            <li>
              <Link to='Search'>SEARCH</Link>
            </li>
            <li>
              <Link to='Contact'>CONTACT</Link>
            </li>
            <li>
              <Link to='Login'>LOGIN</Link>
            </li>
          </ul>
        </div>
        <div className='social-media'>
          <ul className='social-media-Desktop'>
            <li>
              <Link to="#" target='_rajat'>
                <FaFacebookSquare className="facebook"/>
              </Link>
            </li>
            <li>
              <Link to="#" target='_rajat'>
                <FaInstagramSquare className="instagram"/>
              </Link>
            </li>
            <li>
              <Link to="#" target='_rajat'>
                <FaLinkedinIn/>
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
  }
export default Navabr;