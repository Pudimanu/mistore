import React, { useEffect } from "react";
import Nav from "../components/Home/Nav";

function Details() {


    let countinfo = JSON.parse(localStorage.getItem("Count-Info"));
    

    function deleteItem(index) {
        //alert(index)
        countinfo.splice(index, 1);
        localStorage.setItem("Count-Info", JSON.stringify(countinfo));  
    }

    return (
        <>
            <Nav />
            <h1 style={{ textAlign: "center", padding: "20px" }}>Cart Details</h1>
            <div className="register">               
                <table>
                    {
                        countinfo.length > 0 ?
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Count</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    :null
                    }
                    
                    <tbody>
                        {

                            countinfo && countinfo.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td>{item.size}</td>
                                    <td>{item.color}</td>
                                    <td onClick={() => deleteItem(index)}><button type="button">Delete</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>


        </>
    )
} export default Details;