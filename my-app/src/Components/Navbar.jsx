import React from "react";
import "./Navbar.css"; 
import { Link } from 'react-router-dom';
const Navbar =()=>{
return(
<nav className="navbar">
    <div className="navbar-left">
        <div className="name">
            Arafat Chowdhury
        </div> 
    </div>

    <div className="navbar-right">
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contacts</Link>
            </li>
        </ul>
    </div>
</nav>
)
}
export default Navbar;