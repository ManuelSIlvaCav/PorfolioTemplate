import React from "react";
import { StyledHome } from "./Home.styled";
import ParticleComponent from "../../components/ParticleComponent";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Home(props) {
  return (
    <>
      <ParticleComponent customHeight={"98vh"} />
      <StyledHome open={props.open}>
        <div className="content-grid">
          <div className="my-grid-container">
            <h1 className="in-line-title">Hi, I am </h1>
            <h1 className="in-line-title-highlight">Manuel Silva</h1>
            <h2>
              I am a Software Engineer from Chile. Expertise in Cloud solutions,
              full stack development and fan of real problem solving
            </h2>
            <h3>You can find me in...</h3>
          </div>
          <div className="my-grid-container">
            <div className="rrssicons">
              <div className="my-grid-container">
                <Link to={""}>
                  <FaLinkedinIn className="icons" size={60} />
                </Link>
              </div>
              <div className="my-grid-container">
                <Link to={""}>
                  <FaGithub className="icons" size={60} />
                </Link>
              </div>
              <div className="my-grid-container">
                <Link to={""}>
                  <FaInstagram className="icons" size={60} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </StyledHome>
    </>
  );
}
