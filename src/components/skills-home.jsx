import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
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
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 1100px)",
  });

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
        <span>/*view more skills in about*/</span><br />
        <span>{isMobileDevice ? "/*Hold to view*/" : "/*Hover to view*/"}</span>
        <div className="skills-svg-container">
          <ul>
            <Tooltip title="HTML" followCursor>
              <li>
                <HtmlSVG className="skills-svg" />
              </li>
            </Tooltip>
            <Tooltip title="CSS" followCursor>
            <li>
              <CssSVG className="skills-svg" />
            </li>
            </Tooltip>
            <Tooltip title="JavaScript" followCursor>
            <li>
              <JavaScriptSVG className="skills-svg" />
            </li>
            </Tooltip>
            <Tooltip title="React" followCursor>
            <li>
              <ReactSVG className="skills-svg" />
            </li>
            </Tooltip>
            <Tooltip title="Node JS" followCursor>
            <li>
              <NodeSVG className="skills-svg" />
            </li>
            </Tooltip>
            <Tooltip title="Express JS" followCursor>
            <li>
              <ExpressSVG className="skills-svg" />
            </li>
            </Tooltip>
            <Tooltip title="PostgreSql" followCursor>
            <li>
              <PsqlSVG className="skills-svg" />
            </li>
            </Tooltip>
          </ul>
        </div>
        <span className="tags">&lt;/skills&gt;</span>
      </motion.section>
    </>
  );
};

export default SkillsHome;
