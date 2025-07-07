import React from 'react';
import './HeaderBar.css';
import { SlBell } from "react-icons/sl";


const HeaderBar: React.FC = () => {
  return (
    <div className="Header">
      <div className="Header-left">
        <svg className="Header-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="currentColor" d="M10 2H2v10h8zm2-2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/></svg>
        <div className="Header-breadcrumbs">
          <span className="breadcrumb muted">Workspace</span>
          <span className="breadcrumb muted">{'>'}</span>
          <span className="breadcrumb muted">Folder 2</span>
          <span className="breadcrumb muted">{'>'}</span>
          <span className="breadcrumb bold">Spreadsheet 3</span>
          <span className="breadcrumb dots">•••</span>
        </div>
      </div>
      <div className="Header-right">
        <div className="search-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
            </svg>
            <input type="text" placeholder="Search within sheet" className="Header-search" />
        </div>

        <div className="notification-bell">
          <SlBell />
          <span className="notification-count">2</span>
        </div>
        <div className="user-info">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="User"
            className="user-avatar"
          />
          <div className="user-name-email">
            <div className="user-name">John Doe</div>
            <div className="user-email">john.doe...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
