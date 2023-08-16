import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";

const NavMobile = () => {
  return (
    <nav className="header-navbar-mobile">
      <ul>
        <div className="navbar-mobile">
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
            <Link to="mailto:keenan.brant@yahoo.co.uk?subject=Portfolio&body=Please write your message" target="_blank" draggable="false" title="Email" aria-label="Email">
              .email()
            </Link>
          </li>
          <div className="navbar-icons-mobile">
            <li className="github-mobile" title="GitHub">
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
            <li className="linkedin-mobile" title="LinkedIn">
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
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
