import {
  IntroAbout,
  AboutSkills,
  AboutPersonality,
  MadeWith,
} from "../components";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
