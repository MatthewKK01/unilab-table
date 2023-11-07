import { Link } from "react-router-dom";
function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const LogOut = () => {
    localStorage.clear();
  };
  return (
    <header className="flex justify-between items-center mb-[35px] border-b border-white bg-black py-6 px-7">
      <Link to="/">
        {" "}
        <h1 className="text-white font-black text-4xl" onClick={LogOut}>
          TODO
        </h1>
      </Link>
      <article className="flex flex-row items-center gap-5">
        <p className="  text-white font-light text-[22px]">{user.name}</p>
        <img
          src={user.image}
          className="w-[68px] h-[68px] rounded-full"
          alt="photo"
        />
      </article>
    </header>
  );
}

export default Header;
