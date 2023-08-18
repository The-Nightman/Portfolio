import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  HtmlSVG,
  CssSVG,
  JavaScriptSVG,
  ReactSVG,
  NodeSVG,
  ExpressSVG,
  PsqlSVG,
} from "../assets";

const SkillsHome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
        className="skills"
      >
        <span className="tags">&lt;skills&gt;</span>
        <h2 ref={ref} className="skills-title">
          <span>developing</span>
          <span className="func">.skills(</span>
          <span>in</span>
          <span className="func">)</span>
        </h2>
        <span>/*view more skills in about*/</span>
        <div className="skills-svg-container">
          <ul>
            <li>
              <HtmlSVG className="skills-svg" />
            </li>
            <li>
              <CssSVG className="skills-svg" />
            </li>
            <li>
              <JavaScriptSVG className="skills-svg" />
            </li>
            <li>
              <ReactSVG className="skills-svg" />
            </li>
            <li>
              <NodeSVG className="skills-svg" />
            </li>
            <li>
              <ExpressSVG className="skills-svg" />
            </li>
            <li>
              <PsqlSVG className="skills-svg" />
            </li>
          </ul>
        </div>
        <span className="tags">&lt;/skills&gt;</span>
      </motion.section>
    </>
  );
};

export default SkillsHome;
