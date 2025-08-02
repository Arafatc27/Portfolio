import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // <== NEW
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const location = useLocation(); // <== NEW

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="name">Arafat Chowdhury</div>
                </div>

                <div className="navbar-right">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contacts</Link></li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span> &#9776;</span>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="close-icon" onClick={closeMenu}>
                        &times;
                    </div>
                    <ul className="mobile-nav-links">
                        <li>
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className={location.pathname === "/" ? "active-mobile-link" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                onClick={closeMenu}
                                className={location.pathname === "/projects" ? "active-mobile-link" : ""}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className={location.pathname === "/contact" ? "active-mobile-link" : ""}
                            >
                                Contacts
                            </Link>
                        </li>
                    </ul>

                </div>
            )}
        </>
    );
};

export default Navbar;
