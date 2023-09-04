import { useState } from "react";
import { Logo } from "../assets/img";
import { Link } from "react-router-dom";

// const Loggedinuser = () => {
//   // if api call is success
//   return false;
// };

const Title = () => {
  return (
    <>
      <a href="/">
        <img id="img" alt="logo" src={Logo}></img>
      </a>
    </>
  );
};
const obj = {
  backgroundColor: "black",
  color: "white",
};
const Headercomponent = () => {
  const [Isloggedin, setIsloggedin] = useState(true);
  return (
    <div style={obj} className="header">
      <Title />
      <div className="navitems">
        <ul>
          <Link to="/">
            <li>home</li>
          </Link>

          <Link to="/contactus">
            <li>contacts</li>
          </Link>

          <Link to="/helpus">
            <li>cart</li>
          </Link>
          <Link to="/about">
            <li>about</li>
          </Link>

          <Link to="/menu">
            <li>menu</li>
          </Link>
          <Link to="/instamart">
            <li>instamart</li>
          </Link>
        </ul>
      </div>
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
