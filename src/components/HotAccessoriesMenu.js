import React from "react";
import { Link, Outlet } from "react-router-dom";

function HotAccessoriesMenu() {
    return (
        <>
            <div className="HotAccessoriesMenu">
                <div className="HotAccesso">
                <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
                <Link className="HotAccessoriesLink" to="/smartdevices">Smart Devices</Link>
                <Link className="HotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
                <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
                <Outlet />
                </div>
            </div>
        </>
    )
} export default HotAccessoriesMenu;