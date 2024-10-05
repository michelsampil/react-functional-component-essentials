import React from "react";
import { Star } from "./Star";

export const Score = ({ amount }) => {
  const starsAmount = [...Array(amount).keys()];

  return (
    <div>
      {starsAmount.map((start) => {
        return <Star />;
      })}
    </div>
  );
};
