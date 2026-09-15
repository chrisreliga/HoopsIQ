import { createBrowserRouter } from "react-router";

import App from "./App.jsx";
import TeamDashboard from "./components/TeamDashboard/TeamDashboard.jsx";
import PlayerDashboard from "./components/PlayerDashboard/PlayerDashboard.jsx";
import FullRoster from "./components/FullRoster/FullRoster.jsx";

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
        path: "full-roster",
        element: <FullRoster />,
      },
      {
        path: "player/:playerId",
        element: <PlayerDashboard />,
      },
    ],
  },
]);

export default router;
