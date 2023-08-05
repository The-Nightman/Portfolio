import { ReactComponent as HtmlSVG } from "../assets/html.svg"
import { ReactComponent as CssSVG } from "../assets/css.svg"
import { ReactComponent as JavaScriptSVG } from "../assets/javascript.svg"
import { ReactComponent as ReactSVG } from "../assets/react.svg"
import { ReactComponent as NodeSVG } from "../assets/node.svg"
import { ReactComponent as ExpressSVG } from "../assets/express.svg"
import { ReactComponent as PsqlSVG } from "../assets/psql.svg"

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
        <ul>
          <li>
            <HtmlSVG className="skills-svg"/>
          </li>
          <li>
          <CssSVG className="skills-svg"/>
          </li>
          <li>
          <JavaScriptSVG className="skills-svg"/>
          </li>
          <li>
          <ReactSVG className="skills-svg"/>
          </li>
          <li>
          <NodeSVG className="skills-svg"/>
          </li>
          <li>
          <ExpressSVG className="skills-svg"/>
          </li>
          <li>
          <PsqlSVG className="skills-svg"/>
          </li>
        </ul>
        <span className="tags">&lt;/skills&gt;</span>
      </section>
    </>
  );
};

export default SkillsHome;
