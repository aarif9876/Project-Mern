import React from "react";
import { CgProfile } from "react-icons/cg";


export const Team = () => {
  return (
    <div id="team" className="text-center">
    <h2>Meet the Team</h2>
    <div className="teamprofile">

          <CgProfile  size={200}/>
          <CgProfile size={200}/>
          <CgProfile  size={200}/>
          
         
        </div>
        <div className="teamname">
       <div><h3 className="aarif"> Mohamed Aarif A</h3></div> 
        <div><h3 className="team1">Preethiga R</h3></div>
        <div><h3 className="team2" >Vignesh M</h3></div>
          
        </div>
      </div>
    
  );
};
