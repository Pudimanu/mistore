import React from "react";
import { Link } from "react-router-dom";


function Offers({Offer}) {
   
    return (
        <>
            <div className="offersSection">
                {
                    Offer.map((item, index) => (
                        <Link to={item.url} key={index}><img src={item.image} alt={item.url} /></Link>
                    ))
                }
            </div>
        </>
    )
} export default Offers;