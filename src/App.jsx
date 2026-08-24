import { useState } from "react";
import "./App.css";
import PlayerDashboard from "./components/PlayerDashboard/PlayerDashboard";
import TeamDashboard from "./components/TeamDashboard/TeamDashboard";

function App() {
  // const [currentScreen, setCurrentScreen] = useState(team);
  return (
    <>
      {/* <PlayerDashboard /> */}
      <TeamDashboard />
    </>
  );
}

export default App;
