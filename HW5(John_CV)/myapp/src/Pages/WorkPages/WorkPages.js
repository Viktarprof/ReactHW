import React from "react";
import s from "./WorkPages.module.css";
import WorkList from "../../components/WorkList/WorkList";

function WorkPages({ works }) {

  return (
    <>
      <div className="wrapper">
        <div className={s.work_container}>
          <h2>Work</h2>
          <div className={s.work_list}>
            {works.map((el) => (
              <WorkList key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkPages;
