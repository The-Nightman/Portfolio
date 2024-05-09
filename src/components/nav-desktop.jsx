import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";

const NavDesktop = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-x-8 text-primary">
        <li>
          <Link
            to="/"
            className="hover:text-accent transition-colors duration-300"
            draggable="false"
            title="Home"
            aria-label="Home"
          >
            K.dev()
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-accent transition-colors duration-300"
            draggable="false"
            title="About"
            aria-label="About"
          >
            .about<span aria-hidden>()</span>
          </Link>
        </li>
        <li>
          <Link
            to="mailto:keenan.brant@yahoo.co.uk?subject=Portfolio&body=Please write your message"
            className="hover:text-accent transition-colors duration-300"
            target="_blank"
            draggable="false"
            title="Email"
            aria-label="Email"
          >
            .email<span aria-hidden>()</span>
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
            <GithubSVG className="h-[1.56rem] fill-accent hover:fill-accentComplementary transition-colors duration-300" />
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
            <LinkedinSVG className="h-[1.56rem] fill-accent hover:fill-accentComplementary transition-colors duration-300" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
