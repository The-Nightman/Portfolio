import {
  IntroAbout,
  AboutSkills,
  AboutPersonality,
  MadeWith,
  Navbar,
} from "../components";
import { motion } from "framer-motion";

const About = () => {
  const generateDate = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <Navbar />
      <motion.div
        transition={{ ease: "easeIn", duration: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col w-11/12 md:w-9/12 mx-auto"
      >
        <span className="my-8 text-accent select-none" aria-hidden>
          {"<container>"}
        </span>
        <span className="my-8 text-accent select-none" aria-hidden>
          {"<About>"}
        </span>
        <IntroAbout />
        <AboutSkills />
        <AboutPersonality />
        <span className="my-8 text-accent select-none" aria-hidden>
          {"</About>"}
        </span>
        <span className="my-8 text-accent select-none" aria-hidden>
          {"</container>"}
        </span>
        <MadeWith />
        <footer className="mb-8 self-center">
          <p className="flex flex-col text-center">
            Rev2 Built in 2024
            <span>© {generateDate()} Keenan Brant</span>
          </p>
        </footer>
      </motion.div>
    </>
  );
};

export default About;
