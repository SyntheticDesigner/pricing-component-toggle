import React from "react";
import { CardBox } from "./StyledComponents";

export default function PriceCard({ option, toggle }) {
  return (
    <CardBox>
      <h1>{option.name}</h1>
      <strong>{toggle?option.monthlyPrice:option.yearlyPrice}</strong>
      <hr />
      <ul>
        {option.features.map((feature, index) => (
          <li key={index}>
            <p>{feature}</p>
            <hr />
          </li>
        ))}
      </ul>
      <button>LEARN MORE</button>
    </CardBox>
  );
}
