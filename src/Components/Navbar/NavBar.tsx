import React from 'react';
import { BiHide } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";

import "./NavBar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="navbar-icon-button">
            Tool bar <MdKeyboardDoubleArrowRight className="navbar-icon"  /> 
        </button>
        <button className="navbar-icon-button">
             <BiHide className="navbar-icon" /> Hide fields
        </button>
        <button className="navbar-icon-button">
           <LuArrowUpDown className="navbar-icon" /> Sort 
        </button>
        <button className="navbar-icon-button">
          <IoFilterSharp className="navbar-icon" /> Filter
        </button>
        <button className="navbar-icon-button">
             <TbArrowAutofitHeight className="navbar-icon"  /> Cell view</button>
      </div>
      <div className="navbar-right">
        <button className="navbar-2-icon-button">
          <LuArrowDownToLine className="navbar-icon" /> Import
        </button>
        <button className="navbar-2-icon-button">
          <LuArrowUpToLine className="navbar-icon" /> Export
        </button>
        <button className="navbar-2-icon-button">
          <FaRegShareFromSquare className="navbar-icon" /> Share
        </button>
        <button className="navbar-primary-button">
          <samp className='fluent--arrow-split-20-regular'></samp> New Action
        </button>
      </div>
    </div>
  );
};

export default Navbar;