import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DataObject = () => {
  const [cDate, setCDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
      setCDate(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        width: '400px',
        margin: '50px auto',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#007bff', marginBottom: '15px' }}>
        🕒 Data Object Component
      </h2>
      <p style={{ fontSize: '18px', color: '#333' }}>
        📅 Current Date & Time:
        <br />
        <strong>{cDate}</strong>
      </p>
    </div>
  );
};

export default DataObject;
