import { useState, useContext } from "react";
import { Logo } from "../assets/img";
import { Link } from "react-router-dom";

import Usercontext from "../../utils/Usercontext";



const Title = () => {
  return (
    <>
      <a href="/">
        <img className="h-28 p-2" id="img" alt="logo" src={Logo}></img>
      </a>
    </>
  );
};

const Headercomponent = () => {
  const { user } = useContext(Usercontext);
  const [Isloggedin, setIsloggedin] = useState(true);
  return (
    <div className="flex  justify-between bg- bg-pink-200 text-black shadow-lg">
      <Title />
      <div>
        <ul className=" flex py-10 ">
          <Link to="/">
            <li className=" px-2">home</li>
          </Link>

          <Link to="/contactus">
            <li className=" px-2">contacts</li>
          </Link>

          <Link to="/helpus">
            <li className=" px-2">cart</li>
          </Link>
          <Link to="/about">
            <li className=" px-2">about</li>
          </Link>

          <Link to="/menu">
            <li className=" px-2">menu</li>
          </Link>
          <Link to="/instamart">
            <li className=" px-2">instamart</li>
          </Link>
        </ul>
      </div>
      <h1 className="pt-10 text-xl text-red-600 ml-16"> {user.name}</h1>
      {user.email}
      {Isloggedin ? (
        <button
          onClick={() => {
            setIsloggedin(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsloggedin(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Headercomponent;
