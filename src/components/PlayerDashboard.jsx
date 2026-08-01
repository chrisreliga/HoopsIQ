import { devinBooker } from "../data/players.js";
import PlayerHero from "./PlayerHero.jsx";
import PlayerBio from "./PlayerBio.jsx";
import PlayerContract from "./PlayerContract.jsx";
import PlayerAnalysis from "./PlayerAnalysis.jsx";

export default function PlayerDashboard() {
  return (
    <main className="container">
      <PlayerHero bio={devinBooker.bio} />

      <PlayerBio bio={devinBooker.bio} />

      <PlayerContract contract={devinBooker.contract} />

      <PlayerAnalysis analysis={devinBooker.analysis} />
    </main>
  );
}
