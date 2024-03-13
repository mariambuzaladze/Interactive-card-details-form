import "./cards.css";
import Front from "../Front/Front";
import Back from "../Back/Back";

export default function Cards({ name, number, month, year, cvc }) {
  return (
    <div className="container">
      <Back cvc={cvc} />
      <Front name={name} number={number} month={month} year={year} />
    </div>
  );
}
