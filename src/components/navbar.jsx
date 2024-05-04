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
    <header className="mb-16">
      <div className="flex flex-row justify-between max-[1100px]:max-w-[90vw] max-w-[80vw] mx-auto">
        <h1 className="max-md:absolute max-md:top-6 max-md:left-4 text-primary font-bold text-nowrap">
          KBrant
          <span className="text-accent">
            .dev<span aria-hidden>()</span>
          </span>
        </h1>
        {isMobile ? (
          <>
            <AnimatePresence>
              {!mobileNav ? (
                <MenuOpenSVG
                  className="fixed top-4 right-4 h-8 z-10"
                  onClick={() => toggleMobileNav()}
                />
              ) : (
                <MenuCloseSVG
                  className="fixed top-4 right-4 h-8 z-10"
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
