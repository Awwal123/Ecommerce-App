import React from "react";

export const Categories = () => {
  return (
    <div className="exclusive-wrapper ">
      <div className="flash-sales-container">
        <div className="name-tag-container ">
          <div className="name-tag"></div>
          <p className="today">Categories</p>
        </div>
        <div className="flash-sales-text">
          <p className="flash-text">Browse By Category</p>
        </div>
      </div>
      <div className="category-container">
        <div className="category-item">
          <img
            className="categoties-img"
            src="./images/Category-CellPhone.png"
            alt="cellPhone"
          />
          <p>Phones</p>
        </div>
        <div className="category-item">
          <img
            className="categoties-img"
            src="./images/Category-Computer.png"
            alt="cellPhone"
          />
          <p>Computers</p>
        </div>

        <div className="category-item">
          <img
            className="categoties-img"
            src="./images/Category-SmartWatch.png"
            alt="cellPhone"
          />
          <p>SmartWatch</p>
        </div>

        <div className="category-item">
          <img
            className="categoties-img"
            src="./images/Category-Camera.png"
            alt="cellPhone"
          />
          <p>Camera</p>
        </div>

        <div className="category-item">
          <img
            className="categoties-img"
            src="./images/Category-HeadPhone.png"
            alt="cellPhone"
          />
          <p>HeadPhone</p>
        </div>

        <div className="category-item">
          <img
            className="categoties-img"
            src="./images/Category-GamePad.png"
            alt="cellPhone"
          />
          <p>Gaming</p>
        </div>
      </div>

      <hr className="exclusive-horizontal-lines" />
    </div>
  );
};
