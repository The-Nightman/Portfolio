import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";

const NavDesktop = () => {
  return (
    <nav className="header-navbar-desktop">
      <ul>
      <li>
            <Link to="/" draggable="false" title="Home" aria-label="Home">
              K.dev()
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              draggable="false"
              title="About"
              aria-label="About"
            >
              .about()
            </Link>
          </li>
          <li>
            <Link to="#" draggable="false" title="Email" aria-label="Email">
              .email()
            </Link>
          </li>
        <li className="github-desktop" title="GitHub">
          <Link
            to="https://github.com/The-Nightman"
            target="_blank"
            title="GitHub"
            aria-label="GitHub"
            draggable="false"
          >
            <GithubSVG />
          </Link>
        </li>
        <li className="linkedin-desktop" title="LinkedIn">
          <Link
            to="https://www.linkedin.com/in/keenan-brant/"
            title="Linked in"
            aria-label="Linked in"
            target="_blank"
            draggable="false"
          >
            <LinkedinSVG />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
