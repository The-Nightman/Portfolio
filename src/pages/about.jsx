import {
  IntroAbout,
  AboutSkills,
  AboutPersonality,
  MadeWith,
  Navbar,
} from "../components";

const About = () => {
  return (
    <>
      <Navbar/>
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
    </>
  );
};

export default About;
