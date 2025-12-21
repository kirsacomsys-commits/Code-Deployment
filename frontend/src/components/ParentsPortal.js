import React from 'react';

const ParentsPortal = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Parents Portal</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <h2>Attendance</h2>
          <p>Today: Present</p>
          <p>Monthly: 95%</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <h2>Fees</h2>
          <p>Due: PKR 15,000</p>
          <button>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default ParentsPortal;