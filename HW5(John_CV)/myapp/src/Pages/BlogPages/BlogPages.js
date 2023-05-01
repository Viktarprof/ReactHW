import React from "react";
import s from "./BlogPages.module.css";
import BlogList from "../../components/BlogList/BlogList";

function BlogPages({ blogs }) {
  return (
    <div className="wrapper">
      <div className={s.blog_list}>
        <h1>Blog</h1>
        {blogs.map((el) => (
          <BlogList key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default BlogPages;
