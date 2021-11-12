import React from "react";
import CoWithYou from "./CoWithYou Logo.png"
import "./AboutUs.css"
const AboutUs=()=>{
    return(
        <>
        <div className="container4">
   <div id="header4">
        <img className="Logo14"src={CoWithYou}/>
        Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo24" src={CoWithYou}/>
   </div>
   <h3 style={{color:"rgb(197,42,127)",textAlign:"center"}}>AboutUs</h3>
   <div className="Contact">
   <div id="M1">
       Shreyash K. Shrivastava<br></br>
       0208CS191128<br></br>
       {/* <Mailto email="shreyashkumarshrivastava7999@gmail.com">GMail</Mailto> */}
   </div>
   <div id="M2">
   Charu Jain<br></br>
   0208CS191050<br></br>
       {/* <Mailto email="Charu2722001@gmail.com">GMail</Mailto> */}
   </div>
   </div>
   <p>"Health is Wealth" and this is what inspired us to come up with this one of its kind idea on Covid Management.<br></br>
   
   During 2nd wave of Covid, India faced an acute shortage of essentials medicines like Remdesivir and equipments like Oxygen Tank. Also,things like PPE kits oxometers is not something everyone possess.<br></br>
   </p>
   <p>
   So to overcome this problem we have come up with a charity based application <b>CoWithYou</b>. What it does is <em>"that it bridges the gap between those who want to help and those who need it.</em><br></br></p>
   <p>
   As a <b>Donor</b> all you got to do is to upload the deatils of the product(medicines,commodities) along with your contact number you have and as a <b>patient</b> you can look for the products already listed in the datbase by potential Donors.<br></br></p>
   
   <p>
   <b><em>It's our extreme privilege  that we got to work upon such "socially impactful" project..Hope it serves the purpose we intend to have made it for</em></b></p>
   </div>
        </>
    )
}
export default AboutUs;