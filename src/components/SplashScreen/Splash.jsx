import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom"
import "./Splash.css";
import "@chakra-ui/react"
import { Box,Image,Center,Text} from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';

function Splash(){
  useEffect(()=>{
    const timer=setTimeout(() => {
      document.getElementById("bg").style.display="none";
      window.location.href="/Login"
    }, 5500);
    return ()=>{clearTimeout(timer)}

  },[])
return(<> 
<div className="bg" id="bg">
  <div className="image" alt=""/>
  
  <Text  className="text"  textAlign={'center'} py={'15'} color={'rgb(11,136,136)'} height={"auto"} width={"auto"}fontSize={"40px"} fontStyle={'italic'} fontFamily={"cursive"}  textShadow="1px 1px rgb(19,118,201)" m="6">
  <Typewriter
  onInit={async (typewriter) => {
    typewriter.typeString('An initiative by GGCT students').pause(5).start();
  }}
/>
     </Text>
</div>

  </>
)


}
export default Splash;