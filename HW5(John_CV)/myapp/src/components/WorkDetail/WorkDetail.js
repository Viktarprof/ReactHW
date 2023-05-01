import React from "react";
import s from "./WorkDetail.module.css";

function WorkDetail({ id, title, full_title, tags, year, main_img, text }) {
  const firstTags = tags.slice(0, 1);

  return (
    <div>
      <div className={s.work_item}>
        <img width={246} src={main_img} alt={title} />
        <div className={s.wokr_info}>
          <h2>{title}</h2>
          <div className={s.year_tags}>
            <p className={s.year}>{year}</p>
            <p className={s.tags}>{firstTags}</p>
          </div>
          <p className={s.title}>{full_title}</p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default WorkDetail;
