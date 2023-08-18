import {
  IntroHome,
  CurriculumVitae,
  SkillsHome,
  Projects,
  MadeWith,
  Navbar,
} from "../components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <motion.div
        transition={{ ease: "easeIn", duration: 0.6 }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="home-page"
      >
        <div className="separator" />
        <span className="container-tags">&lt;container&gt;</span>
        <IntroHome />
        <CurriculumVitae />
        <SkillsHome />
        <Projects />
        <span className="container-tags">&lt;/container&gt;</span>
        <MadeWith />
        <footer>
          <p>
            Rev1.5 Built in 2023
            <br />© 2023 Keenan Brant
          </p>
        </footer>
      </motion.div>
    </>
  );
};

export default Home;
