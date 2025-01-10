import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignupPage } from './pages/signup/signup';
import { LoginPage } from './pages/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

