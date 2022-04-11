import React from "react";
import { Toggle, ToggleWrap } from "./StyledComponents";

export default function TglBtn({ toggle, setToggle }) {
  return (
    <ToggleWrap>
      <label htmlFor='tglBtn'>Annually</label>
      <Toggle
        id='tglBtn'
        onClick={() => {
          setToggle(!toggle);
        }}
        toggle={toggle}
      ></Toggle>
      <label htmlFor='tglBtn'>Monthly</label>
    </ToggleWrap>
  );
}
