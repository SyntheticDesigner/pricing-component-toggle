import React from "react";
import PriceCard from "./PriceCard";
import { PriceWrap, PricingSection } from "./StyledComponents";
import TglBtn from "./TglBtn";
import { ThemeProvider } from "styled-components";

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
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    name: "Master",
    monthlyPrice: "$39.99",
    yearlyPrice: "$399.99",
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];
//colors are hsla
const theme = {
  vLightColor: "240, 78%, 98%",
  lightColor: "234, 14%, 74%",
  color: "233, 13%, 49%",
  darkColor: "232, 13%, 33%",
  gradient: `hsl(236, 72%, 79%),hsl(237, 63%, 64%)`,
};

export default function OurPricing() {
  return (
    <ThemeProvider theme={theme}>
      <PricingSection>
        <h1>Our Pricing</h1>
        <TglBtn />
        <PriceWrap>
          {options.map((option) => (
            <PriceCard key={option.name} option={option} />
          ))}
        </PriceWrap>
      </PricingSection>
    </ThemeProvider>
  );
}
