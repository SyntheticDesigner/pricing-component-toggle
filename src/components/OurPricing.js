import React, { useState } from "react";
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
  bgMain: "hsl(240, 78%, 98%)",
  gradient: `hsl(236, 72%, 79%),hsl(237, 63%, 64%)`,
  primaryColor: "hsl(233, 13%, 49%)",
  light: {
    lightColor: "hsla(234, 14%, 74%, 0.5)",
    primaryColor: "hsl(233, 13%, 49%)",
    shadow: "hsla(233, 13%, 49%, 0.3)",
    priceColor: "hsl(232, 13%, 33%)",
    bgCard: `white`,
    btnText: "hsl(240, 78%, 98%)",
    bgBtn: `linear-gradient(
      90deg, hsl(236, 72%, 79%),hsl(237, 63%, 64%))`,
    scale: "1",
  },
  dark: {
    lightColor: "hsla(234, 14%, 80%, 0.5)",
    primaryColor: "hsl(240, 78%, 98%)",
    shadow: "hsla(233, 13%, 49%, 0.3)",
    priceColor: "white",
    bgCard: `linear-gradient(
      180deg, hsl(236, 72%, 79%),hsl(237, 63%, 64%))`,
    btnText: "hsl(237, 63%, 64%)",
    bgBtn: `hsl(240, 78%, 98%)`,
    scale: "1.1",
    zIndex: "2",
  },
};

export default function OurPricing() {
  const [toggle, setToggle] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <PricingSection>
        <h1>Our Pricing</h1>
        <TglBtn toggle={toggle} setToggle={setToggle} />
        <PriceWrap>
          {options.map((option, index) =>
            index % 2 ? (
              <ThemeProvider theme={theme.dark}>
                <PriceCard key={option.name} option={option} toggle={toggle} />
              </ThemeProvider>
            ) : (
              <ThemeProvider theme={theme.light}>
                <PriceCard key={option.name} option={option} toggle={toggle} />
              </ThemeProvider>
            )
          )}
        </PriceWrap>
      </PricingSection>
    </ThemeProvider>
  );
}
