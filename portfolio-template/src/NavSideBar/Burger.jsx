// burger.js
import React from "react";
import { bool } from "prop-types";
import { StyledBurger } from "./Burger.styled";

export function Burger({ open, callbackDispatch }) {
  return (
    <StyledBurger
      open={open}
      onClick={() => callbackDispatch({ type: "toggle" })}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

Burger.propTypes = {
  open: bool.isRequired
};
