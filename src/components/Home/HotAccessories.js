import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function HotAccessories({ music, musicCover, smartDevice, smartDeviceCover }) {

    return (
        <>
            <div className="HotAccessories">
                <Tabs>
                    <TabList>
                        <Tab> Music Store</Tab>
                        <Tab>Smart Devices</Tab>
                        <Tab>Home</Tab>
                        <Tab>Lifestyle</Tab>
                        <Tab>Mobile Accessories</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <img src={musicCover} alt="Cover" />
                        </div>
                        <div>
                            {
                                music && music.map((item)=>(
                                    <div className="HotItemCard">
                                    <img src={item.image} alt={`1 product`} />
                                    <p>{item.name}</p>
                                    <span>{item.price}</span>
                                </div>
                                ))  
                            }


                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div>
                            <img src={smartDeviceCover} alt="Cover" />
                        </div>
                        <div>
                            {
                                smartDevice && smartDevice.map((item)=>(
                                    <div className="HotItemCard">
                                    <img src={item.image} alt={`1 product`} />
                                    <p>{item.name}</p>
                                    <span>{item.price}</span>
                                </div>
                                ))  
                            }


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h1>Content 3</h1>
                    </TabPanel>


                </Tabs>
            </div>

        </>
    )
} export default HotAccessories;