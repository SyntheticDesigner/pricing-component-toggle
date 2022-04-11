import styled from "styled-components";

export const PricingSection = styled.section`
  position: relative;
  padding: 16px;
  background-color: hsl(${({theme})=>theme.vLightColor});
  background-image: url(${process.env.PUBLIC_URL + "/images/bg-top.svg"}),
    url(${process.env.PUBLIC_URL + "/images/bg-bottom.svg"});
  background-position: right top, left bottom;
  background-repeat: no-repeat, no-repeat;
  min-height: 100vh;
  & > h1 {
    padding: 16px 0px;
  }
`;

export const ToggleWrap = styled.div`
  padding: 0px 0px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Toggle = styled.button`
  position: relative;
  padding: 10px 20px;
  border: none;
  outline: none;
  background-image: linear-gradient(
    90deg,
    ${({theme})=>theme.gradient}
  );
  border-radius: 10px;
  margin: 0px 16px;
  &::before {
    content: "";
    height: 16px;
    width: 16px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 4px;
    border-radius: 50%;
    transform: translate(100%, -50%);
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 16px;
`;

export const CardBox = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px hsla(${({theme})=>theme.color}, 0.5);
  hr {
    border: none;
    border-bottom: 1px solid hsla(${({theme})=>theme.lightColor}, 0.5);
  }
  & > h1 {
    font-size: 1.2em;
    color: hsla(${({theme})=>theme.darkColor});
  }
  & > strong {
    display: inline-block;
    font-size: 3em;
    padding: 16px;
    color: rgba(0, 0, 0, 0.8);
  }
  & > ul {
    list-style-type: none;
    p {
      padding: 8px 0px;
      font-weight: 600;
      color: hsla(${({theme})=>theme.darkColor});
    }
  }
  & > button {
    background-image: linear-gradient(
      90deg,
      ${({theme})=>theme.gradient}
    );
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    margin: 32px 0px;
    border-radius: 4px;
    font-weight: 600;
    color: hsl(${({theme})=>theme.vLightColor})
  }
`;
