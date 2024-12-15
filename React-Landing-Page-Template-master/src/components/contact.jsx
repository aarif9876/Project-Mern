import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGooglePlay } from "react-icons/fa6";
import { BiSolidJoystick } from "react-icons/bi";
import { IoMdAppstore } from "react-icons/io";
import { HiBellAlert } from "react-icons/hi2";
import { RxEnter } from "react-icons/rx";
import { MdAttachEmail } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React from "react";


export const Contact = (props) => {
  const navigate = useNavigate()
    const handleCookies=() => {
        navigate("/Cookies")
    }
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>FEEDBACK </h2> 
                <p>
                <h1> <HiBellAlert size={50} /> Your Feedback Needed!</h1>
              
                We do not have any ads in our online game arcade and we have published hundreds of games which may not work in some browser configurations. This game should work in almost any modern web browser like Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox, Opera, Brave or Vivaldi. If you are having issues getting this game to work, please leave a comment below mentioning the problem and your software set up so we can investigate the issue.
                
                
                </p>
              </div>
              
              <a href="mailto:tictactoe@gmail.com"> <h3>< MdAttachEmail color={"white"}/> &nbsp; tictactoe@gmail.com</h3></a>
            </div>

          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
          
           
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                   
                   <a href="https://play.google.com/store/search?q=tic+tac+toe&c=apps&hl=en_IN&gl=US"><i className="facebook"><FaGooglePlay  size={45} color={"white"}/ ></i></a>
                  </li>
                  <li>
                  <a href="https://www.apple.com/in/app-store/"><i className="facebook"><FaApple size={50} color={"white"}/ ></i></a>
                  </li>
                  <li>
                  <a href="https://apps.microsoft.com/search?query=tic+tac+toe&hl=en-us&gl=US"><i className="facebook"><IoMdAppstore  size={50} color={"white"}/ ></i></a>
                  </li>
                </ul>
              </div>
              
            <div className="contact-item">
            <p>
              <span>
                
              </span>{" "}
              
              <h3 className ="cookies" onClick={handleCookies}> Cookies & Policies </h3>
            </p>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
          
            TIC-TAC-TOE&copy; 2024
          
          </p>
        </div>
        
      </div>
    </div>
  );
};
