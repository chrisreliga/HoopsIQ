import { useState, useRef, useEffect } from "react";

import { devinBooker } from "../data/players.js";

import PlayerHero from "./PlayerHero.jsx";
import PlayerBio from "./PlayerBio.jsx";
import PlayerContract from "./PlayerContract.jsx";
import PlayerAnalysis from "./PlayerAnalysis.jsx";
import ScrollNavbar from "./ScrollNavbar.jsx";

export default function PlayerDashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      const currentDeltaY = event.deltaY;

      if (currentDeltaY > 0) {
        setIsScrolled(true);
      } else if (currentDeltaY < 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel, { passive: false });
    };
  }, []);

  return (
    <main className="container">
      <ScrollNavbar bio={devinBooker.bio} isScrolled={isScrolled} />

      <PlayerHero bio={devinBooker.bio} isScrolled={isScrolled} />

      <div className={isScrolled ? "content show" : "content"}>
        <div className={`content-slider ${isDeepDiveOpen ? "show" : ""}`}>
          <div className="main-content">
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
                isDeepDiveOpen={isDeepDiveOpen}
                setIsDeepDiveOpen={setIsDeepDiveOpen}
              />
            </div>
          </div>

          <div className="analysis-deepdive">
            <h2 className="deepdive-headline">
              {devinBooker.analysis.headline}
            </h2>
            <p className="deepdive-text">{devinBooker.analysis.deepDive}</p>
            <button
              className="back-btn"
              onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
            >
              <i className="fa-solid fa-chevron-left"></i>Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
