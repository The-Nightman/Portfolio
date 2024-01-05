import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";
import { forwardRef } from "react";

const NavMobile = forwardRef((props, ref) => {
  return (
    <nav className="header-navbar-mobile">
      <div className="navbar-mobile-list-cont" ref={ref}>
        <ul className="navbar-mobile">
          <li>
            <Link
              to="/"
              draggable="false"
              title="Home"
              aria-label="Home"
              onClick={() => props.toggleMobileNav(false)}
            >
              K.dev()
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              draggable="false"
              title="About"
              aria-label="About"
              onClick={() => props.toggleMobileNav(false)}
            >
              .about()
            </Link>
          </li>
          <li>
            <Link
              to="mailto:keenan.brant@yahoo.co.uk?subject=Portfolio&body=Please write your message"
              target="_blank"
              draggable="false"
              title="Email"
              aria-label="Email"
              onClick={() => props.toggleMobileNav(false)}
            >
              .email()
            </Link>
          </li>
          <li id="navbar-icons-mobile">
            <div className="github-mobile" title="GitHub">
              <Link
                to="https://github.com/The-Nightman"
                target="_blank"
                title="GitHub"
                aria-label="GitHub"
                draggable="false"
              >
                <GithubSVG />
              </Link>
            </div>
            <div className="linkedin-mobile" title="LinkedIn">
              <Link
                to="https://www.linkedin.com/in/keenan-brant/"
                title="Linked in"
                aria-label="Linked in"
                target="_blank"
                draggable="false"
              >
                <LinkedinSVG />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default NavMobile;
