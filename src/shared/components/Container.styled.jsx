import styled from "@emotion/styled";
import gorgBack from "images/gorg-back.jpg";

export const Container = styled.div`
  height: 89.4vh;
  background-image: url(${gorgBack});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  p,
  span,
  label,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    background-color: #fff;
    padding: 7px;
    border-radius: 15px 5px;

    transition: color 250ms ease-in-out, background-color 250ms ease-in-out, border-radius 250ms ease-in-out;

    &:hover,
    &:focus {
      background-color: #000;
      color: #fff;
      border-radius: 5px 15px;
    }
  }
`;