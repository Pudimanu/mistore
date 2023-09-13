import React, { useEffect } from "react";
import Nav from "../components/Home/Nav";

function Cart() {

    let cartInfo = JSON.parse(localStorage.getItem("Cart-Info"));
    //console.log(cartInfo)



    function RemoveCart(index){        
        cartInfo.splice(index, 1)
       
        localStorage.setItem("Cart-Info",JSON.stringify(cartInfo))
    }

    return (
        <>
            <Nav />
            <h1 style={{ textAlign: "center", padding: "20px" }}>My Cart</h1>

            <div className="cart-block">
                <div className="left">
                    {
                        cartInfo && cartInfo.length > 0 ? (
                            cartInfo.map((item, index) => (
                                <div className="innerleft" key={index}>
                                    <img src={item.Image} alt="" />
                                    <div className="pname">
                                        <p>{item.Name}<br /><b>{item.productsize}</b></p>
                                    </div>
                                    <div className="dicount">
                                        <p><b>Price</b>{item.Price} <strike>{item.Discount}</strike></p>
                                    </div>
                                    <div className="quantity">
                                        <p><b>Quantity</b>{item.count} </p>
                                    </div>
                                    <div className="total">
                                        <p><b>Total</b>{item.Price * item.count}</p>
                                    </div>
                                    <div className="remove" onClick={() => RemoveCart(index)}>
                                        <span>remove</span>
                                    </div>

                                </div>
                            ))
                        ) : null
                    }

                </div>
            </div>

        </>
    )
} export default Cart;