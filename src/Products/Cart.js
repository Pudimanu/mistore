import React, { useEffect, useState } from "react";
import Nav from "../components/Home/Nav";
import { Link } from "react-router-dom";

function Cart() {

    let cartInfo = JSON.parse(localStorage.getItem("Cart-Info"));
    //console.log(cartInfo)
    const [subtotal, setSubtotal] = useState(0);


    useEffect(() => {
        // Calculate subtotal when cartInfo changes
        if (cartInfo && cartInfo.length > 0) {
          const calculatedSubtotal = cartInfo.reduce((total, item) => {
            return total + item.Price * item.count;
          }, 0);
    
          setSubtotal(calculatedSubtotal);
        } else {
          setSubtotal(0);
        }
      }, [cartInfo]);
    


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
                <div className="cartsummary">
                    <h4>Cart Summary</h4>
                    <h6><span>Subtotal</span><b>{subtotal}</b></h6>
                    <h5><span>Total</span><b>{subtotal}</b></h5>
                    <Link to="/products">CONTINUE SHOPPING</Link>
                    <button type="submit">CHECKOUT</button>
                </div>
            </div>

        </>
    )
} export default Cart;