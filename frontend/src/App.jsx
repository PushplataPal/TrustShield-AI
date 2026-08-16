import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [scans, setScans] = useState([]);

  const saveScan = (scan) => {
    setScans((previous) => [scan, ...previous]);
  };

  return (
    <div className="app">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <Navbar
        onHistory={() => setPage("history")}
      />

      <main className="container">
        {page === "home" ? (
          <Home onSaveScan={saveScan} />
        ) : (
          <History
            scans={scans}
            onBack={() => setPage("home")}
          />
        )}
      </main>

      <footer>
        🛡️ TrustShield AI • Digital Trust & Cyber Safety
      </footer>
    </div>
  );
}

export default App;