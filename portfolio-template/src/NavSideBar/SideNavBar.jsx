import React, { useContext, Fragment } from "react";
import { Burger } from "./Burger";
import { Menu } from "./Menu";
import { SideNavDispatch } from "../AppContext";

export function SideNavBar(props) {
  const dispatch = useContext(SideNavDispatch);
  return (
    <Fragment>
      <Burger open={props.open} callbackDispatch={dispatch} />
      <Menu open={props.open} />
    </Fragment>
  );
}
