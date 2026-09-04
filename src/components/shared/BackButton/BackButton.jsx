import "./BackButton.css";

export default function BackButton({ handleOnBack }) {
  return (
    <button onClick={handleOnBack} className="back-btn-container">
      <i className="fa-solid fa-chevron-left previous-screen-btn"></i>
    </button>
  );
}
