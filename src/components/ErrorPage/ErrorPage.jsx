import { Link } from "react-router";

import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <main className="error-page">
      <div className="error-page-art">
        <i className="fa-solid fa-basketball error-page-ball"></i>
        <span className="error-page-shadow"></span>
      </div>

      <h1 className="error-page-title">Ballgame.</h1>
      <p className="error-page-text">Oops, this page air-balled</p>

      <Link to="/" className="error-page-link">
        Run it back, baby
      </Link>
    </main>
  );
}
