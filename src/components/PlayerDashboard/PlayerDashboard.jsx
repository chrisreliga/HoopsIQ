import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";

import { players } from "../../data/players.js";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

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

  const initTouch = useRef(0);
  const panelRef = useRef(null);
  const isScrolledRef = useRef(false);

  const isDesktop = useMediaQuery("(min-width: 1100px)");

  // useParams Hook
  const { playerId } = useParams();
  const currentPlayer = players.find(
    (player) => Number(playerId) === player.id,
  );

  // useEffect Hook
  useEffect(() => {
    if (isDesktop) return;

    window.scrollTo(0, 0);

    const handleWheel = (event) => {
      const isScrollingUp = event.deltaY < 0;
      const isAtTop = panelRef.current.scrollTop === 0;

      //If the panel is open, and you're NOT scrolling down at the top, stop here and let the panel scroll.
      if (isScrolledRef.current && !(isScrollingUp && isAtTop)) {
        return;
      }

      event.preventDefault();

      const currentDeltaY = event.deltaY;

      if (currentDeltaY > 0) {
        setIsScrolled(true);
      } else if (currentDeltaY <= 0) {
        setIsScrolled(false);
      }
    };

    const handleTouchStart = (event) => {
      initTouch.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const currPosition = event.touches[0].clientY;

      const swipeDistance = initTouch.current - currPosition;
      const isSwipingDown = swipeDistance < 0;
      const isAtTop = panelRef.current.scrollTop === 0;

      //If the panel is open, and you're NOT swiping down at the top, stop here and let the panel scroll.
      if (isScrolledRef.current && !(isSwipingDown && isAtTop)) {
        return;
      }

      if (!isScrolledRef.current && isSwipingDown) {
        return;
      }

      event.preventDefault();

      if (swipeDistance > 200) {
        setIsScrolled(true);
      } else if (swipeDistance < -50) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);

    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel, { passive: false });

      window.removeEventListener("touchstart", handleTouchStart);

      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDesktop]);

  useEffect(() => {
    isScrolledRef.current = isScrolled;
  }, [isScrolled]);

  return (
    <main className="container">
      <ScrollNavbar
        currentPlayer={currentPlayer}
        bio={currentPlayer.bio}
        isScrolled={isScrolled}
      />

      <PlayerHero isScrolled={isScrolled} currentPlayer={currentPlayer} />

      <BackButton />

      <div
        ref={panelRef}
        className={`content player-content-transition ${
          isScrolled ? "show" : ""
        }`}
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
