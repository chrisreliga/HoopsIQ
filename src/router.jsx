import { createBrowserRouter } from "react-router";

import App from "./App.jsx";
import TeamDashboard from "./components/TeamDashboard/TeamDashboard.jsx";
import PlayerDashboard from "./components/PlayerDashboard/PlayerDashboard.jsx";
import TeamDeepDive from "./components/TeamDeepDive/TeamDeepDive.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TeamDashboard />,
      },
      {
        path: "team-deep-dive",
        element: <TeamDeepDive />,
      },
      {
        path: "player/:playerId",
        element: <PlayerDashboard />,
      },
    ],
  },
]);

export default router;
