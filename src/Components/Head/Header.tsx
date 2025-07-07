import React from 'react';
import './Header.css';
import { FaSyncAlt } from 'react-icons/fa';
import { IoLinkOutline } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="link-box">
          <a href="#" className="header-link"><span className="head-icon-button" ><IoLinkOutline className="head-icon" />Q3 Financial Overview</span></a>
          <FaSyncAlt className="refresh-icon" />
        </div>
      </div>
      <div className="header-right">
        {/* Position these buttons to align with spreadsheet columns */}
        <div className="header-buttons-container">
          {/* ABC button aligned above "Assigned" column */}
          <div className="header-button-wrapper ">
            <button className="btn abc head-icon-button" style={{ width: 'calc(2 * 78px)' }}><samp className='fluent--arrow-split-20-regular '></samp>ABC<span className='duot'>•••</span></button>
          </div>
          
          {/* Answer a question button aligned above "Priority" and "Due Date" columns */}
          <div className="header-button-wrapper" style={{ width: 'calc(2 * 98px)' }}>
            <button className="btn answer head-icon-button"><samp className='fluent--arrow-split-20-regular'></samp>Answer a question <span className='duot'>•••</span></button>
          </div>
          
          {/* Extract button aligned above "Est. Value" column */}
          <div className="header-button-wrapper" style={{ width: 'calc(2 * 55.9px)' }}>
            <button className="btn extract head-icon-button"><samp className='fluent--arrow-split-20-regular'></samp>Extract  <span className='duot'>•••</span></button>
          </div>
          <div className="header-button-wrapper" style={{ width: 'calc(2 * 59.8px)' }}>
            <button className="btn plus"><BsPlusLg /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;