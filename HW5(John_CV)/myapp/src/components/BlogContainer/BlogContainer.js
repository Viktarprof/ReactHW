import React from "react";
import s from "./BlogContainer.module.css";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";

function BlogContainer({ blogs }) {


  const slicedData = blogs.slice(0, 2);
  console.log(slicedData);

  return (
    <>
      <div className={s.blog_container}>
        <div className={s.posts_links}>
          <p className={s.text}>Recent posts</p>
          <Link to={"/blog"} style={{ textDecoration: "none" }}>
            <p className={s.linkViewAll}>View all</p>
          </Link>
        </div>
        <div className={s.blogs}>
          {slicedData.map((el) => (
            <Blog key={el.id} {...el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogContainer;
