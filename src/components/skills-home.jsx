import {
  HtmlSVG,
  CssSVG,
  JavaScriptSVG,
  ReactSVG,
  NodeSVG,
  ExpressSVG,
  PsqlSVG,
} from "../assets";

const SkillsHome = () => {
  return (
    <>
      <section className="skills">
        <span className="tags">&lt;skills&gt;</span>
        <h2 className="skills-title">
          <span>developing</span>
          <span className="func">.skills(</span>
          <span>in</span>
          <span className="func">)</span>
        </h2>
        <span>/*view more skills in about*/</span>
        <div className="skills-svg-container">
          <ul>
            <li>
              <HtmlSVG className="skills-svg" />
            </li>
            <li>
              <CssSVG className="skills-svg" />
            </li>
            <li>
              <JavaScriptSVG className="skills-svg" />
            </li>
            <li>
              <ReactSVG className="skills-svg" />
            </li>
            <li>
              <NodeSVG className="skills-svg" />
            </li>
            <li>
              <ExpressSVG className="skills-svg" />
            </li>
            <li>
              <PsqlSVG className="skills-svg" />
            </li>
          </ul>
        </div>
        <span className="tags">&lt;/skills&gt;</span>
      </section>
    </>
  );
};

export default SkillsHome;
