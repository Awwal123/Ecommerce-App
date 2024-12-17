import React from "react";

export const Categories = () => {
  // Define an array of categories with image src, alt, and name
  const categories = [
    {
      image: "./images/Category-CellPhone.png",
      alt: "cellPhone",
      name: "Phones",
    },
    {
      image: "./images/Category-Computer.png",
      alt: "computer",
      name: "Computers",
    },
    {
      image: "./images/Category-SmartWatch.png",
      alt: "smartWatch",
      name: "SmartWatch",
    },
    {
      image: "./images/Category-Camera.png",
      alt: "camera",
      name: "Camera",
    },
    {
      image: "./images/Category-Headphone.png",
      alt: "headphone",
      name: "HeadPhone",
    },
    {
      image: "./images/Category-Gamepad.png",
      alt: "game-pad",
      name: "Gaming",
    },
  ];

  return (
    <div className="exclusive-wrapper">
      <div className="flash-sales-container">
        <div className="name-tag-container">
          <div className="name-tag"></div>
          <p className="today">Categories</p>
        </div>
        <div className="flash-sales-text">
          <p className="flash-text">Browse By Category</p>
        </div>
      </div>
      <div className="category-container">
        {/* Map through the categories array */}
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img
              className="categoties-img"
              src={category.image}
              alt={category.alt}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <hr className="exclusive-horizontal-lines" />
    </div>
  );
};
