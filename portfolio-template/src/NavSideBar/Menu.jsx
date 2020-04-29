// menu.js
import React, { Fragment } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import avatarImage from "../assets/avatarImage.jpg";
import { IoIosPaper } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaBookReader } from "react-icons/fa";

import { Link } from "react-router-dom";

export function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <Fragment>
        <div className="avatar">
          <img src={avatarImage} alt="text" className="imgAvatar" />
        </div>
        <br />
        <Fragment>
          <Link to="/">
            <GoHome /> Home
          </Link>
          <Link to="/about">
            <FaBookReader /> About Me
          </Link>
          <Link to="/resume">
            <IoIosPaper /> Resume
          </Link>
          <Link to="/contact">
            <IoIosPaper /> Contact
          </Link>
          <a href="/">
            <span role="img" aria-label="price">
              &#x1f4b8;
            </span>
            Pricing
          </a>
          <a href="/">
            <span role="img" aria-label="contact">
              &#x1f4e9;
            </span>
            Contact
          </a>
        </Fragment>
      </Fragment>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired
};
