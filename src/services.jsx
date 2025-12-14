import React from "react";
import "./services.css";
function Services(){
    return (
        <div className="ServiesOptions">
            <h2>Our Services</h2>
            <div className="Options">
                <div className="AirShipping">
                    <div className="imgContainer">
                        <img src="./imgs/Airplane-Transponder.jpg" alt="AirShipping" width={350} />
                    </div>
                    <h3>Air Shipping</h3>
          
                </div>
                <div className="Landshipping">
                    <div className="imgContainer">
                        <img src="./imgs/landshipping.jpeg" alt="landshipping" width={350} />
                    </div>
                    <h3>Land Shipping</h3>
                </div>
                <div className="seashipping">
                    <div className="imgContainer">
                        <img src="./imgs/seashipping.jpeg" alt="seashipping" width={350} />
                    </div>
                    <h3>Sea Shipping</h3>
                </div>
            </div>
        </div>
    )
}


export default Services;