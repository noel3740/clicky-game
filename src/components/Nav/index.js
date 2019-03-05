import React from 'react';
import './style.css';
import logo from './logo.png'

const Nav = props => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper black">
                    <div className="row">
                        <div className="col s12 m6 left-align myNavItem">
                            <img className="vgmNavLogo" src={logo} alt="logo"></img> VGM
                        </div>
                        <div className="col s12 m6 right-align myNavItem">
                            <span>Score: {props.score}, </span>
                            <span>Top Score: {props.topScore}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Nav;
