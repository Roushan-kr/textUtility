import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src={logo} height="28" alt="CoolBrand" />
                    <span>{props.title}</span>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/about" className="nav-item nav-link">About</a>
                        <a href="/" className="nav-item nav-link">Profile</a>
                        <a href="/" className="nav-item nav-link disabled" tabIndex="-1">{props.text}</a>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <div className="form-check form-switch mt-2">
                            <input type="color" id="userColor" onChange={props.userColor} value={props.usedColor} />
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} />
                        </div>
                        <a href="/login" className="nav-item nav-link">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Logo",
    text: "reports of the year"
};

export default Navbar;
