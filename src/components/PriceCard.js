import React from "react";
import { CardBox } from "./StyledComponents";

export default function PriceCard({ option }) {
  return (
    <CardBox>
      <h1>{option.name}</h1>
      <strong>{option.monthlyPrice}</strong>
      <hr />
      <ul>
        {option.features.map((feature) => (
          <li>
            {feature}
            <hr />
          </li>
        ))}
      </ul>
      <button>Learn More</button>
    </CardBox>
  );
}
