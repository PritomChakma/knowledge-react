import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 bg-gray-200 p-4 space-y-5">
      <div className="bg-purple-100 text-purple-700 font-bold p-5 text-center items-center">
        Reading Time: {readingTime}
      </div>
      <h1 className="text-center font-bold text-xl">
        Bookmarks : {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          readingTime={readingTime}
        ></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
