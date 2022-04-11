import React from "react";
import PriceCard from "./PriceCard";
import { PriceWrap, PricingSection } from "./StyledComponents";
import TglBtn from "./TglBtn";

export default function OurPricing() {
  return (
    <PricingSection>
      <TglBtn />
      <PriceWrap>
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </PriceWrap>
    </PricingSection>
  );
}
