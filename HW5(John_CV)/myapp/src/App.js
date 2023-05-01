import "./App.css";
import { blog_data, work_data } from "./components/data/data";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ContactsPages from "./Pages/ContactsPages/ContactsPages";
import Nav from "./components/Nav/Nav";
import HomePages from "./Pages/HomePages/HomePages";
import WorkPages from "./Pages/WorkPages/WorkPages";
import BlogPages from "./Pages/BlogPages/BlogPages";
import NotFoundPages from "./Pages/NotFoundPages/NotFoundPages";
import Footer from "./components/Footer/Footer";
import WorkInfoPages from "./Pages/WorkInfoPages/WorkInfoPages";

function App() {
  const [blogs, setBlogs] = useState(blog_data);
  const [works, setWorks] = useState(work_data);
  // console.log(userInfo);
  // console.log(works);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePages blogs={blogs} works={works} />} />
        <Route path="/blog" element={<BlogPages blogs={blogs} />} />
        <Route path="/works" element={<WorkPages works={works} />} />
        <Route path="/works/:id" element={<WorkInfoPages works={works} />} />
        <Route path="/contacts" element={<ContactsPages />} />
        <Route path="/*" element={<NotFoundPages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
