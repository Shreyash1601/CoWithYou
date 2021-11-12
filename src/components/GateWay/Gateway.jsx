import react from "react";
import CoWithYou from "./CoWithYou Logo.png"
import "./Gateway.css"
const Gateway=()=>{
    return(
        <>
        <div className="container3">
   <div id="header3">
        <img className="Logo13"src={CoWithYou}/>
        Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo23" src={CoWithYou}/>
   </div>
   <h1 style={{color:"rgb(150,17,202)",margin:"auto"}}>Choose Your Option</h1>
   <div className="Options">
       <a href="/Donor"><div className="OpDonor">
       </div></a>
       <a href="AboutUs"><div className="AboutUs">
       </div></a>
       <a href="/Patient"><div className="OpPatient"></div></a>
   </div>
   <div className="banner">
   <h3 style={{color:"rgb(197,42,127)"}}>Donor</h3>
   <h3 style={{color:"rgb(197,42,127)"}}>AboutUs</h3>
   <h3 style={{color:"rgb(197,42,127)"}}>Patient</h3>
   </div>
   </div>
        </>
    )
}
export default Gateway