import { ReactComponent as GithubSVG } from "../assets/github.svg";
import { ReactComponent as LinkedinSVG } from "../assets/linkedin.svg";

const NavDesktop = () => {
  return (
    <nav className="header-navbar-desktop">
      <ul>
        <li>
          <a href="/">K.dev()</a>
        </li>
        <li>
          <a href="/about">.about()</a>
        </li>
        <li>
          <a href="#">.email()</a>
        </li>
        <li className="github-desktop" title="GitHub">
          <a href="https://github.com/The-Nightman" target="_blank">
            <GithubSVG />
          </a>
        </li>
        <li className="linkedin-desktop" title="LinkedIn">
          <a href="https://www.linkedin.com/in/keenan-brant/" target="_blank">
            <LinkedinSVG />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
