import IntroHome from "../components/intro-home"
import CurriculumVitae from "../components/curriculum-vitae"
import SkillsHome from "../components/skills-home"
import Projects from "../components/projects"
import MadeWith from "../components/made-with"

const Home = () => {
  
    return (
      <>
      <IntroHome/>
      <CurriculumVitae/>
      <SkillsHome/>
      <Projects/>
      <MadeWith/>
      <footer>
        <p>Rev1.5 Built in 2023<br/>© 2023 Keenan Brant</p>
      </footer>
      </>
    )
  }
  
export default Home
  