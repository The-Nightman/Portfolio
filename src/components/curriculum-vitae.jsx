import { CvButton } from "../assets";
import cvPDF from "../assets/Keenan Brant CV.pdf"

const CurriculumVitae = () => {
  return (
    <>
      <section className="cv">
        <span className="tags">&lt;curriculum vitae&gt;</span>
        <h2 className="cv-header">
          <span>myCV(</span>
          <span className="func">&#40;&#41; =&gt; cv.pdf</span>
          <span>)</span>
        </h2>
        <div className="cv-button-container">
        <a
          href={cvPDF}
          title="Open CV"
          aria-label="Open Cv"
          target="_blank"
        >
          <CvButton className="cv-button" />
        </a>
        </div>
        <span className="tags">&lt;/curriculum vitae&gt;</span>
      </section>
    </>
  );
};

export default CurriculumVitae;
