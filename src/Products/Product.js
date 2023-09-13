import React, { useEffect, useState } from "react";
import Nav from "../components/Home/Nav";
import { Link } from "react-router-dom";
import slugify from "slugify";

function Product() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`https://dummyjson.com/products`);
            const data = await response.json();
            setProduct(data);
            
        }
        fetchProducts();
    }, []);


    
    return (
        <>
            <Nav />
            <h1 style={{ textAlign: "center", padding: "20px" }}>All Products List</h1>

            
            <div className="productsection">
                {
                    product.products && product.products.length > 0 ? (
                        product.products.map((item) => (
                            <>
                                <div className="product-box">
                                    <Link to={`/products/${item.id}/${slugify(item.title)}`}>                                    
                                        <span className="stock">{item.stock} In Stock </span>
                                        <img src={item.images[1]} alt={item.title} />
                                        <h4 style={{ textAlign: "center" }}>{item.title}</h4>
                                        <h5 style={{ textAlign: "center" }}>{item.price} <strike>{item.discountPercentage}</strike></h5>
                                    </Link>
                                </div>
                            </>
                        ))

                    ) : null
                }

            </div>
        </>
    )

} export default Product;