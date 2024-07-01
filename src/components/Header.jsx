import React from 'react';
import '../Styles/Header.css'; // Import the CSS file
import logo from '../assets/enzenl.png'; // Import the image

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header-logo" />
            <h1 className="header-title">Major Project Hub</h1>
        </header>
    );
};

export default Header;
