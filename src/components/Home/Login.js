import React, { useEffect } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";


function Login() {
    
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("User-Info")) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <Nav />
            <div className="offersSection">
                <h1>Login Page</h1>
            </div>
        </>
    )
} export default Login;