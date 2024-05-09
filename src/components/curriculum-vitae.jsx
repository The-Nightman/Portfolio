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
        className="flex flex-col min-h-[60vh]"
      >
        <span className="text-accent my-16 select-none" aria-hidden>
          {"<curriculum vitae>"}
        </span>
        <h2
          className="mb-8 text-primary text-[2rem]/[2.25rem] [word-spacing:-0.4rem] text-nowrap font-bold"
          ref={ref}
        >
          <span aria-hidden>
            <span>myCV(</span>
            <span className="text-accent">{"() => cv.pdf"}</span>
            <span>)</span>
          </span>
          <span className="sr-only">my cv / résumé</span>
        </h2>
        <a
          className="w-min"
          href={cvPDF}
          title="Open/Download CV in new tab"
          aria-label="Open/Download CV/résumé in new tab"
          target="_blank"
          draggable="false"
        >
          <CvButton className="fill-accent hover:fill-accentComplementary transition-colors duration-300" />
        </a>
        <span className="text-accent my-16 select-none" aria-hidden>
          {"</curriculum vitae>"}
        </span>
      </motion.section>
    </>
  );
};

export default CurriculumVitae;
