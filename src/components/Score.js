import React from "react";
import { Star } from "./Star";

export const Score = ({ amount }) => {
  const starsAmount = [...Array(amount).keys()];

  return (
    <div>
      {starsAmount.map((_start, index) => (
        <Star key={index} />
        /* it's  👆 important to use the "key" prop to let react properly detect changes
        if we don't have an id per each iterable item which is the ideal scenario,
        we can use the map index instead  */
      ))}
    </div>
  );
};
