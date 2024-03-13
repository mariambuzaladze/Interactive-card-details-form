import "./front.css";
import Circle from "/images/card-logo.svg";

export default function Front({ name, number, month, year }) {
  return (
    <div className="front">
      <img className="card-logo" src={Circle} alt="card logo" />

      <div className="front-text">
        <p className="card-number">{number}</p>

        <div className="name-date">
          <p className="card-name">{name}</p>
          <p className="card-date">{`${month} / ${year}`}</p>
        </div>
      </div>
    </div>
  );
}
