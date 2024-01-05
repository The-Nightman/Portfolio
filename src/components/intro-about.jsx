import { GithubSVG, LinkedinSVG, CvButton } from "../assets";
import cvPDF from "../assets/Keenan Brant CV.pdf";

const IntroAbout = () => {
  return (
    <>
      <section className="about-personal">
        <h1 className="about-title">Keenan Brant</h1>
        <div className="about-ghub-linkedin">
          <a
            href="https://github.com/The-Nightman"
            title="GitHub"
            aria-label="GitHub"
            target="_blank"
            draggable="false"
          >
            <GithubSVG className="about-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/keenan-brant/"
            title="Linked in"
            aria-label="Linked in"
            target="_blank"
            draggable="false"
          >
            <LinkedinSVG className="about-linkedin" />
          </a>
        </div>
        <div className="about-cv">
          <a
            href={cvPDF}
            title="Open CV"
            aria-label="Open Cv"
            target="_blank"
            draggable="false"
          >
            <CvButton className="about-cv-button" />
          </a>
        </div>
        <p>
          Junior Software Developer
          <br />
          based in the UK
        </p>
        <p>// Music and Gym addict, concept art fan and video game fiend</p>
      </section>
    </>
  );
};

export default IntroAbout;
