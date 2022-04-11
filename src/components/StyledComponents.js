import styled from "styled-components";

export const PricingSection = styled.section`
  position: relative;
  padding: 16px;
  background-color: ${({ theme }) => theme.bgMain};
  background-image: url(${process.env.PUBLIC_URL + "/images/bg-top.svg"}),
    url(${process.env.PUBLIC_URL + "/images/bg-bottom.svg"});
  background-position: right top, left bottom;
  background-repeat: no-repeat, no-repeat;
  min-height: 100vh;
  & > h1 {
    padding: 16px 0px;
    color: ${({ theme }) => theme.primaryColor};
    font-size: 2em;
  }
`;

export const ToggleWrap = styled.div`
  padding: 0px 0px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    cursor: pointer;
    font-weight: 600;
    color: ${({theme})=>theme.primaryColor};
  }
`;

export const Toggle = styled.button`
  position: relative;
  padding: 16px 28px;
  border: none;
  outline: none;
  background-image: linear-gradient(90deg, ${({ theme }) => theme.gradient});
  border-radius: 20px;
  margin: 0px 16px;
  cursor: pointer;
  &::before {
    content: "";
    height: 24px;
    width: 24px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 4px;
    border-radius: 50%;
    transition: transform 0.2s;
    transform: ${({ toggle }) =>
      toggle ? `translate(100%, -50%)` : `translate(0%, -50%)`};
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    gap: 32px;
    flex-direction: column;
  }
`;

export const CardBox = styled.div`
  width: 90%;
  max-width: 400px;
  background: ${({ theme }) => theme.bgCard};
  padding: 40px 32px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px ${({ theme }) => theme.shadow};
  @media (min-width: 750px) {
    transform: scale(${({ theme }) => theme.scale});
    ${({ theme }) => theme.zIndex && `z-index: ${theme.zIndex}`};
  }

  hr {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.lightColor};
  }
  & > h1 {
    font-size: 1.2em;
    color: ${({ theme }) => theme.primaryColor};
  }
  & > strong {
    display: inline-block;
    font-size: max(3em, min(5vw, 5em));
    padding: 16px;
    color: ${({ theme }) => theme.priceColor};
  }
  & > ul {
    list-style-type: none;
    p {
      padding: 8px 0px;
      font-weight: 600;
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  & > button {
    background: ${({ theme }) => theme.bgBtn};
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    margin: 32px 0px;
    border-radius: 4px;
    font-weight: 600;
    color: ${({ theme }) => theme.btnText};
    cursor: pointer;
    &:hover {
      background: none;
      outline: 1px solid ${({ theme }) => theme.btnText2};
      color: ${({ theme }) => theme.btnText2};
    }
  }
`;
