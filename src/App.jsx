import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReelsPage from "./pages/ReelsPage";
import HomePage from "./pages/HomePage";
import TimeLinePage from "./pages/TimeLinePage";
import ProfilePage from "./pages/ProfilePage";
import InboxPage from "./pages/InboxPage";

import "./App.css";

// App component with routing
const App = () => {
  return (
    <Router>
      <div className="App">
        <center>
          {/* Add logo or any other header content */}
          {/* <h3>Reels</h3> */}
          
          <Routes>
            {/* Defining routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/home" element={<TimeLinePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/inbox" element={<InboxPage />} />

          </Routes>
        </center>
      </div>
    </Router>
  );
};

export default App;
