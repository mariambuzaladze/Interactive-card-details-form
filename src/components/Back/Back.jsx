import "./back.css";

export default function Back({ cvc }) {
  return (
    <div className="back">
      <p className="back-text">{cvc}</p>
    </div>
  );
}
