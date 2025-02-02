import { useState } from "react";

import logo from "..//..//assets/logo/logo.svg";
import user from "..//..//assets/buttons/user.svg";
import search from "..//..//assets/buttons/search.svg";
import userHover from "..//..//assets/buttons/hover-user.svg";
import searchHover from "..//..//assets/buttons/hover-search.svg";

export default function Header() {
  const [userIsHover, setUserIsHover] = useState(false);
  const [searchIsHover, setSearchIsHover] = useState(false);

  return (
    <header className="header">
      <section>
        <img
          onClick={() => window.location.reload()}
          className="logo"
          src={logo}
          alt="logo"
        />
        <a href="#">Shop</a>
        <a href="#">News</a>
        <a href="#">Reviews</a>
        <a href="#">About Us</a>
      </section>
      <section className="section-right">
        <span className="language-button margin">EN</span>
        <img
          onMouseEnter={() => setUserIsHover(true)}
          onMouseLeave={() => setUserIsHover(false)}
          className="margin"
          src={userIsHover ? userHover : user}
          alt="user"
          height={30}
          width={30}
        />
        <img
          onMouseEnter={() => setSearchIsHover(true)}
          onMouseLeave={() => setSearchIsHover(false)}
          className="margin"
          src={searchIsHover ? searchHover : search}
          alt="search"
          height={30}
          width={30}
        />
        <button className="shop-button margin">SHOP NOW</button>
      </section>
    </header>
  );
}
