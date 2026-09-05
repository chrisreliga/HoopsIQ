import { useState, useEffect } from "react";

import "./PlayerDashboard.css";

import PlayerHero from "./PlayerHero/PlayerHero.jsx";
import PlayerBio from "./PlayerBio/PlayerBio.jsx";
import PlayerContract from "./PlayerContract/PlayerContract.jsx";
import PlayerAnalysis from "./PlayerAnalysis/PlayerAnalysis.jsx";
import ScrollNavbar from "../shared/ScrollNavbar/ScrollNavbar.jsx";
import BackButton from "../shared/BackButton/BackButton.jsx";

export default function PlayerDashboard({ handleOnBack, currentPlayer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleWheel = (event) => {
      event.preventDefault();

      const currentDeltaY = event.deltaY;

      if (currentDeltaY > 0) {
        setIsScrolled(true);
      } else if (currentDeltaY <= 0) {
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
      <ScrollNavbar bio={currentPlayer.bio} isScrolled={isScrolled} />
      <PlayerHero bio={currentPlayer.bio} isScrolled={isScrolled} />

      <BackButton handleOnBack={handleOnBack} />

      <div
        className={
          isScrolled
            ? "content player-content-transition show"
            : "content player-content-transition"
        }
      >
        <div className={`content-slider ${isDeepDiveOpen ? "show" : ""}`}>
          <div className="main-content">
            <div className="content-section">
              <PlayerAnalysis
                analysis={currentPlayer.analysis}
                isScrolled={isScrolled}
                isDeepDiveOpen={isDeepDiveOpen}
                setIsDeepDiveOpen={setIsDeepDiveOpen}
              />
            </div>

            <div className="content-section">
              <PlayerBio bio={currentPlayer.bio} isScrolled={isScrolled} />
            </div>

            <div className="content-section">
              <PlayerContract
                contract={currentPlayer.contract}
                isScrolled={isScrolled}
              />
            </div>

            <div className="analysis-dropdown">
              <button
                className="analysis-btn"
                onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
              >
                Deep Dive <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="analysis-deepdive">
            <h2 className="deepdive-headline">
              {currentPlayer.analysis.headline}
            </h2>
            <div className="back-btn-spacing">
              <p className="deepdive-text">{currentPlayer.analysis.ddDeal}</p>
              <button
                className="back-btn"
                onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
              >
                <i className="fa-solid fa-chevron-left"></i>Back to Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
