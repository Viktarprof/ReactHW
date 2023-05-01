import React from "react";
import { Link } from "react-router-dom";
import s from "./WorkList.module.css";

function WorkList({ id, title, tags, main_img, year, text }) {
  return (
    <div>
      <div className={s.work_item}>
        <img width={246} src={main_img} alt="title" />
        <div className={s.work_info}>
          <Link to={`/works/${id}`} style={{ textDecoration: "none" }}>
            <h3>{title}</h3>
          </Link>
          <div className={s.year_tags}>
            <p>{year}</p>
            <p>{tags.join(", ")}</p>
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default WorkList;
