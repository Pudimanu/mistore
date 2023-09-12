import React from "react";
import Banner from "./Banner";
import Offers from "./Offers";
import Heading from "./Heading";
import data from '../../data/data.json'
import StarProduct from "./StarProduct";
import HotAccessoriesMenu from "../HotAccessoriesMenu";
import ProductReviews from "./ProductReviews";
import Videos from "./Videos";
import Slider from "./Slider";
import Footer from "../../Footer";
import Nav from "./Nav";


function Home(){
    return(
        <>
        <Nav />
        <Banner />
        <Offers Offer={data.offer}/>
        <Heading text="STAR PRODUCTS"/>
        <StarProduct starproduct={data.starProduct}  />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productreviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos  videos={data.videos}/>
        <Heading text="IN THE PRESS" />
        <Slider banner={data.banner}/>
        <Footer />
        


       
        
        </>
    )
}export default Home;