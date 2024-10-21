const Bookmark = ({ bookmark, readingTime }) => {
  const { title } = bookmark;
  return (
    <div className=" mt-3">
      <h3 className="text-xl bg-slate-300  ">{title}</h3>
      <hr />
    </div>
  );
};

export default Bookmark;
