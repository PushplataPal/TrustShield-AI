import { ShieldCheck, History } from "lucide-react";

function Navbar({ onHistory }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-icon">
          <ShieldCheck size={25} />
        </div>

        <div>
          <h2>TrustShield</h2>
          <span>AI SECURITY</span>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-status">
          <span className="status-dot"></span>
          AI Engine Online
        </div>

        <button className="history-btn" onClick={onHistory}>
          <History size={17} />
          History
        </button>
      </div>
    </nav>
  );
}

export default Navbar;