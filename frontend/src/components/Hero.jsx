import { Brain } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="badge">
        <Brain size={16} />
        AI-POWERED PHISHING DETECTION
      </div>

      <h1>
        Verify Before
        <span>You Trust.</span>
      </h1>

      <p>
        TrustShield AI analyzes domains, website content and visual similarity
        to detect potential phishing websites before they can harm you.
      </p>
    </section>
  );
}

export default Hero;