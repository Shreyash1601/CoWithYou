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
       </div><h3 style={{color:"rgb(197,42,127)",width:"50px"}}>Donor</h3></a>
       <a href="AboutUs"><div className="AboutUs">
       </div>   <h3 style={{color:"rgb(197,42,127)"}}>AboutUs</h3></a>
       <a href="/Patient"><div className="OpPatient"></div><h3 style={{color:"rgb(197,42,127)"}}>Patient</h3></a>
       <a href="/Prediction"><div
       className="Prediction"></div>
       <h3 style={{color:"rgb(197,42,127)"}}>Covid Prediction</h3>
       </a>
   </div>
   </div>
        </>
    )
}
export default Gateway