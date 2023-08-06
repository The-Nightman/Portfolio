import { ReactComponent as GithubSVG } from "../assets/github.svg";
import { ReactComponent as LinkedinSVG } from "../assets/linkedin.svg";

const NavMobile = () => {
  return (
    <nav className="header-navbar-mobile">
      <ul>
        <div className="navbar-mobile">
          <li>
            <a href="/">K.dev()</a>
          </li>
          <li>
            <a href="/about">.about()</a>
          </li>
          <li>
            <a href="#">.email()</a>
          </li>
          <div className="navbar-icons-mobile">
            <li className="github-mobile" title="GitHub">
              <a href="https://github.com/The-Nightman" target="_blank">
                <GithubSVG />
              </a>
            </li>
            <li className="linkedin-mobile" title="LinkedIn">
              <a
                href="https://www.linkedin.com/in/keenan-brant/"
                target="_blank"
              >
                <LinkedinSVG />
              </a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
