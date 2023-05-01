import React, { useState } from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState(true);

  const activeBurger = () => {
    setActive(!active);
  };

  return (
    <div className="wrapper">
      <div className={`${s.nav_container} ${active ? "" : s.activeContainer}`}>
        <div className={`${s.nav} ${active ? s.active : ""}`}>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
          <NavLink to="/works" activeClassName="active">
            Works
          </NavLink>
          <NavLink to="/contacts" activeClassName="active">
            Contact
          </NavLink>
        </div>
      </div>

      <div onClick={activeBurger} className={`${s.btn_burger} ${s.active}`}>
        <span className={`${s.line} ${active ? "" : s.active}`}></span>
        <span className={`${s.line1} ${active ? "" : s.active}`}></span>
        <span className={`${s.line2} ${active ? "" : s.active}`}></span>
      </div>
    </div>
  );
}

export default Nav;
