import React from 'react';
import QRCode from 'qrcode.react';
import Webcam from 'react-webcam';

const Attendance = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Mark Attendance</h1>
      <h3>QR Code Scan</h3>
      <QRCode value="STUDENT_ID_123" size={200} />
      <h3>Facial Recognition</h3>
      <Webcam width={300} height={300} />
      <button style={{ marginTop: '20px', padding: '10px 20px' }}>
        Mark Present
      </button>
    </div>
  );
};

export default Attendance;