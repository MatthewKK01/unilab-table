/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import x from "../assets/x-solid.svg";
function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    navigate("/");
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

        <div className="flex relative pl-7 py-6 border-l-2 items-center justify-center gap-5">
          <p className="  text-white font-light text-[22px]">{user.name}</p>
          <img
            onClick={() => setActive(!active)}
            src={user.image}
            className="w-[68px] cursor-pointer h-[68px] rounded-full"
            alt="photo"
          />
          {active && (
            <div className="bg-white flex items-start flex-col absolute w-40  -bottom-8 right-0">
              <img
                src={x}
                className="w-4 cursor-pointer inline h-4 mb-4"
                alt=""
                onClick={() => setActive(false)}
              />
              <h1
                className="cursor-pointer hover:scale-75 transition-all duration-100"
                onClick={LogOut}
              >
                LogOut
              </h1>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
