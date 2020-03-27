import React, { useState, Fragment, useEffect } from "react";
import { Burger } from "./Burger";
import { Menu } from "./Menu";

export function SideNavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 600);
  }, []);

  return (
    <Fragment>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </Fragment>
  );
}
