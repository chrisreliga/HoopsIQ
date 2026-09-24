import { useState, useEffect } from "react";
import { teams } from "../../../data/teams";

import "./TeamHero.css";

export default function TeamHero() {
  const [apiTeam, setApiTeam] = useState(null);

  useEffect(() => {
    fetch("https://api.balldontlie.io/v1/teams/24", {
      headers: { Authorization: "940ac35f-369c-4483-9555-109472ac7f08" },
    })
      .then((response) => response.json())
      .then((result) => {
        setApiTeam(result.data);
      });
  }, []);

  if (apiTeam === null) {
    return <p>Loading...</p>;
  }

  return (
    <header className="team-hero">
      <div className="team-hero-header">
        <img src={teams[0].info.teamLogo} alt={teams[0].info.name} />

        <h1>{apiTeam.full_name}</h1>

        <div className="team-standings">
          <p className="team-division">
            {teams[0].info.standings}th in the {teams[0].info.division}
          </p>
          <i className="fa-solid fa-circle dot-separator"></i>
          <p className="team-record">{teams[0].info.record}</p>
        </div>
      </div>
    </header>
  );
}
