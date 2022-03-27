import logo from "./logo.svg";
import "./App.css";
import Sidenav from "./Components/Sidenav/Sidenav";
import Navbar from "./Components/Navbard/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview/Overview";
import Tickets from "./Components/Tickets/Tickets";

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="app-side sidenavmenu">
          <Sidenav></Sidenav>
        </div>

        <div className="app-side wrapper">
          <Navbar></Navbar>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="tickets" element={<Tickets />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
