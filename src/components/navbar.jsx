import { ReactComponent as MenuOpenSVG } from "../assets/menu.svg";
import { ReactComponent as MenuCloseSVG } from "../assets/close.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavDesktop, NavMobile } from "./";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            {!menuOpen ? (
              <MenuOpenSVG
                className="nav-responsive-icons"
                onClick={() => setMenuOpen(true)}
              />
            ) : (
              <>
                <NavMobile />
                <MenuCloseSVG
                  className="nav-responsive-icons"
                  onClick={() => setMenuOpen(false)}
                />
              </>
            )}
          </>
        ) : (
          <NavDesktop />
        )}
      </div>
    </header>
  );
};

export default Navbar;
