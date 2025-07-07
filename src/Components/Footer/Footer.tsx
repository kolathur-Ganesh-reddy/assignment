import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <nav className="footer-container w-full max-w-4xl mx-auto">
      <ul className="footer-items">
        <li>
          <button
            className={`footer-item ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
            aria-current={activeTab === 'all' ? 'page' : undefined}
          >
            All Orders
          </button>
        </li>
        <li>
          <button
            className={`footer-item ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
            aria-current={activeTab === 'pending' ? 'page' : undefined}
          >
            Pending
          </button>
        </li>
        <li>
          <button
            className={`footer-item ${activeTab === 'reviewed' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviewed')}
            aria-current={activeTab === 'reviewed' ? 'page' : undefined}
          >
            Reviewed
          </button>
        </li>
        <li>
          <button
            className={`footer-item ${activeTab === 'arrived' ? 'active' : ''}`}
            onClick={() => setActiveTab('arrived')}
            aria-current={activeTab === 'arrived' ? 'page' : undefined}
          >
            Arrived
          </button>
        </li>
        <li>
          <button className="footer-add-button" aria-label="Add new">
            <span>+</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
