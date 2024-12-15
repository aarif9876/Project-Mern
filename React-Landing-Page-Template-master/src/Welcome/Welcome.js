import React from 'react';
import './Welcome.css'; // Assuming you have your CSS file linked properly
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate=useNavigate()
    const handleStart=()=>
    {
        navigate("/Game")
    }


  return (
    <body className='welcomebody'>
    <div>
    <div className='text'>
    Welcome User!!
    <br/><br/>
    <button onClick={handleStart} className='Start'>Start Game</button>
      </div>
      </div>
      </body>
      );
    }

export default Welcome;