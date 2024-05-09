import { Link } from "react-router-dom";
import { GithubSVG, LinkedinSVG } from "../assets";
import { forwardRef } from "react";

const NavMobile = forwardRef((props, ref) => {
  return (
    <nav>
      <div
        className="block fixed top-0 right-0 h-screen w-52 pt-12 bg-neutral-800 z-[9]"
        ref={ref}
      >
        <ul className="fixed right-0 bottom-36 text-primary text-4xl font-bold text-right">
          <li className="mx-4 mt-8">
            <Link
              to="/"
              className="hover:text-accent transition-colors duration-300"
              draggable="false"
              title="Home"
              aria-label="Home"
              onClick={() => props.toggleMobileNav(false)}
            >
              K.dev<span aria-hidden>()</span>
            </Link>
          </li>
          <li className="mx-4 mt-8">
            <Link
              to="/about"
              className="hover:text-accent transition-colors duration-300"
              draggable="false"
              title="About"
              aria-label="About"
              onClick={() => props.toggleMobileNav(false)}
            >
              .about<span aria-hidden>()</span>
            </Link>
          </li>
          <li className="mx-4 mt-8">
            <Link
              to="mailto:keenan.brant@yahoo.co.uk?subject=Portfolio&body=Please write your message"
              className="hover:text-accent transition-colors duration-300"
              target="_blank"
              draggable="false"
              title="Email"
              aria-label="Email"
              onClick={() => props.toggleMobileNav(false)}
            >
              .email<span aria-hidden>()</span>
            </Link>
          </li>
          <li className="fixed flex flex-row w-52 justify-center gap-x-8 right-0 mt-8">
            <div>
              <Link
                to="https://github.com/The-Nightman"
                target="_blank"
                title="GitHub"
                aria-label="GitHub"
                draggable="false"
              >
                <GithubSVG className="w-16 fill-accent hover:fill-accentComplementary transition-colors duration-300" />
              </Link>
            </div>
            <div>
              <Link
                to="https://www.linkedin.com/in/keenan-brant/"
                title="Linked in"
                aria-label="Linked in"
                target="_blank"
                draggable="false"
              >
                <LinkedinSVG className="w-16 fill-accent hover:fill-accentComplementary transition-colors duration-300" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default NavMobile;
