import React from "react";
import data from '../../data/data.json'

function LifeStyle() {
    return (
        <>
            <div className="HotAccessories">
                <div>
                    <img src={data.hotAccessoriesCover.lifeStyle} alt="Cover" />
                </div>
                <div>
                    {
                        data.hotAccessories.lifeStyle.map((item, index) => (
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
} export default LifeStyle;