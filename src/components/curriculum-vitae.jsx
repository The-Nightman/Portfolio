import { ReactComponent as CvButton } from "../assets/cvbutton.svg"

const CurriculumVitae = () => {
  return (
    <>
      <section className="cv">
        <span className="tags">&lt;curriculum vitae&gt;</span>
        <h2 className="cv-header">
          <span>my CV(</span>
          <span className="func">&lt;href="cv.pdf" download&gt;</span>
          <span>)</span>
        </h2>
        <a
          href="src/assets/Keenan Brant CV.pdf"
          title="Download CV"
          target="_blank"
          download
        >
          <CvButton/>
        </a>
        <span className="tags">&lt;/curriculum vitae&gt;</span>
      </section>
    </>
  );
};

export default CurriculumVitae;
