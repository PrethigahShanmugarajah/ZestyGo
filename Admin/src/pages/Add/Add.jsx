import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <div className="add">
      <div className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="Upload Food Image" />
            {/* <i className="bi bi-cloud-arrow-up"></i> */}
          </label>
          <input type="file" id="image" hidden required />
        </div>

        <div className="add-product-name flex-col">
          <p>Food Name</p>
          <input
            type="text"
            name="name"
            placeholder="e.g. Chicken Fried Rice"
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Food Description</p>
          <textarea
            type="text"
            name="description"
            rows="6"
            placeholder="e.g. Spicy chicken fried rice with vegetables and egg"
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" id="">
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
