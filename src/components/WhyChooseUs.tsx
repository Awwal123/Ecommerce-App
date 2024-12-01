import React from "react";
import { Footer } from "./Footer";
export const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-us-container">
        <div className="dilevery">
          <div className="circle">
            <div className="circle2">
              <img src="./images/Delivery.png" alt="" />
            </div>
          </div>
          <p className="dilevery-text">FREE AND FAST DELIVERY</p>
          <p className="dilevery-sub-text">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="dilevery">
          <div className="circle">
            <div className="circle2">
              <img src="./images/Customer.png" alt="" />
            </div>
          </div>
          <p className="dilevery-text">24/7 CUSTOMER SERVICE</p>
          <p className="dilevery-sub-text">Friendly 24/7 customer support</p>
        </div>

        <div className="dilevery">
          <div className="circle">
            <div className="circle2">
              <img src="./images/Shield.png" alt="" />
            </div>
          </div>
          <p className="dilevery-text">MONEY BACK GUARANTEE</p>
          <p className="dilevery-sub-text">We return money within 30 days</p>
        </div>
      </div>
     
    </>
  );
};
