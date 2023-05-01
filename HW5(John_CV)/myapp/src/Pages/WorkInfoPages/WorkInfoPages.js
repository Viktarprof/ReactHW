import React from "react";
import { useParams } from "react-router-dom";
import s from "./WorkInfoPages.module.css";
import NotFoundPages from "../NotFoundPages/NotFoundPages";

function WorkInfoPages({ works }) {
  const { id } = useParams();
  const work = works.find((el) => el.id == id);

  if (!work) {
    return <NotFoundPages />;
  }

  const contentElements = work.content
    .map((item, index) => {
      switch (item[0]) {
        case "h1":
          return (
            <h1 className={s.content_h1} key={index}>
              {item[1]}
            </h1>
          );
        case "h2":
          return (
            <h2 className={s.content_h2} key={index}>
              {item[1]}
            </h2>
          );
        case "img":
          return (
            <img
              width={680}
              className={s.work_image}
              key={index}
              src={item[1]}
              alt={work.title}
            />
          );
        case "text":
          return (
            <p className={s.content_text} key={index}>
              {item[1]}
            </p>
          );
        default:
          return null;
      }
    })
    .sort((a, b) => {
      if (a.type < b.type) {
        return -1;
      }
    });

  return (
    <>
      <div className="wrapper">
        <div className={s.work}>
          <h1 className={s.title_card}>{work.full_title}</h1>
          <div className={s.year_tags}>
            <p>{work.year}</p>
            <p>{work.tags.join(", ")}</p>
          </div>
          <p className={s.text}>{work.text}</p>
          <img
            width={680}
            className={s.work_image}
            src={work.main_img}
            alt={work.title}
          />

          <div className={s.content}>{contentElements}</div>
        </div>
      </div>
    </>
  );
}

export default WorkInfoPages;
