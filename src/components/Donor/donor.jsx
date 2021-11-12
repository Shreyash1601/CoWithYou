import react,{useState} from "react";
import "./donor.css"
import CoWithYou from "./CoWithYou Logo.png"
const Donor=()=>{
    const [pro,setProduct]=useState({
        Pname:null,
        PMD:null,
        PED:null,
        Contact:null,
        PDescription:null
    })
    let name,value
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value
        setProduct({...pro,[name]:value})
    }
    const PostData=async (e)=>{
        e.preventDefault()
        const {Pname,PMD,PED,Contact,PDescription}=pro;
        const res=await fetch("/Donor",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Pname,PMD,PED,Contact,PDescription
            })
        })
        const data=await res.json();
        console.log(data)
        if(res.status===400||!data){
            window.alert("Failed to Upload.Check the details you have filled and try again");
            console.log("Failed to Upload.Check the details you have filled and try again")
        }
        else{
            console.log(res.status)
            window.alert("Product uploaded successfully");
            console.log("Product uploaded successfully")
            window.location.reload(false)
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
        Upload product details on CoWithYou
        </div>
                <form method="POST" className="form2" id="form2">
                <div className="Details">
                <div id="Pname">
                Product Name:-
                    <input type="text" name="Pname"  id="Pname" placeholder="Enter product's name" value={pro.Pname}onChange={handleInputs}/>
                    </div>
                    <div id="PMD">
                    Manufacturing Date:-
                    <input type="text" name="PMD" placeholder="Enter the product manufacture's date" value={pro.PMD}onChange={handleInputs}/>
                    </div>
                    <div id="PED" >
                    Expiry date:-
                    <input type="text" name="PED"  placeholder="What is the expiry date of product" value={pro.PED}onChange={handleInputs}/>
                    </div>
                    <div id="Contact">
                    Contact
                    <input type="number" name="Contact" id="Contact" placeholder="Enter your contact number" value={pro.Contact}onChange={handleInputs}/>
                    </div>
                    <div id="PDescription">
                    Product Description
                    <input type="text" name="PDescription" placeholder="Describe your product in brief with all essential features.Would be great if you mention whether it is used before or not and how long" value={pro.PDescription} onChange={handleInputs}/>
                    </div>
                    <div id="Submit">
                    <input type="submit" name="Donor" id="Donor" className="form-submit" value="UPLOAD" onClick={PostData}/>
                    </div>
                    <a href="/gateway">Back to Menu</a>
                    </div>
                </form>
        </div>
        </div>
        </>
    )
}
export default Donor