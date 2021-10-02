import react,{useState,useEffect} from "react";
import "./SignUp.css"
import CoWithYou from "./CoWithYou Logo.png"
import {useHistory} from "react-router-dom"
const SignUp=()=>{
    var history=useHistory()
    const [user,setUser]=useState({
        name:null,
        email:null,
        phone:null,
        password:null,
        cpassword:null
    })
    let name,value
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value
        if(!name||!name)
        window.alert("ERROR")
        else
        setUser({...user,[name]:value})
    }
    const PostData=async (e)=>{
        e.preventDefault()
        const {name,email,phone,password,cpassword}=user;
        const res=await fetch("/Register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,cpassword
            })
        })
        const data=await res.json();
        if(res.status===400||!data){
            window.alert("Invalid registration");
            console.log("Invalid registration")
        }
        else{
            console.log(res.status)
            window.alert("Successful registration");
            console.log("Successful registration")
            console.log(history)
        }
    }
    return(
        <>
        <div className="container" id="container">
        <div id="header">
        <img className="Logo1"src={CoWithYou}></img>Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo2" src={CoWithYou}></img></div>
        <div className="form" id="form">
        <div id="head">
        Register on CoWithYou
        </div>
                <form method="POST" className="form2" id="form2">
                <div className="Details">
                <div id="name">
                NAME:-
                    <input type="text" name="name"  placeholder="Enter your name" value={user.name}onChange={handleInputs}/>
                    </div>
                    <div id="email">
                    EMAIL:-
                    <input type="email" name="email" placeholder="Enter your email" value={user.email}onChange={handleInputs}/>
                    </div>
                    <div id="phone" >
                    PHONE:-
                    <input type="Number" name="phone"  placeholder="Enter your phone" value={user.phone}onChange={handleInputs}/>
                    </div>
                    <div id="PASSWORD">
                    PASSWORD
                    <input type="text" name="password" id="password" placeholder="Enter your password" value={user.password}onChange={handleInputs}/>
                    </div>
                    <div id="cpassword">
                    CONFIRM PASSWORD
                    <input type="text" name="cpassword" placeholder="Confirm your password" value={user.cpassword} onChange={handleInputs}/>
                    </div>
                    <div id="Submit">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="REGISTER" onClick={PostData}/>
                    </div>
                    <a href="../Login/Login.jsx">Login</a>
                    </div>
                </form>
            </div>
</div>
        </>
    )
}
export default SignUp