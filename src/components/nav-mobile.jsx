import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";

const NavMobile = () => {
  return (
    <nav className="header-navbar-mobile">
      <ul>
        <div className="navbar-mobile">
          <li>
            <Link to="/" draggable="false">K.dev()</Link>
          </li>
          <li>
            <Link to="/about" draggable="false">.about()</Link>
          </li>
          <li>
            <Link to="#" draggable="false">.email()</Link>
          </li>
          <div className="navbar-icons-mobile">
            <li className="github-mobile" title="GitHub">
              <Link to="https://github.com/The-Nightman" target="_blank" draggable="false">
                <GithubSVG />
              </Link>
            </li>
            <li className="linkedin-mobile" title="LinkedIn">
              <Link
                to="https://www.linkedin.com/in/keenan-brant/"
                target="_blank"
                draggable="false"
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
