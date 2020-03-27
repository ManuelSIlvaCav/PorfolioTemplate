import React from "react";
import Particles from "react-particles-js";
import { ThemeConsumer } from "styled-components";

export default function ParticleComponent() {
  return (
    <ThemeConsumer>
      {theme => (
        <Particles
          height="98vh"
          params={{
            particles: {
              color: {
                value: `${theme.secondaryDark}`
              },
              shape: {
                type: "circle",

                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 600
                }
              },
              opacity: {
                value: 0.7,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.2,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 15,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 5,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: true
              }
            },
            retina_detect: true
          }}
        />
      )}
    </ThemeConsumer>
  );
}
