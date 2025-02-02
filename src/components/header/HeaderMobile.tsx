import { useState } from "react";
import { motion } from "motion/react";

import logo from "..//..//assets/logo/logo.svg";
import user from "..//..//assets/buttons/user.svg";
import search from "..//..//assets/buttons/search.svg";
import userHover from "..//..//assets/buttons/hover-user.svg";
import searchHover from "..//..//assets/buttons/hover-search.svg";
import menu from "..//..//assets/buttons/menu.svg";
import menuHover from "..//..//assets/buttons/menu-hover.svg";
import close from "..//..//assets/buttons/close.svg";
import closeHover from "..//..//assets/buttons/close-hover.svg";

export default function HeaderMobile() {
  const [isMenu, setIsMenu] = useState(false);
  const [userIsHover, setUserIsHover] = useState(false);
  const [searchIsHover, setSearchIsHover] = useState(false);
  const [menuIsHover, setMenuIsHover] = useState(false);
  const [closeIsHover, setCloseIsHover] = useState(false);

  const toggleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <header className="header-mobile">
      <img
        onClick={() => window.location.reload()}
        className="logo-mobile"
        src={logo}
        alt="logo"
      />
      <section className="right-container">
        <span className="language-button margin">EN</span>
        <img
          onMouseEnter={() => setSearchIsHover(true)}
          onMouseLeave={() => setSearchIsHover(false)}
          className="header-mobile-icon margin"
          src={searchIsHover ? searchHover : search}
          alt="search"
        />
        <img
          onMouseEnter={() => setUserIsHover(true)}
          onMouseLeave={() => setUserIsHover(false)}
          onClick={() => setIsMenu(true)}
          className="header-mobile-icon margin"
          src={userIsHover ? userHover : user}
          alt="user"
        />
        <motion.img
          whileTap={{ rotate: 20 }}
          onMouseEnter={() =>
            isMenu ? setCloseIsHover(true) : setMenuIsHover(true)
          }
          onMouseLeave={() => {
            setMenuIsHover(false);
            setCloseIsHover(false);
          }}
          onClick={toggleMenu}
          className="header-mobile-icon margin"
          src={
            isMenu
              ? closeIsHover
                ? closeHover
                : close
              : menuIsHover
              ? menuHover
              : menu
          }
          alt="menu"
        />
      </section>

      {isMenu && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, height: "170px", y: 0 }}
          className="mobile-nav"
        >
          <ul className="mobile-menu">
            <li className="margin">
              <a href="#home">Home</a>
            </li>
            <li className="margin">
              <a href="#about">About</a>
            </li>
            <li className="margin">
              <a href="#services">Services</a>
            </li>
            <li className="margin">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="shop-button-container">
            <button className="shop-button-nav margin">SHOP NOW</button>
          </span>
        </motion.nav>
      )}
    </header>
  );
}
