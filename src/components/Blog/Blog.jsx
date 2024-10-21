import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAdToBookmark }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between">
        {/* img div */}
        <div className="flex gap-3">
          <div className="w-12">
            <img className="rounded-full" src={author_img} alt="" />
          </div>
          <div>
            <h1 className="font-bold">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        {/* read time */}
        <div className="flex items-center gap-3">
          <p>{reading_time} min red</p>
          <button className="text-orange-400 text-2xl">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h1 className="text-xl font-bold">{title}</h1>

      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href=""> {hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;