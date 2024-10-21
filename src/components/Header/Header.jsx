import Profile from "../../../public/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4  border-b-2 w-11/12 mx-auto">
      <h1 className="text-4xl font-bold">REact Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
