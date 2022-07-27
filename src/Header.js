import { Link } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
import React from "react";
import "./Header.css";
const Header = () => {
  const { loggedIn } = useContext(CartContext);
  return (
    <div className="header">
      <div className="heading">
        <h1>Philosophy.</h1>
      </div>
      <hr />
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/addPost">add Post</Link>
        {loggedIn ? (
          <button id="logout">Log out</button>
        ) : (
          <Link to="/signin">SignIn</Link>
        )}
      </div>
      <div className="imageHeader">
        <div className="headerContent">
          <button>MUSIC</button>
          <h1>
            What Your Music Preferences Says About you and Your Personality.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
