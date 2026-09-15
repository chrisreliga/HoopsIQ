import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { players } from "../../data/players.js";

import "./PlayerDashboard.css";

import PlayerHero from "./PlayerHero/PlayerHero.jsx";
import PlayerBio from "./PlayerBio/PlayerBio.jsx";
import PlayerContract from "./PlayerContract/PlayerContract.jsx";
import PlayerAnalysis from "./PlayerAnalysis/PlayerAnalysis.jsx";
import PlayerDeepDive from "./PlayerDeepDive/PlayerDeepDive.jsx";
import ScrollNavbar from "../shared/ScrollNavbar/ScrollNavbar.jsx";
import BackButton from "../shared/BackButton/BackButton.jsx";

export default function PlayerDashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  // useParams Hook
  const { playerId } = useParams();
  const currentPlayer = players.find((player) => playerId === player.id);
  console.log(currentPlayer);

  // useEffect Hook
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
    // window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("wheel", handleWheel, { passive: false });
      // window.removeEventListener("touchstart", handleWheel, { passive: false });
    };
  }, []);

  return (
    <main className="container">
      <ScrollNavbar bio={currentPlayer.bio} isScrolled={isScrolled} />

      <PlayerHero bio={currentPlayer.bio} isScrolled={isScrolled} />

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

          <PlayerDeepDive
            isDeepDiveOpen={isDeepDiveOpen}
            setIsDeepDiveOpen={setIsDeepDiveOpen}
            currentPlayer={currentPlayer}
          />
        </div>
      </div>
    </main>
  );
}
