import React from "react";
import Slider from "../components/Home/Slider";
import data from '../data/data.json'
import Heading from "../components/Home/Heading";
import Nav from "../components/Home/Nav";


function MiPhones(){
   
    return(
        <>
        <Nav />
        <Slider banner={data.banner}/>
        <Heading text="MI STAR PRODUCTS"/>
        
       
        
        </>
    )
}export default MiPhones;