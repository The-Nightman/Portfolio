import {
  IntroAbout,
  AboutSkills,
  AboutPersonality,
  MadeWith,
  Navbar,
} from "../components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Navbar/>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.6 }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="about-page"
      >
      <div className="separator" />
      <span className="container-tags">&lt;container&gt;</span>
      <br />
      <span className="about-tags">&lt;About&gt;</span>
      <IntroAbout />
      <AboutSkills />
      <AboutPersonality />
      <span className="about-tags">&lt;/About&gt;</span>
      <br />
      <span className="container-tags">&lt;/container&gt;</span>
      <MadeWith />
      <footer>
        <p>Rev1.5 Built in 2023<br/>© 2023 Keenan Brant</p>
      </footer>
      </motion.div>
    </>
  );
};

export default About;
