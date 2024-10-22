import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, markAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 ">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>

      {blogs.map((blog) => (
        <Blog
          handleAddToBookmark={handleAddToBookmark}
          markAsRead={markAsRead}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
