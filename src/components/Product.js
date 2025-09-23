import React from "react";
import { Score } from "./Score";
import classes from "./Card.module.css";

export const Product = ({ title, productImage, scoreAmount }) => {
  return (
    <div>
      <h3>{title || "No description"}</h3>
      <img src={productImage} />
      <Score amount={scoreAmount || 5} />
    </div>
  );
};
