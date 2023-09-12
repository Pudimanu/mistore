import React from "react";
import { useContext } from "react";
import { GloableInfo } from "./CountHome";



function SuperChild() {
    const {appdata} = useContext(GloableInfo)
    console.log(appdata);
    return (
        <>
           
            <h1 style={{textAlign:"center", padding:"20px"}}>SuperChild Component</h1>
            <div className="count-block1">
                <p style={{textAlign:"center", padding:"20px"}}>{appdata.name}</p>
                <p style={{textAlign:"center", padding:"20px"}}>{appdata.size}</p>
                <p style={{textAlign:"center", padding:"20px"}}>{appdata.color}</p>
               {
                appdata.count > 0 ?(
                    <p style={{textAlign:"center", padding:"20px"}}>{appdata.count}</p>
                ):null
               }
               
            </div>

        </>
    )
} export default SuperChild;