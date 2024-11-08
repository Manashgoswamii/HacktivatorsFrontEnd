import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Activity from './Components/Activity.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/ContactUs.jsx';
import Login from './Components/Login.jsx';

function App() {
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
      </>
   
  );
}

export default App;
