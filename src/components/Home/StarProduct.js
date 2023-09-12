import React from "react";
import { Link } from "react-router-dom";


function StarProduct({ starproduct }) {
    return (
        <>
            <div className="starProduct">
                <div> <Link to={starproduct[0].url}> <img src={starproduct[0].image} alt="1st Product" /></Link></div>
                <div>
                    <Link to={starproduct[1].url}> <img src={starproduct[1].image} alt="1st Product" /></Link>
                    <Link to={starproduct[2].url}> <img src={starproduct[2].image} alt="1st Product" /></Link>
                    <Link to={starproduct[3].url}> <img src={starproduct[3].image} alt="1st Product" /></Link>

                </div>
                
            </div>
        </>
    )

} export default StarProduct;