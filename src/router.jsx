import { createBrowserRouter } from "react-router";

import App from "./App.jsx";
import TeamDashboard from "./components/TeamDashboard/TeamDashboard.jsx";
import PlayerDashboard from "./components/PlayerDashboard/PlayerDashboard.jsx";
import RosterDashboard from "./components/RosterDashboard/RosterDashboard.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        index: true,
        element: <TeamDashboard />,
      },
      {
        path: "full-roster",
        element: <RosterDashboard />,
      },
      {
        path: "player/:playerId",
        element: <PlayerDashboard />,
      },
    ],
  },
]);

export default router;
