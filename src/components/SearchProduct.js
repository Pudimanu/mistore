import React, { useState } from "react";
import Nav from "./Home/Nav";

function SearchProduct() {

    const [searchResults, setSearchResults] = useState([]);


    async function search(key) {

        let result = await fetch(`https://dummyjson.com/products/search?q=${key}`)
        result = await result.json();
        setSearchResults(result);

    }


    //console.log(searchResults.products)

    return (
        <>
        <Nav/>
           
            <div className="search-block">
                <h1>Search Product</h1><br />
                <input type="text" onChange={(e) => search(e.target.value)} placeholder="Search Products" /><br />

            </div>

            <table>
                {searchResults.products && searchResults.products.length > 0 ? (
                    <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>discountPercentage</th>
                        <th>rating</th>
                        <th>stock</th>
                        <th>brand</th>
                        <th>category</th>
                        <th>thumbnail</th>
                        <th>images</th>

                    </tr>
                ) : null
                }
                <thead>

                </thead>
                <tbody>
                    {
                        searchResults.products && searchResults.products.length > 0 ? (
                            searchResults.products.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.discountPercentage}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                    <td><img src={item.thumbnail} alt={item.title} /></td>
                                    <td><img src={item.images[2]} alt={item.title} /></td>
                                </tr>
                            )
                        ): (
                            <p>Product Not Found</p>
                        )
                        }
                </tbody>
            </table>

        </>
    )
} export default SearchProduct;