import React from "react";
import data from '../../data/data.json'

function Music() {
    return (
        <>
            <div className="HotAccessories">
                <div>
                    <img src={data.hotAccessoriesCover.music} alt="Cover" />
                </div>
                <div>
                    {
                        data.hotAccessories.music.map((item, index) => (
                            <div className="HotItemCard">
                                <img src={item.image} alt={`${index} product`} />
                                <p>{item.name}</p>
                                <span>{item.price}</span>

                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
} export default Music;