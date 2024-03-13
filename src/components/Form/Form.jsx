import Inputs from "../Inputs/Inputs";
import "./form.css";

export default function Form() {
  return (
    <div className="form">
      <Inputs
        id={"name"}
        inputName={"CARDHOLDER NAME"}
        placeholder={"e.g. Jane Appleseed"}
      />

      <Inputs
        id={"number"}
        inputName={"CARD NUMBER"}
        placeholder={"e.g. 1234 5678 9123 0000"}
      />

      <div className="inputs">
        <Inputs id={"month"} inputName={"Exp. Date"} placeholder={"MM"} />

        <Inputs id={"year"} inputName={" (MM/YY)"} placeholder={"YY"} />

        <Inputs id={"CVC"} inputName={"CVC"} placeholder={"e.g. 123"} />
      </div>

      <button className="confirm">Confirm</button>
    </div>
  );
}
