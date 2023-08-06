import { IntroAbout, AboutSkills, AboutPersonality, MadeWith } from "../components"

const About = () => {
  
    return (
      <>
      <span className="container-tags">&lt;container&gt;</span>
      <span className="tags">&lt;About&gt;</span>
      <IntroAbout/>
      <AboutSkills/>
      <AboutPersonality/>
      <span className="tags">&lt;/About&gt;</span>
      <span className="container-tags">&lt;/container&gt;</span>
      <MadeWith/>
      </>
    )
  }
  
export default About
  