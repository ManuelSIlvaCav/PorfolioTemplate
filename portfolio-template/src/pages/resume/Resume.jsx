import React, { useState, useEffect, useRef } from "react";

import ParticleComponent from "../../components/ParticleComponent";

import { StyledResume } from "./Resume.style";

export function Resume(props) {
  return (
    <>
      <StyledResume open={props.open}>
        <div className="particle-container">
          <ParticleComponent customHeight={"200vh"} />
        </div>
        <div className="content-grid">
          <div className="title-div-container">
            <h1 className="resume-title">Resume</h1>
            <div className="custom-separator-decorator"></div>
          </div>
          <div className="main-grid-content">
            <div className="particular-content-steps">
              <div className="stepper"></div>
              <div className="content"></div>
              <div className="stepper"></div>
              <div className="content"></div>
            </div>
            <div className="particular-content-steps"></div>
          </div>
        </div>
      </StyledResume>
    </>
  );
}
