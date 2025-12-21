import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import ParentsPortal from './components/ParentsPortal';
import FeePayment from './components/FeePayment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/parents" element={<ParentsPortal />} />
          <Route path="/fees" element={<FeePayment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;