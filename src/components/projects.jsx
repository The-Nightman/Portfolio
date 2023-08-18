import { ProjectCard } from "./";
import { projects } from "../data/projects";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [width, setWidth] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const carousel = useRef();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.section
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 1 }}
        initial="hidden"
        animate={controls}
        className="projects"
      >
        <span className="tags">&lt;projects&gt;</span>
        <h2 ref={ref} className="projects-title">
          <span>projects</span>
          <span className="func">&#123;</span>
          <span>slider</span>
          <span className="func">&#125;</span>
        </h2>
        <motion.div
          variants={{
            visible: { x: 0 },
            hidden: { x: 200 },
          }}
          transition={{ duration: 1 }}
          initial="hidden"
          animate={controls}
          ref={carousel}
          className="projects-carousel-container"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="projects-cards"
          >
            {projects.map(
              ({ image, name, body, repo, live, fullstack }, index) => {
                return (
                  <motion.div className="carousel-item" key={index}>
                    <ProjectCard
                      image={image}
                      name={name}
                      body={body}
                      repo={repo}
                      live={live}
                      fullstack={fullstack}
                    />
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </motion.div>
        <span className="tags">&lt;/projects&gt;</span>
      </motion.section>
    </>
  );
};

export default Projects;
