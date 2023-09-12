import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from '../../data/data.json'
import { useNavigate } from "react-router-dom";



const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
</svg>;

function Nav() {

    let navigate = useNavigate();
    let User = JSON.parse(localStorage.getItem("User-Info"));
    
    const [searchResults, setSearchResults] = useState([]);

    async function search(key) {

        let result = await fetch(`https://dummyjson.com/products/search?q=${key}`)
        result = await result.json();
        console.log(result);
        setSearchResults(result);
    }

    function logOut(){
        localStorage.clear();
        navigate("/register")
    }


    return (
        <>
            <div className="nav">
                <div className="logo">
                    <Link to="/">
                        <img id="logoImage" src={data.logo} alt="Not" />
                    </Link>
                </div>

                <Link className="navlinks" to="/searchproduct">Search</Link>
                <Link className="navlinks" to="/Count">Count</Link>
                <Link className="navlinks" to="/products">Product</Link>
                <Link className="navlinks" to="/eww">Laptops</Link>
                <Link className="navlinks" to="/eed">Fitness &amp; Lifestyle</Link>

                {
                    localStorage.getItem("User-Info") ?
                        <>
                            <Link className="navlinks" to="/MiPhones">Mi Phones</Link>
                            <Link className="navlinks" to="">{User && User.name}</Link>
                            <Link className="navlinks" onClick={logOut} to="/register">LogOut</Link>
                           
                        </>
                        :
                        <>
                            <Link className="navlinks" to="/login">Login</Link>
                            <Link className="navlinks" to="/register">Register</Link>
                        </>
                }




                <div className="searchbox">

                    <input type="text" onChange={(e) => search(e.target.value)} placeholder="Search Products" />
                    {searchIcon}
                </div>
            </div>
            <table>
                {
                    searchResults.products && searchResults.products.length > 0 ? (
                        <thead>
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
                        </thead>
                    ) : (null)
                }

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

                        ) : null
                    }


                </tbody>
            </table>
        </>
    )
} export default Nav;