import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import s from "./index.module.css";
import ScrollButton from "../ScrollButton";

function NavMenu() {

  const [active, setActive] = useState(false);
  return (
    <>
      <div className={`${s.containerNav} ${active ? s.active : ""}`}>
        <NavLink to="/" activeClassName="active">
            Main
        </NavLink>
        <NavLink to="/resume" activeClassName="active">
            Ruseme
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
            Projects
        </NavLink> <NavLink to="/contacts" activeClassName="active">
            Contacts
        </NavLink>
        <ScrollButton/>
      </div>
    </>
  );
}

export default NavMenu;
