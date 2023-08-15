import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";

const NavDesktop = () => {
  return (
    <nav className="header-navbar-desktop">
      <ul>
        <li>
          <Link to="/">K.dev()</Link>
        </li>
        <li>
          <Link to="/about">.about()</Link>
        </li>
        <li>
          <Link to="#">.email()</Link>
        </li>
        <li className="github-desktop" title="GitHub">
          <Link to="https://github.com/The-Nightman" target="_blank">
            <GithubSVG />
          </Link>
        </li>
        <li className="linkedin-desktop" title="LinkedIn">
          <Link to="https://www.linkedin.com/in/keenan-brant/" target="_blank">
            <LinkedinSVG />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
