import "./front.css";
import Circle from "/images/card-logo.svg";

export default function Front() {
  return (
    <div className="front">
      <img className="card-logo" src={Circle} alt="card logo" />

      <div className="front-text">
        <p className="card-number">0000 0000 0000 0000</p>

        <div className="name-date">
          <p className="card-name">JANE APPLESEED</p>
          <p className="card-date">00/00</p>
        </div>
      </div>
    </div>
  );
}
