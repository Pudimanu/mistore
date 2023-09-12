import React from "react";
import data from '../../data/data.json'


function MobileAccessories(){
    return(
        <>
        <div className="HotAccessories">
                <div>
                    <img src={data.hotAccessoriesCover.mobileAccessories} alt="Cover" />
                </div>
                <div>
                    {
                        data.hotAccessories.mobileAccessories.map((item, index) => (
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
}export default MobileAccessories;