import { ReactComponent as GithubSVG } from "../assets/github.svg"
import { ReactComponent as LinkedinSVG } from "../assets/linkedin.svg"

const Navbar = () => {
  return (
    <header>
      <div id="header-container">
        <div id="nav-breadcrumb">
          <span className="name">Keenan</span>
          <span className="func">.io()</span>
        </div>
        <nav id="header-navbar">
          <ul>
            <li>
              <a href="/">K.io()</a>
            </li>
            <li>
              <a href="/about">.about()</a>
            </li>
            <li>
              <a href="#">.email()</a>
            </li>
            <li className="github" title="GitHub">
              <a href="https://github.com/The-Nightman" target="_blank">
                <GithubSVG/>
              </a>
            </li>
            <li className="linkedin" title="LinkedIn">
              <a href="https://www.linkedin.com/in/keenan-brant/" target="_blank">
                <LinkedinSVG/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
