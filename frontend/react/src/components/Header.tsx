import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { NavLink } from "react-router-dom";

type navType = {
  slug: string;
  title: string;
};

const Navbar = ({
  rightMenu,
  navData,
}: {
  rightMenu: boolean;
  navData: navType[];
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileMenuOpen) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");
      window.scrollTo(0, scrollPosition);
    } else {
      setScrollPosition(window.pageYOffset);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    }
  };

  return (
    <header className={`${rightMenu ? "header--right" : ""}`}>
      <div className="header-logo-menu__container">
        <div id="menuButton">
          <span id="menuButtonIconHam">
            <MenuIcon onClick={toggleMenu} />
          </span>
          <span id="menuButtonIconClose" hidden>
            <X onClick={toggleMenu} />
          </span>
        </div>
        <NavLink className="header-logo__link logo" href="/">
          Patrick's
        </NavLink>
      </div>
      <div className="header-nav__container">
        {navData && (
          <nav>
            <ul>
              {navData.map((navItem) => (
                <li key={navItem.slug}>
                  <NavLink className={"nav-link"} to={navItem.slug}>
                    {navItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <div className="header-action-item__container">
        <NavLink className={"btn-header"} to="/company/contact">
          Get in touch
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
