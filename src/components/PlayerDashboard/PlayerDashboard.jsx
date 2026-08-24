import { useState, useEffect } from "react";
import { players } from "../../data/players.js";
import "./PlayerDashboard.css";

import PlayerHero from "./PlayerHero/PlayerHero.jsx";
import PlayerBio from "./PlayerBio/PlayerBio.jsx";
import PlayerContract from "./PlayerContract/PlayerContract.jsx";
import PlayerAnalysis from "./PlayerAnalysis/PlayerAnalysis.jsx";
import ScrollNavbar from "../shared/ScrollNavbar/ScrollNavbar.jsx";
import BackButton from "../shared/BackButton/BackButton.jsx";

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
      <ScrollNavbar bio={players[0].bio} isScrolled={isScrolled} />

      <PlayerHero bio={players[0].bio} isScrolled={isScrolled} />

      <BackButton />

      <div
        className={
          isScrolled
            ? "content player-content-transition show"
            : "content player-content-transition"
        }
      >
        <div className={`content-slider ${isDeepDiveOpen ? "show" : ""}`}>
          <div className="main-content">
            <div className="content-section bio-section">
              <PlayerBio bio={players[0].bio} isScrolled={isScrolled} />
            </div>

            <div className="content-section contract-section">
              <PlayerContract
                contract={players[0].contract}
                isScrolled={isScrolled}
              />
            </div>

            <div className="content-section analysis-section">
              <PlayerAnalysis
                analysis={players[0].analysis}
                isScrolled={isScrolled}
                isDeepDiveOpen={isDeepDiveOpen}
                setIsDeepDiveOpen={setIsDeepDiveOpen}
              />
            </div>
          </div>

          <div className="analysis-deepdive">
            <h2 className="deepdive-headline">
              {players[0].analysis.headline}
            </h2>
            <div className="back-btn-spacing">
              <p className="deepdive-text">{players[0].analysis.deepDive}</p>
              <button
                className="back-btn"
                onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
              >
                <i className="fa-solid fa-chevron-left"></i>Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
