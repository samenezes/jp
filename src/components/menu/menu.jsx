import React, { useState } from "react";
import { FaFlag, FaCog, FaPlus } from "react-icons/fa";
import { BiSolidLaugh } from 'react-icons/bi';
import './menuelement.css';
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuToggle = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return (
    <div className={`nav ${isOpened ? "open" : ""}`}>
      <Link to="/Prova" className="item">
        <BiSolidLaugh /> 
      </Link>
      <Link to="/" className="item">
        <FaFlag /> 
      </Link>
      <div className="item">
        <FaCog />
      </div>
      <div className="item">
        <FaCog />
      </div>
      <div className="item">
        <FaCog />
      </div>
      <div className="item">
        <FaCog />
      </div>
      <div className="item">
        <FaCog />
      </div>
      <div className="item">
        <FaCog />
      </div>
      <div className="item open_nav" onClick={handleMenuToggle}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Menu;
