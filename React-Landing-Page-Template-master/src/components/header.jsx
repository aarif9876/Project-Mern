import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate=useNavigate()
  const handlecreate=()=>
  {
    navigate("/Signup")
  }
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
               
                <button className="account" onClick={handlecreate}> Create Your Account</button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};