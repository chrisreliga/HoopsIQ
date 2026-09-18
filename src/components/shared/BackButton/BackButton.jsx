import { Link } from "react-router";

import "./BackButton.css";

export default function BackButton() {
  return (
    <Link to="/" className="back-btn-container">
      <i className="fa-solid fa-chevron-left previous-screen-btn"></i>
    </Link>
  );
}
