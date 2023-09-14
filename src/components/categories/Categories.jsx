import React from "react";
import Category from "../category/Category";
import "./Categories.scss";
import categories from "./data";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            imageUrl={category.imageUrl}
            title={category.title.toLocaleUpperCase()}
          />
        );
      })}
    </div>
  );
};

export default Categories;
