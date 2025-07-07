import React from 'react';
import './Spreadsheet.css';
import { FaBriefcase } from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";

const rowData = [
  ['Launch social media campaign for pro...', '15-11-2024', 'In-process', 'Aisha Patel', 'www.aishapatel...', 'Sophie Choudhury', 'Medium', '20-11-2024', '6,200,000 ₹'],
  ['Update press kit for company redesign', '28-10-2024', 'Need to start', 'Irfan Khan', 'www.irfankhanp...', 'Tejas Pandey', 'High', '30-10-2024', '3,500,000 ₹'],
  ['Finalize user testing feedback for app...', '05-12-2024', 'In-process', 'Mark Johnson', 'www.markjohns...', 'Rachel Lee', 'Medium', '10-12-2024', '4,750,000 ₹'],
  ['Design new features for the website', '10-01-2025', 'Complete', 'Emily Green', 'www.emilygreen...', 'Tom Wright', 'Low', '15-01-2025', '5,900,000 ₹'],
  ['Prepare financial report for Q4', '25-01-2025', 'Blocked', 'Jessica Brown', 'www.jessicabro...', 'Kevin Smith', 'Low', '30-01-2025', '2,800,000 ₹'],
];

const Spreadsheet: React.FC = () => {
  const totalRows = 20;

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'In-process':
        return 'status inprocess';
      case 'Need to start':
        return 'status need';
      case 'Complete':
        return 'status complete';
      case 'Blocked':
        return 'status blocked';
      default:
        return '';
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'priority high';
      case 'Medium':
        return 'priority medium';
      case 'Low':
        return 'priority low';
      default:
        return '';
    }
  };

  return (
    <div className="spreadsheet-container">
      <table className="spreadsheet-table">
        <thead>
          <tr>
            <th className="row-index-header" />

            {/* Job Request */}
            <th className="job-request">
              <span className="sheet-icon-button" >
                <FaBriefcase size={14} />
                Job Request
              </span>
            </th>

            {/* Submitted */}
            <th className="submitted sheet-icon-button"><samp className='fluent--calendar-32-filled  '></samp> Submitted</th>

            {/* Status */}
            <th className="status-header"><span className="sheet-icon-button" > <IoIosArrowDropdownCircle size={16} /> Status</span></th>

            {/* Submitter */}
            <th className="submitter"><span className="sheet-icon-button" ><BiSolidUser size={16} />Submitter</span></th>

            {/* URL */}
            <th className="url"> <span className="sheet-icon-button" > <FaGlobe size={16} /> URL</span></th>

            {/* Assigned */}
            <th className="assigned sheet-icon-button"> <samp className='fluent--emoji-hand-24-filled  '></samp>Assigned</th>

            {/* Priority */}
            <th className="priority-header">Priority</th>

            {/* Due Date */}
            <th className="due-date">Due Date</th>

            {/* Est. Value */}
            <th className="est-value">Est. Value</th>
            <th className="plus-1" style={{ width: 'calc(2 * 55px)' }}>    </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: totalRows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <th className="row-index">{rowIndex + 1}</th>

              {/* Job Request */}
              <td className="job-request-cell">{rowData[rowIndex]?.[0] || ''}</td>

              {/* Submitted */}
              <td className="submitted-cell">{rowData[rowIndex]?.[1] || ''}</td>

              {/* Status */}
              <td>
                <span className={getStatusClass(rowData[rowIndex]?.[2] || '')}>
                  {rowData[rowIndex]?.[2] || ''}
                </span>
              </td>

              {/* Submitter */}
              <td className="submitter-cell">{rowData[rowIndex]?.[3] || ''}</td>

              {/* URL */}
              <td className="url-cell">{rowData[rowIndex]?.[4] || ''}</td>

              {/* Assigned */}
              <td className="assigned-cell">{rowData[rowIndex]?.[5] || ''}</td>

              {/* Priority */}
              <td>
                <span className={getPriorityClass(rowData[rowIndex]?.[6] || '')}>
                  {rowData[rowIndex]?.[6] || ''}
                </span>
              </td>

              {/* Due Date */}
              <td className="due-date-cell">{rowData[rowIndex]?.[7] || ''}</td>

              {/* Est. Value */}
              <td className="est-value-cell">{rowData[rowIndex]?.[8] || ''}</td>
              <td className="est-value-cell">{rowData[rowIndex]?.[9] || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
