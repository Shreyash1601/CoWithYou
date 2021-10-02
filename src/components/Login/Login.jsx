
import react,{useState} from "react";
import "./login.css";
import CoWithYou from "./CoWithYou Logo.png"
function Login()
{var flag;

 function validate(e) {
   let name=e.target.value;
   if(name.length==0)
{flag=0;}
else{flag=1;}
}

const [email,setEmail]=useState("");
const [password,setPassword]=useState("")

const LoginUser=async (e)=>{
  e.preventDefault()
  const res=await fetch("/Login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
email,password
    })
  })
  const data=res.json();
  if(!data||res.status===400){
    window.alert("Invalid credentials")
  }
  else{
    window.alert("Succesfully LoggedIn")
  }
}
  
   return(<>
   <div className="container">
   <div id="header">
        <img className="Logo1"src={CoWithYou}/>
        Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo2" src={CoWithYou}/>
   </div>
   <div className="FORM">
          <form  class="form" method="POST" action="submit" >
          <h3>Log In to CoWithYou</h3>
          <div className="Email">
          EMAIL
              <input id="email" type="email" placeholder="Enter your E-mail"  value={email} onChange={(e)=>setEmail(e.target.value)}mt={'2'} />
              </div>
              <div className="Password">
              PASSWORD
              <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Enter your password"  mt={'2'} />
              </div>
              <div id="button">
            <button className="button" type={'submit'} onClick={LoginUser} size="larger" mt={'8'} >
              Sign In
            </button>
            </div>
            <a href="../Register/SignUp.jsx">Register</a>
          </form>
          </div>
          </div>
  </>
);}
export default Login;
