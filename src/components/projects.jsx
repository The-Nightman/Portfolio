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
        className="flex flex-col min-h-[70vh] overflow-x-hidden"
        tabIndex={-1}
      >
        <span className="text-accent my-16" aria-hidden>
          {"<projects>"}
        </span>
        <h2 ref={ref} className="mb-4 text-[2rem]/[1.2] text-primary font-bold">
          <span>projects</span>
          <span className="text-accent" aria-hidden>
            {"{"}
          </span>
          <span>slider</span>
          <span className="text-accent" aria-hidden>
            {"}"}
          </span>
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
          className="w-full"
        >
          <motion.ul
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 cursor-grab"
            whileTap={{ cursor: "grabbing" }}
          >
            {projects.map(
              ({ image, name, body, repo, live, fullstack }, index) => {
                return (
                  <motion.li key={name}>
                    <ProjectCard
                      image={image}
                      name={name}
                      body={body}
                      repo={repo}
                      live={live}
                      fullstack={fullstack}
                    />
                  </motion.li>
                );
              }
            )}
          </motion.ul>
        </motion.div>
        <span className="text-accent my-16" aria-hidden>
          {"</projects>"}
        </span>
      </motion.section>
    </>
  );
};

export default Projects;
