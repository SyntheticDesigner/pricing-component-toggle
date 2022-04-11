import React from "react";
import PriceCard from "./PriceCard";
import { PriceWrap, PricingSection } from "./StyledComponents";
import TglBtn from "./TglBtn";

const options = [
  {
    name: "Basic",
    monthlyPrice: "$19.99",
    yearlyPrice: "$199.99",
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    name: "Professional",
    monthlyPrice: "$24.99",
    yearlyPrice: "$249.99",
    features: ["1TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    name: "Master",
    monthlyPrice: "$39.99",
    yearlyPrice: "$399.99",
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];

export default function OurPricing() {
  return (
    <PricingSection>
      <TglBtn />
      <PriceWrap>
        {options.map((option) => (
          <PriceCard option={option} />
        ))}
      </PriceWrap>
    </PricingSection>
  );
}
