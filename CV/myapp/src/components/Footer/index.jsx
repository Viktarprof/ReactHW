import React from "react";
import s from "./index.module.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { BsInstagram, BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className={s.container_Footer}>
        <p>
          {<IoIosPhonePortrait style={{ fontSize: "20" }} />}: +48 57 537 6296
        </p>
        <p>
          <a href="kaloshaviktor1@mail.com">
            <CiMail style={{ fontSize: "20" }} />
          </a>
          : kaloshaviktor1@mail.com
        </p>
        <div className={s.sotial_logo}>
          <div className={s.logo}>
            <a href="https://www.instagram.com/kalosha_viktar/">
              <BsInstagram style={{ color: "deeppink", fontSize: "20" }} />
            </a>
            <a href="www.linkedin.com/in/viktar-kalosha-1b8457151">
              <BsLinkedin style={{ color: "dodgerblue", fontSize: "20" }} />
            </a>
            <a href="https://www.facebook.com/ViktarKalosha">
              <BsFacebook style={{ color: "blue", fontSize: "20" }} />
            </a>
            <a href="https://github.com/Viktarprof">
              <BsGithub style={{ fontSize: "20" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
