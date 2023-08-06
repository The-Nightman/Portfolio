import { ReactComponent as CvButton } from "../assets/cvbutton.svg";
import cvPDF from "../assets/Keenan Brant CV.pdf"

const CurriculumVitae = () => {
  return (
    <>
      <section className="cv">
        <span className="tags">&lt;curriculum vitae&gt;</span>
        <h2 className="cv-header">
          <span>myCV(</span>
          <span className="func"><br/>&lt;href="cv.pdf"&gt;<br/></span>
          <span>)</span>
        </h2>
        <a
          href={cvPDF}
          title="Open CV"
          aria-label="Open Cv"
          target="_blank"
        >
          <CvButton className="cv-button" />
        </a>
        <span className="tags">&lt;/curriculum vitae&gt;</span>
      </section>
    </>
  );
};

export default CurriculumVitae;
