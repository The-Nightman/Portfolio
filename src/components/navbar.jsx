import { ReactComponent as MenuOpenSVG } from "../assets/menu.svg";
import { ReactComponent as MenuCloseSVG } from "../assets/close.svg";
import { NavDesktop, NavMobile } from "./";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useCycle, AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const mobileRef = useRef(null);
  const MotionMobileNav = motion(NavMobile);
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  return (
    <header>
      <div className="header-container">
        <div className="nav-breadcrumb">
          <span className="name">KBrant</span>
          <span className="func">.dev()</span>
        </div>
        {isMobile ? (
          <>
            <AnimatePresence>
              {!mobileNav ? (
                <MenuOpenSVG
                  className="nav-responsive-icons"
                  onClick={() => toggleMobileNav()}
                />
              ) : (
                <MenuCloseSVG
                  className="nav-responsive-icons"
                  onClick={() => toggleMobileNav()}
                />
              )}
              {mobileNav && (
                <MotionMobileNav
                  key={"mobilenav"}
                  toggleMobileNav={toggleMobileNav}
                  ref={mobileRef}
                  variants={{
                    open: {
                      x: -0,
                      opacity: 1,
                    },
                    closed: {
                      x: 200,
                      opacity: 0,
                    },
                  }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                />
              )}
            </AnimatePresence>
          </>
        ) : (
          <NavDesktop />
        )}
      </div>
    </header>
  );
};

export default Navbar;
