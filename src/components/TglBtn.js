import React from "react";
import { Toggle, ToggleWrap } from "./StyledComponents";

export default function TglBtn() {
  return (
    <ToggleWrap>
      <label htmlFor='tglBtn'>Annually</label>
      <Toggle id='tglBtn' onClick={()=>{console.log("Click")}}></Toggle>
      <label htmlFor='tglBtn'>Monthly</label>
    </ToggleWrap>
  );
}
