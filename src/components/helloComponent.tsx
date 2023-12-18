import React from "react";
import logo from '../assets/img/logo.png';
import './helloComponentStyles.scss';

export const HelloComponent = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="content">Hello World!</div>
        </div>  
    );
};