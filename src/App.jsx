import { TriCol } from "./components";
import { Home, About } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./components/component.css";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fps_limit: 144,
          interactivity: {
            detect_on: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 240,
                links: {
                  opacity: 0.2,
                },
              },
            },
          },
          responsive: [
            {
              maxWidth: 1000,
              options: {
                particles: {
                  number: {
                    density: { enable: true, value_area: 800 },
                    value: 80,
                  },
                },
              },
            },
            {
              maxWidth: 2559,
              options: {
                interactivity: {
                  modes: {
                    grab: {
                      distance: 140,
                      links: {
                        opacity: 0.15,
                      },
                    },
                  },
                },
              },
            },
          ],
          particles: {
            color: { value: "#ffffff" },
            line_linked: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.15834868273005348,
              width: 1,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: { density: { enable: true, value_area: 1000 }, value: 50 },
            opacity: {
              anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
              random: false,
              value: 0.2250318795162649,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
              },
              polygon: { nb_sides: 5 },
              stroke: { color: "#000000", width: 0 },
              type: "circle",
            },
            size: {
              anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
              random: true,
              value: 3,
            },
          },
          polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: "",
          },
          retina_detect: true,
        }}
      />
      <TriCol />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
