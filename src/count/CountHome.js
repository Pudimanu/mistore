import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Home/Nav";
// import Details from "./Details";
// import SuperChild from "./SuperChild";
import { createContext } from "react";

export const GloableInfo = createContext();

function CountHome() {

    // const navigate = useNavigate();
    // const location = useLocation();

    const [count, setCount] = useState(0);
    const [name, setName] = useState();
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    //const [data, setData] = useState([]);

    function increment() {
        setCount(count + 1)
    }
    function decriment() {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    function nameHolder(e) {
        let fname = e.target.value;
        setName(fname);
    }
    function XLsize(e) {
        let XlSize = e.target.value;
        setSize(XlSize)
    }

    function colorb(e) {
        let colorb = e.target.value;
        setColor(colorb)
    }



    function cartHandle() {

        const existingCartData = JSON.parse(localStorage.getItem("Count-Info")) || [];
        const cartItem = { name, count, size, color };
        existingCartData.push(cartItem);
        localStorage.setItem("Count-Info", JSON.stringify(existingCartData));

    }



    return (
        <>

            {/* <GloableInfo.Provider value={{ appdata: data}}> */}
            <Nav />
            <br /><br />
            <h1 style={{ textAlign: "center", padding: "20px" }}>Parents Componet</h1>
            <div className="count-block">
                <input type="text" placeholder="name" onChange={nameHolder} />
                <h1>Count:{count}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decriment}>-</button>

                <br /><br />
                <div className="size">
                    <input type="radio" name="sizetopping" onClick={XLsize} value="XL" id="regular" />
                    <label htmlFor="regular">XL</label>
                    <input type="radio" name="sizetopping" onClick={XLsize} value="S" id="medium" />
                    <label htmlFor="medium">S</label>
                    <input type="radio" name="sizetopping" onClick={XLsize} value="L" id="large" />
                    <label htmlFor="large">L</label>
                </div>

                <br /><br />
                <div className="color">
                    <input type="radio" name="topping" onClick={colorb} value="Black" id="Black" />
                    <label htmlFor="Black">Black</label>
                    <input type="radio" name="topping" onClick={colorb} value="Red" id="red" />
                    <label htmlFor="red">Red</label>
                    <input type="radio" name="topping" onClick={colorb} value="Yellow" id="yellow" />
                    <label htmlFor="yellow">Yellow</label>
                </div>
                <br /><br />
                <button onClick={cartHandle}> Add To Cart</button>
                <Link to="/Count/Details">View Details</Link>

            </div>

            {/* <Details />
                <SuperChild /> */}
            {/* </GloableInfo.Provider> */}


        </>
    )
} export default CountHome;