import React from "react";
import logo from './logo.png'

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    <div className="container">
    <div className="navbar-header">
    <img src={logo} width={70} height={50}></img>
    <a className="navbar-brand page-scroll" href="#page-top">
    Tic-Tac-Toe
    </a>{" "}
    </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            
          
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a href="/Help" className="page-scroll">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
