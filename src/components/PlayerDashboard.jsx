import { devinBooker } from "../data/players.js";
import PlayerHeader from "./PlayerHeader.jsx";
import PlayerContract from "./PlayerContract.jsx";
import PlayerAnalysis from "./PlayerAnalysis.jsx";

export default function PlayerDashboard() {
  return (
    <main className="container">
      <PlayerHeader bio={devinBooker.bio} />

      <PlayerContract contract={devinBooker.contract} />

      <PlayerAnalysis analysis={devinBooker.analysis} />
    </main>
  );
}
