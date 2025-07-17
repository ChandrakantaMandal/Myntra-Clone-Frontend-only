import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import LoginCard from "./LoginCard";
import Card from "./Card";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  const [show, setShow] = useState(false);
  const [search, setsearch] = useState("");
 const [show2, setShow2] = useState(false);

  const hovered = false;

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav
          className="nav_bar"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/Kids">Kids</Link>
          <Link to="/Living">Home & Living</Link>
          <Link to="/Beauty">Beauty</Link>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            className="search_input"
            placeholder="Search for products, brands and more"
            type="text"
          />
        </div>
        <div className="action_bar">
          <div
            className="action_container"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <BsFillPersonFill />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaFaceGrinHearts />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <FaBagShopping />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
      {show ? <LoginCard setShow={setShow} /> : null}
      {show ? <Card /> : null}
      <Card />
    </>
  );
};

export default Header;
