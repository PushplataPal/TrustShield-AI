import {
  AlertTriangle,
  XCircle,
  ShieldCheck,
} from "lucide-react";

import AnalysisCard from "./AnalysisCard";

function ResultCard({ result, onNewScan }) {
  const isPhishing = result.status === "phishing";

  return (
    <section className="result-section">
      <div className="result-header">
        <div>
          <p className="small-label">SCAN RESULT</p>
          <h2>Security Analysis</h2>
        </div>

        <div className={`verdict ${isPhishing ? "phishing" : "safe"}`}>
          {isPhishing ? (
            <>
              <AlertTriangle size={18} />
              PHISHING DETECTED
            </>
          ) : (
            <>
              <ShieldCheck size={18} />
              WEBSITE SAFE
            </>
          )}
        </div>
      </div>

      <div className="scanned-url">
        <span>Scanned URL</span>
        <strong>{result.url}</strong>
      </div>

      <div className="score-card">
        <div
          className="score-circle"
          style={{
            background: `conic-gradient(
              ${isPhishing ? "#ff5968" : "#38e6a0"}
              0deg ${result.score * 3.6}deg,
              #202a3e ${result.score * 3.6}deg 360deg
            )`,
          }}
        >
          <div>
            <strong>{result.score}%</strong>
            <small>Risk</small>
          </div>
        </div>

        <div className="score-info">
          <p className="small-label">TRUSTSHIELD RISK SCORE</p>

          <h3>
            {isPhishing ? "High Risk Website" : "Low Risk Website"}
          </h3>

          <p>
            Our analysis detected multiple security signals associated with
            this website.
          </p>
        </div>
      </div>

      <div className="analysis-grid">
        <AnalysisCard
          type="domain"
          title="Domain Risk"
          value={result.domainRisk}
        />

        <AnalysisCard
          type="content"
          title="Content Similarity"
          value={result.contentSimilarity}
        />

        <AnalysisCard
          type="visual"
          title="Visual Similarity"
          value={result.visualSimilarity}
        />
      </div>

      <div className="reasons-card">
        <div className="section-title">
          <AlertTriangle size={20} />
          <h3>Why is this website risky?</h3>
        </div>

        <div className="reasons">
          {result.reasons.map((reason, index) => (
            <div className="reason" key={index}>
              <XCircle size={18} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="new-scan-btn" onClick={onNewScan}>
        Scan Another Website
      </button>
    </section>
  );
}

export default ResultCard;