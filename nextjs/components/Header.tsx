/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";

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
        <Link className="header-logo__link logo" href="/">
          Patrick's
        </Link>
      </div>
      <div className="header-nav__container">
        {navData && (
          <nav>
            <ul>
              {navData.map((navItem) => (
                <li key={navItem.slug}>
                  <Link className={"nav-link"} href={navItem.slug}>
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <div className="header-action-item__container">
        <Link className={"btn-header"} href="/contact">
          Get in touch
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
