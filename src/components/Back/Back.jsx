import "./back.css";
import CardBack from "/images/bg-card-back.png";

export default function Back() {
  return (
    <>
      <img className="card-back" src={CardBack} alt="card back" />;
      <p className="back-text">000</p>
    </>
  );
}
