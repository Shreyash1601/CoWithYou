import react from "react";
import React from 'react';
import "./Card.css"
const Card=React.memo(props=>{
    return(
        <>
        <div id="Container1">
        <h3>{props.Pname}</h3>
        <div id="Core">
        <div id="PARA">
            <h4 className="para">Product's name</h4>
            <h4 className="para">Manufacturing date</h4>
            <h4 className="para">Expiry Date</h4>
            <h4 className="para">Contact No.</h4>
            <h4 className="para">Description</h4>
        </div>
        <div id="Details">
            <h4 className="para2">{props.Pname}</h4>
            <h4 className="para2">{props.PMD}</h4>
            <h4 className="para2">{props.PED}</h4>
            <h4 className="para2"style={{fontSize:"25px"}}>{props.Contact}</h4>
            <h4 className="para3">{props.Description}</h4>
        </div>
        </div>
        </div>
        </>
    )
})
export default Card