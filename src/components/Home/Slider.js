import React from "react";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider({ banner }) {
    let sortitem =  banner.end.slice(6,10)
    return (
        <Carousel fade keyboard={true}>
            {
                sortitem.map((item, index) => (
                    <Carousel.Item>
                        <img src={item.image} alt={`${index} banner`} />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read more</u>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))
            }
        </Carousel>
    );
}

export default Slider;