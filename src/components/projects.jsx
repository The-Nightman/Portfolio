import { ProjectCard } from "./";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <section className="projects">
        <span className="tags">&lt;projects&gt;</span>
        <h2 className="projects-title">
          <span>projects</span>
          <span className="func">&#123;</span>
          <span>slider</span>
          <span className="func">&#125;</span>
        </h2>
        <motion.div
          ref={carousel}
          className="projects-carousel-container"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="projects-cards"
          >
            {projects.map(({ image, name, body, repo, live }, index) => {
              return (
                <motion.div className="carousel-item" key={index}>
                  <ProjectCard
                    image={image}
                    name={name}
                    body={body}
                    repo={repo}
                    live={live}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        <span className="tags">&lt;/projects&gt;</span>
      </section>
    </>
  );
};

export default Projects;
