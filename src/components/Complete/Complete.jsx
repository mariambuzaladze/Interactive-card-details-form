import "./complete.css";
import IconComplete from "/images/icon-complete.svg";

export default function Complete() {
  return (
    <div className="thanks">
      <img className="icon-complete" src={IconComplete} alt="icon complete" />

      <div className="text">
        <h1>THANK YOU!</h1>
        <p className="added">We’ve added your card details</p>
      </div>

      <button>Continue</button>
    </div>
  );
}
