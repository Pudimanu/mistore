import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";
function Register() {

    const navigate = useNavigate();    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitHandle(e){
        const item = {name,email,password}
      // console.log(item)
       localStorage.setItem("User-Info",JSON.stringify(item));
       navigate("/");

    }

    useEffect(()=>{
        if(localStorage.getItem("User-Info")){
            navigate('/'); 
        }
    },[])
   
    return (
        <>       
            <Nav /> 
            <div className="register">
               <h1>Register Page</h1>
               <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" /><br /><br />
               <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" /><br /><br />
               <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" /><br /><br />
               <button type="submit" onClick={submitHandle}>Submit</button>
            </div>
        </>
    )
} export default Register;