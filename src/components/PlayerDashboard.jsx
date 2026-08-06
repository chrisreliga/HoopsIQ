import { useState, useRef, useEffect } from "react";

import { devinBooker } from "../data/players.js";

import PlayerHero from "./PlayerHero.jsx";
import PlayerBio from "./PlayerBio.jsx";
import PlayerContract from "./PlayerContract.jsx";
import PlayerAnalysis from "./PlayerAnalysis.jsx";
import ScrollNavbar from "./ScrollNavbar.jsx";

export default function PlayerDashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsScrolled(entry.isIntersecting);
        });
      },
      {
        threshold: 1,
      },
    );
    observer.observe(triggerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="container">
      <ScrollNavbar bio={devinBooker.bio} isScrolled={isScrolled} />

      <PlayerHero bio={devinBooker.bio} isScrolled={isScrolled} />

      <div ref={triggerRef} className="scroll-trigger"></div>

      <div className={isScrolled ? "content show" : "content"}>
        <div className="content-section bio-section">
          <PlayerBio bio={devinBooker.bio} isScrolled={isScrolled} />
        </div>

        <div className="content-section contract-section">
          <PlayerContract
            contract={devinBooker.contract}
            isScrolled={isScrolled}
          />
        </div>

        <div className="content-section analysis-section">
          <PlayerAnalysis
            analysis={devinBooker.analysis}
            isScrolled={isScrolled}
          />
        </div>
      </div>
    </main>
  );
}
