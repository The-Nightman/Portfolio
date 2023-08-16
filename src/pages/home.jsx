import {
  IntroHome,
  CurriculumVitae,
  SkillsHome,
  Projects,
  MadeWith,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="separator" />
      <span className="container-tags">&lt;container&gt;</span>
      <IntroHome />
      <CurriculumVitae />
      <SkillsHome />
      <Projects />
      <span className="container-tags">&lt;/container&gt;</span>
      <MadeWith />
    </>
  );
};

export default Home;
