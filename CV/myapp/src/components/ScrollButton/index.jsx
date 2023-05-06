import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import s from "./index.module.css";

function ScrollButton() {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 90) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 90) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowUp 
      className={s.scrollTop}
      onClick={scrollTop}
      style={{color:"#fd0000",  display: showScroll ? "flex" : "none" }}
    />
  );
}

export default ScrollButton;
