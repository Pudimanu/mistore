import React, { useEffect, useState } from "react";
import Nav from "../components/Home/Nav";
import { Carousel } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [productsize, setProductSize] = useState([]);
    const [count, setCount] = useState(1);



    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();

            setProduct(data);

        }
        fetchProducts();
    }, [id]);
    //console.log(product.title)




    function AddToCart(item) {
        //setCartData(item)

        const existingCartData = JSON.parse(localStorage.getItem("Cart-Info")) || [];
        existingCartData.push(item);
        localStorage.setItem("Cart-Info", JSON.stringify(existingCartData));
    }

    function Productsize(e) {
        let itemsize = e.target.value;
        setProductSize(itemsize)
    }

    function increment(){
        setCount(count + 1);
    }
    function decriment(){
        if(count !== 1){
            setCount(count -1)
        }
    }


    //console.log("Product Size",productsize,"details",cartData)

    return (
        <>
            <Nav />
            <h1 style={{ textAlign: "center", padding: "20px" }}>Product Details</h1>

            <div className="cartsection">
                <>

                    <div className="leftslider">
                        <Carousel auto>
                            {
                                product.images && product.images.length > 0 ? (
                                    product.images.map((item) => (
                                        <Carousel.Item>
                                            <img src={item} alt="" />
                                        </Carousel.Item>
                                    ))
                                ) : null

                            }

                        </Carousel>
                    </div>

                    <div className="product-box">
                        {product.stock > 0 ? <span className="instock">In stock</span> : <span className="instock">Out stock</span>}  <br />
                        <span>{product.rating} reviews</span>  <br />
                        <h1>{product.title}</h1>
                        <h5>{product.price} <strike>{product.discountPercentage}</strike></h5>

                        <div className="size">
                            <input type="radio" name="sizetopping" onClick={Productsize} value="XS" id="regular" />
                            <label htmlFor="regular">XS</label>
                            <input type="radio" name="sizetopping" onClick={Productsize} value="S" id="medium" />
                            <label htmlFor="medium">S</label>
                            <input type="radio" name="sizetopping" onClick={Productsize} value="L" id="large" />
                            <label htmlFor="large">L</label>
                            <input type="radio" name="sizetopping" onClick={Productsize} value="M" id="large1" />
                            <label htmlFor="large1">M</label>
                            <input type="radio" name="sizetopping" onClick={Productsize} value="XL" id="large2" />
                            <label htmlFor="large2">XL</label>
                            <input type="radio" name="sizetopping" onClick={Productsize} value="2XL" id="large3" />
                            <label htmlFor="large3">2XL</label>
                            <input type="radio" name="sizetopping" onClick={Productsize} value="3XL" id="large4" />
                            <label htmlFor="large4">3XL</label>
                            <input type="radio" name="sizetopping" onClick={Productsize} value="4XL" id="large5" />
                            <label htmlFor="large5">4XL</label>
                        </div>

                        <div className="quantity"><span>Quantity : </span>
                            <button onClick={increment}>+</button>
                            <input type="text" value={count} />
                            <button onClick={decriment}>-</button>
                        </div>
                        

                        <p>Added to Cart <Link to="/cart">View Cart</Link> or <Link to="/products">Continue Shopping.</Link></p>

                        <button type="submit" onClick={(e) => AddToCart({ Name: product.title, Image: product.images[0], Price: product.price, Stock: product.stock, Discount: product.discountPercentage, productsize, count })}>ADD TO BAG</button>
                        <p>{product.description}</p>
                    </div>
                </>

            </div>
        </>
    )
} export default ProductDetails;