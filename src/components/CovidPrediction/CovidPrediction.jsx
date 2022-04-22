import react,{useState} from "react";
import "../CovidPrediction/covidPrediction.css"
import CoWithYou from "../Donor/CoWithYou Logo.png"
import "./covidPrediction.css"
const CovidPrediction=()=>{
    const [date,setDate]=useState('');
    const[cases,setCases]=useState(null)
    const handleInputs=(e)=>{
        setDate(e.target.value)
    }
    const PostData=async (e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.append("date",date)
        console.log(date)
         const res= await fetch("        https://covid19mlapi.herokuapp.com/predict",{
            method:"POST",
            body:formdata
        })
        const data=await res.json();
        if(res.status===400||!data){
            window.alert("Not found!!");
        }
        else{
            console.log(res.status)
            console.log(data.cases)
            setCases(data.cases)
        }

    }
    return(
        <>
        <div className="container" id="container">
        <div id="header">
        <img className="Logo1"src={CoWithYou}></img>Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo2" src={CoWithYou}></img></div>
        <form method="POST" onSubmit={PostData} id="Predict" className="Predict" action="submit">
            Predicts the number of positive cases on a particular day using Machine Learning algorithms
            <h1>Enter the date in YYYY-MM-DD format</h1>
            <input type="text" name="date"  id="date" value={date} placeholder="Enter date" onChange={handleInputs}/>
            <button id="Predict2" type="submit">Predict</button>
            <h1 id="result">{cases}</h1>
        </form> 
        </div>
        </>
    )
}
export default CovidPrediction