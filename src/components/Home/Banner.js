import React from "react";
import { Carousel } from 'react-bootstrap'
import logo from '../../data/data.json'

function Banner() {
    return (
        <>
            <Carousel fade auto>
                {
                    logo.banner.start.map((item)=>(
                        <Carousel.Item>
                        <img src={item} alt="" />
                    </Carousel.Item> 
                    ))
                }
               
            </Carousel>
        </>
    )
} export default Banner;