import {
  IntroHome,
  CurriculumVitae,
  SkillsHome,
  Projects,
  MadeWith,
  Navbar,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="separator" />
      <span className="container-tags">&lt;container&gt;</span>
      <IntroHome />
      <CurriculumVitae />
      <SkillsHome />
      <Projects />
      <span className="container-tags">&lt;/container&gt;</span>
      <MadeWith />
      <footer>
        <p>Rev1.5 Built in 2023<br/>© 2023 Keenan Brant</p>
      </footer>
    </>
  );
};

export default Home;
