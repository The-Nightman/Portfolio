import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";

const NavMobile = () => {
  return (
    <nav className="header-navbar-mobile">
      <ul>
        <div className="navbar-mobile">
          <li>
            <Link to="/">K.dev()</Link>
          </li>
          <li>
            <Link to="/about">.about()</Link>
          </li>
          <li>
            <Link to="#">.email()</Link>
          </li>
          <div className="navbar-icons-mobile">
            <li className="github-mobile" title="GitHub">
              <Link to="https://github.com/The-Nightman" target="_blank">
                <GithubSVG />
              </Link>
            </li>
            <li className="linkedin-mobile" title="LinkedIn">
              <Link
                to="https://www.linkedin.com/in/keenan-brant/"
                target="_blank"
              >
                <LinkedinSVG />
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
