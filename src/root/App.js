import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import ReatingCom from '../Components/reating/index.jsx';
import FamousCom from '../Components/sportFamous/index.jsx';





function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/famous">Famous sports </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user" element={<ReatingCom />} />
          <Route path="/famous" element={<FamousCom />} />
          {/* Default route */}
          <Route
            path="/"
            element={<Navigate to="/table1" />

            }

          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
