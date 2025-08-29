// src/pages/Publications.jsx

import React from 'react';
import CardSlider from '../components/CardSlider';

const Reports = () => {
  return (
    <>
   
      <div className="container text-center py-3">
        <h2 className='head_main'>
          Reports
        </h2>
        <p>Explore our latest reports, research, and publications here.</p>
      </div>
      <CardSlider />
      <footer className='text-center py-4 mt-5 mb-0 bottom-0 '
        style={{
          backgroundColor: "#F2F2F2", // ✅ background color
          color: "#171717",
          textAlign: "right",
          fontFamily: "Roboto, sans-serif",
          fontSize: "14.914px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "25.567px" // 171.429%
        }}
      >
        © 2025 Politics for Impact. All rights reserved.
      </footer>
    
    </>
  );
};

export default Reports;
