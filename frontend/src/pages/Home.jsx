import { useState } from "react";
import { Globe, Brain, ShieldCheck } from "lucide-react";

import Hero from "../components/Hero";
import UrlScanner from "../components/UrlScanner";
import ScanLoader from "../components/ScanLoader";
import ResultCard from "../components/ResultCard";
import FeatureCard from "../components/FeatureCard";

function Home({ onSaveScan }) {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  const scanWebsite = (url) => {
    setScanning(true);
    setResult(null);

    // Temporary mock result.
    // This will later be replaced by backend API.
    setTimeout(() => {
      const scanResult = {
        url,
        score: 92,
        status: "phishing",
        domainRisk: 94,
        contentSimilarity: 87,
        visualSimilarity: 96,
        reasons: [
          "Suspicious domain pattern detected",
          "High similarity with a known website",
          "Potential phishing login form detected",
          "Multiple suspicious security signals found",
        ],
      };

      setResult(scanResult);
      setScanning(false);

      onSaveScan(scanResult);
    }, 1800);
  };

  const resetScan = () => {
    setResult(null);
  };

  if (scanning) {
    return (
      <>
        <Hero />
        <ScanLoader />
      </>
    );
  }

  if (result) {
    return (
      <ResultCard
        result={result}
        onNewScan={resetScan}
      />
    );
  }

  return (
    <>
      <Hero />

      <UrlScanner onScan={scanWebsite} />

      <section className="features">
        <FeatureCard
          icon={<Globe />}
          title="Domain Intelligence"
          text="Analyze suspicious domain patterns and security signals."
        />

        <FeatureCard
          icon={<Brain />}
          title="AI Risk Detection"
          text="Use machine learning to estimate phishing probability."
        />

        <FeatureCard
          icon={<ShieldCheck />}
          title="Explainable Results"
          text="Understand exactly why a website is considered risky."
        />
      </section>
    </>
  );
}

export default Home;