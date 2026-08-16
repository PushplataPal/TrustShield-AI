import { useState } from "react";
import { Globe, Search, LockKeyhole } from "lucide-react";

function UrlScanner({ onScan }) {
  const [url, setUrl] = useState("");

  const handleScan = () => {
    if (!url.trim()) {
      alert("Please enter a website URL.");
      return;
    }

    onScan(url);
  };

  return (
    <>
      <div className="scanner-card">
        <div className="input-wrapper">
          <Globe size={20} />

          <input
            type="text"
            placeholder="Enter website URL e.g. https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleScan();
              }
            }}
          />
        </div>

        <button className="scan-button" onClick={handleScan}>
          <Search size={19} />
          Scan Website
        </button>
      </div>

      <div className="privacy-note">
        <LockKeyhole size={14} />
        Your URL is analyzed securely.
      </div>
    </>
  );
}

export default UrlScanner;