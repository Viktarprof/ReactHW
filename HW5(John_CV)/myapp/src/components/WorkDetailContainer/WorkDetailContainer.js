import React from "react";
import s from "./WorkDetailContainer.module.css";
import WorkDetail from "../WorkDetail/WorkDetail";

function WorkDetailContainer({ works }) {
  const slicedWorks = works.slice(0, 3);
  return (
    <div>
      <div className={s.work_detail_container}>
        <p className={s.title_work}> Featured works</p>
        {slicedWorks.map((el) => (
          <WorkDetail key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default WorkDetailContainer;
