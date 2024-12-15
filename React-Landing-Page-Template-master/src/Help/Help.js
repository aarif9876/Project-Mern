import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Help.css';
import { useState,useEffect } from 'react'
import a1 from "../components/img2.jpeg"
import a2 from "../components/img3.jpeg"
import a3 from "../components/img4.jpeg"
import a4 from "../components/img5.jpeg"
import a5 from "../components/img6.jpeg"

const Help = () => {
  const interval=1000;
    const images=[a1,a2,a3,a4,a5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, interval);

    return () => clearInterval(intervalId);
  }, [5, interval]);
  return (
    <body className='support'>
    <div>
    
      <center><h1>SUPPORT</h1></center>
      
      <h2 className='head'>FAQ:</h2>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordion-text accordion-text-green">
            How to Play the tic-tac-toe game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-text">
          Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="accordion-text">
            Who goes first in tic-tac-toe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-text">
            Tic-Tac-Toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid. There is no universally agreed rule as to who plays first, but in this article, the convention that X plays first is used.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="accordion-text">
            How to sign up for Tic-Tac-Toe game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-text">
            At first click the signup button at the home page and if you are already a user Login to play and if not signup your new account and start to play.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="accordion-text">
          Can you always win tic-tac-toe if you go first?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-text">
          Unfortunately, there is no way to guarantee that a player will win every single game of tic tac toe they play. Victory, defeat, or a draw is determined by the interaction of both players. If both players operate perfectly, a draw will always occur.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <center><img style={{float:'none', borderRadius:'5px'}} height={"280vh"} width={"500vw"}  src={images[currentIndex]} /></center>
    </div>
    </body>
  );
}

export default Help