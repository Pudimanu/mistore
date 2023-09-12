import React, { useEffect, useState } from "react";
import Nav from "../components/Home/Nav";
import { Carousel } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();

            setProduct(data);

        }
        fetchProducts();
    }, [id]);
    //console.log(product.title)

    function addToCart(item){
        
        setCartData([...cartData, item]);
        console.log("cart data",cartData)
    }

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
                        <p>Added to Cart <Link to="">View Cart</Link> or <Link to="/">Continue Shopping.</Link></p>
                        <button type="submit" onClick={() => addToCart({ name: product.title, price: product.price })}>Add TO Cart</button>
                        <p>{product.description}</p>
                    </div>
                </>

            </div>
        </>
    )
} export default ProductDetails;