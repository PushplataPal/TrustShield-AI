import { Globe, Activity, Brain } from "lucide-react";

function AnalysisCard({ type, title, value }) {
  const icons = {
    domain: <Globe />,
    content: <Activity />,
    visual: <Brain />,
  };

  const level =
    value >= 70 ? "High Risk" : value >= 40 ? "Medium Risk" : "Low Risk";

  return (
    <div className="analysis-card">
      <div className="analysis-top">
        <div className="analysis-icon">{icons[type]}</div>

        <span className={`risk-level ${value >= 70 ? "high" : ""}`}>
          {level}
        </span>
      </div>

      <h3>{title}</h3>

      <div className="progress">
        <div style={{ width: `${value}%` }}></div>
      </div>

      <div className="percentage">
        {value}%
      </div>
    </div>
  );
}

export default AnalysisCard;