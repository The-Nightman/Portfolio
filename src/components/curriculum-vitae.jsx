import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { CvButton } from "../assets";
import cvPDF from "../assets/Keenan Brant CV.pdf";

const CurriculumVitae = () => {
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
        className="cv"
      >
        <span className="tags">&lt;curriculum vitae&gt;</span>
        <h2 className="cv-header" ref={ref}>
          <span>myCV(</span>
          <span className="func">&#40;&#41; =&gt; cv.pdf</span>
          <span>)</span>
        </h2>
        <div className="cv-button-container">
          <a
            href={cvPDF}
            title="Open CV"
            aria-label="Open Cv"
            target="_blank"
            draggable="false"
          >
            <CvButton className="cv-button" />
          </a>
        </div>
        <span className="tags">&lt;/curriculum vitae&gt;</span>
      </motion.section>
    </>
  );
};

export default CurriculumVitae;
