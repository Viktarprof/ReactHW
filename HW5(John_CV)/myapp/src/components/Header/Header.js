import React from "react";
import s from "./Header.module.css";
import photoJohn from "./media/photoJohn.png";

function Header() {
  return (
    <div className={s.header_container}>
      <div className={s.header_text}>
        <h2>Hi, I am John, Creative Technologist</h2>
        <p>
          pAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <a
          href="https://media.tproger.ru/uploads/2022/08/Tvorcheskoe-rezjume-1.1.png"
          target="blank"
          download="JohnResume.png"
        >
          Download Resume
        </a>
      </div>
      <img width={243} src={photoJohn} alt="John" />
    </div>
  );
}

export default Header;
