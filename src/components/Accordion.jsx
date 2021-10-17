import React, { useState } from 'react';
import './Accordion.css';
const Accordion = ({ children, title, active }) => {
  const [show, setShow] = useState(active);

  return (
    <div className="box">
      <div className="box_container">
        <div className="box_title" onClick={() => setShow(!show)}>
          <span>{title}</span>
          <span className="box_icon">
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </div>
        <div className={`box_content ${!show && 'hidden'}`}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
