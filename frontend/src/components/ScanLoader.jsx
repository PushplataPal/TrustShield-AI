import { Activity } from "lucide-react";

function ScanLoader() {
  return (
    <section className="scanning-box">
      <div className="loader"></div>

      <h3>Analyzing Website...</h3>

      <p>
        Checking domain intelligence, website content and visual similarity.
      </p>

      <div className="scan-steps">
        <span>Domain Analysis</span>
        <span>Content Analysis</span>
        <span>Visual Analysis</span>
        <span>AI Risk Engine</span>
      </div>

      <div className="scanning-status">
        <Activity size={15} />
        AI security engine is working...
      </div>
    </section>
  );
}

export default ScanLoader;