import React from "react";
import data from '../../data/data.json'

function SmartDevices(){
    return(
        <>
        <div className="HotAccessories">
                <div>
                    <img src={data.hotAccessoriesCover.smartDevice} alt="Cover" />
                </div>
                <div>
                    {
                        data.hotAccessories.smartDevice.map((item, index) => (
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
}export default SmartDevices;