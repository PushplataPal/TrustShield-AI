import {
  History as HistoryIcon,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

function History({ scans, onBack }) {
  return (
    <section className="history-page">
      <div className="history-heading">
        <div>
          <p className="small-label">TRUSTSHIELD</p>
          <h1>Scan History</h1>
        </div>

        <button className="back-btn" onClick={onBack}>
          Back to Scanner
        </button>
      </div>

      {scans.length === 0 ? (
        <div className="empty-history">
          <HistoryIcon size={45} />

          <h3>No scans yet</h3>

          <p>
            Websites you scan will appear here.
          </p>
        </div>
      ) : (
        <div className="history-list">
          {scans.map((scan, index) => (
            <div className="history-item" key={index}>
              <div className="history-icon">
                {scan.status === "phishing" ? (
                  <AlertTriangle />
                ) : (
                  <ShieldCheck />
                )}
              </div>

              <div className="history-info">
                <strong>{scan.url}</strong>

                <span>
                  Risk Score: {scan.score}%
                </span>
              </div>

              <div
                className={`history-status ${
                  scan.status === "phishing"
                    ? "danger"
                    : "safe"
                }`}
              >
                {scan.status === "phishing"
                  ? "Phishing"
                  : "Safe"}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default History;