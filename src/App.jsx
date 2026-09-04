import { useState } from "react";

import "./App.css";

import PlayerDashboard from "./components/PlayerDashboard/PlayerDashboard";
import TeamDashboard from "./components/TeamDashboard/TeamDashboard";

function App() {
  const [currentScreen, setCurrentScreen] = useState("team");
  const [currentPlayer, setCurrentPlayer] = useState(null);

  function handleOnBack() {
    setCurrentScreen("team");
  }

  function onSelectPlayer(player) {
    setCurrentScreen("player");
    setCurrentPlayer(player);
  }

  return (
    <>
      {currentScreen === "team" ? (
        <TeamDashboard onSelectPlayer={onSelectPlayer} />
      ) : (
        <PlayerDashboard
          handleOnBack={handleOnBack}
          currentPlayer={currentPlayer}
        />
      )}
    </>
  );
}

export default App;
