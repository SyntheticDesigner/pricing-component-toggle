import React from "react";
import { Toggle, ToggleWrap } from "./StyledComponents";

export default function TglBtn() {
  return (
    <ToggleWrap>
      <label for='tglBtn'>Annually</label>
      <Toggle id='tglBtn'>TglBtn</Toggle>
      <label for='tglBtn'>Monthly</label>
    </ToggleWrap>
  );
}
