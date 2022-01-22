// ============================== //
// navbar.jsx - ReactJS HTML File //
// --- Created by Alex Montes --- //
// ============================== //

import React from "react"
import "./navbar.css"

import { Link } from "react-router-dom";
import { Navbar, Nav, } from "react-bootstrap"

import main_logo from '../../assets/navbar_icon.png';

class NavBar extends React.Component {
    render() {
        return (
            <div className= "navbarCSS">
                <Navbar bg="primary" variant="dark" className= "navbarCSS">
                    <Nav className="mr-auto">
                        <span className= "navbarContainer">
                            <Link to="/">
                                <img src= {main_logo} alt= "NavBar_Logo" className= 'navbarLogo' />
                            </Link>
                            <span className= "navbarLinkContainer"> 
                                <Link to="/" className= "navbarLink">
                                    HOME
                                </Link>
                                <Link to="/about" className= "navbarLink">
                                    ABOUT
                                </Link>
                                <Link to="/experience" className= "navbarLink">
                                    EXPERIENCE
                                </Link>
                                <Link to="/contact" className= "navbarLink">
                                    CONTACT
                                </Link>
                            </span>
                            
                        </span>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar