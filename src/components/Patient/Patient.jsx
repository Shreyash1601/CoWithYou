import react,{useEffect} from "react";
import React from 'react';
import './Patient.css';
import Card from "./Cards/Card"
import CoWithYou from "./CoWithYou Logo.png"
import { render } from "@testing-library/react";
import { useState } from 'react';
const Patient=(props)=>{
    const [data,setData]=useState([])
    const [searchTerm,setSearch]=useState(" ")
    var Data=[1,2,3,4,5];
    const searchfn=(e)=>{
        setSearch(e.target.value)
    }
    const getData=async ()=>{
        console.log("GETDATA")
        try{
            const res=await fetch("/Patient",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            setData(await res.json())
            if(!res.status===200){
                const err=new Error(res.error);
                throw err;
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getData();
    },[])
    console.log(searchTerm)
    return(
        <>
        <div className="Container1" id="Container1">
        <div id="header1">
        <img className="Logo1"src={CoWithYou}></img>Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo2" src={CoWithYou}></img>
        </div>
        <h1 id="intro">List of available Products..</h1>
        <button id="MENU" onClick={()=>{window.location.href="/gateway"}}>Menu</button>
        <div className="ui">
        <div className="input">
            <input id="input2" type="text" placeholder="Search Products" value={searchTerm} onChange={searchfn}/>
        </div>
        </div>
        {
           data.map((e)=>{
                if(searchTerm==="All"){
                render(
                    <div>
                    <Card Pname={e.Pname} PMD={e.PMD} PED={e.PED} Contact={e.Contact} Description={e.PDescription}/>
                    </div>
                )
                }
                else if(searchTerm===e.Pname){
                    render(
                        <div>
                    <Card Pname={e.Pname} PMD={e.PMD} PED={e.PED} Contact={e.Contact} Description={e.PDescription}/>
                    </div>
                    )
                }
           
        })}
        </div>
        </>
    )
}
export default Patient