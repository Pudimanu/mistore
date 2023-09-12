import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    let navigate = useNavigate();
    const Cmp = props.Cmp;

    useEffect(()=>{
        if(!localStorage.getItem("User-Info")){
            navigate("/")
        }
    },[])

    return(
        <>
        <Cmp />
        </>
    )

}export default Protected;