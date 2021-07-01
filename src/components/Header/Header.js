import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav className="nav">
                <a href="/home">Home</a>
                <a href="/review">Review Product</a>
                <a href="/manage">Manage Items</a>  
            </nav>

        </div>
    );
};

export default header;