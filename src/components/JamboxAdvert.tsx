import React from "react";
import Timer from "./Timer";
import "./styles.css"

export const JamboxAvert  = () => {
    return (
        <div className="jambox-advert-container">
        <div className="jambox-advert-wrapper">
          <div className="jambox-text">
            <p className="jambox-category">Categories</p>
            <h1 className="jambox-heading">Enhance Your Music Experience</h1>
            <div className="jambox-time">
            <Timer duration={23 * 5 * 60 * 60 * 1000} />
            </div>
            <button className="jambox-btn">
            Buy Now!
            </button>
          </div>
          <img className="jambox-img" src="./images/Jambox.png" alt="" />
        </div>
      </div>
    )
}