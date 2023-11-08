import { Link, Navigate } from "react-router-dom";
function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  const LogOut = () => {
    localStorage.clear();
    Navigate("/");
  };
  return (
    <header className="flex justify-between items-center mb-[35px] border-b border-white bg-black  px-7">
      <Link to="/">
        {" "}
        <h1 className="text-white font-black text-4xl" onClick={LogOut}>
          TODO
        </h1>
      </Link>
      <nav className="flex flex-row items-center gap-5">
        <Link to={"/api"}>
          <h1 className="text-white text-5xl cursor-pointer uppercase">API</h1>
        </Link>
        <div className="flex pl-7 py-6 border-l-2 items-center justify-center gap-5">
          <p className="  text-white font-light text-[22px]">{user.name}</p>
          <img
            src={user.image}
            className="w-[68px] h-[68px] rounded-full"
            alt="photo"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
