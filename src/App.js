import React from 'react'
import "./App.css"
import Splash from "./components/SplashScreen/Splash"
import SignUp from "./components/Register/SignUp"
import Patient from "./components/Patient/Patient"
import Donor from "./components/Donor/donor"
import Login from "./components/Login/Login"
import GateWay from "./components/GateWay/Gateway"
import {BrowserRouter,Route} from "react-router-dom";
import Gateway from './components/GateWay/Gateway'
import AboutUs from './components/AboutUs/AboutUs'
const App=()=>{
  return(<>
    <div className="App">
    <BrowserRouter>
    <Route exact path="/" component={Splash}/>
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/SignUp" component={SignUp}/>
    <Route exact path="/AboutUs" component={AboutUs}/>
    <Route exact path="/gateway" component={GateWay}/>
    <Route exact path="/Donor" component={Donor}/>
    <Route exact path="/Patient" component={Patient}/>
    </BrowserRouter>
    </div>
    </>
  )
}
export default App