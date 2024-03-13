import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import "./form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [month, setMonth] = useState("");
  const [monthError, setMonthError] = useState(false);
  const [year, setYear] = useState("");
  const [yearError, setYearError] = useState(false);
  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState(false);

  const handleSubmit = () => {
    if (name.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (number.length === 0 || /\D/.test(number)) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }

    if (month.length === 0 || /\D/.test(month) || month > 12) {
      setMonthError(true);
    } else {
      setMonthError(false);
    }

    if (year.length === 0 || /\D/.test(year)) {
      setYearError(true);
    } else {
      setYearError(false);
    }

    if (cvc.length === 0 || /\D/.test(cvc)) {
      setCvcError(true);
    } else {
      setCvcError(false);
    }
    console.log(name);
    console.log(number);
    console.log(month);
    console.log(year);
    console.log(cvc);
  };

  return (
    <div className="form">
      <Inputs
        id={"name"}
        inputName={"CARDHOLDER NAME"}
        placeholder={"e.g. Jane Appleseed"}
        value={name}
        onChange={(event) => setName(event.target.value.trim())}
      />
      {nameError ? <p className="error">Can’t be blank</p> : null}

      <Inputs
        id={"number"}
        inputName={"CARD NUMBER"}
        placeholder={"e.g. 1234 5678 9123 0000"}
        value={number}
        onChange={(event) => setNumber(event.target.value.trim())}
      />
      {numberError ? <p className="error">Wrong format, numbers only</p> : null}

      <div className="inputs">
        <div className="input-error">
          <Inputs
            id={"month"}
            inputName={"Exp. Date"}
            placeholder={"MM"}
            value={month}
            onChange={(event) => setMonth(event.target.value.trim())}
          />
          {monthError ? (
            <p className="error">Can’t be blank, numbers only below 12</p>
          ) : null}
        </div>

        <div className="input-error">
          <Inputs
            id={"year"}
            inputName={" (MM/YY)"}
            placeholder={"YY"}
            value={year}
            onChange={(event) => setYear(event.target.value.trim())}
          />
          {yearError ? (
            <p className="error">Can’t be blank, numbers only</p>
          ) : null}
        </div>

        <div className="input-error">
          <Inputs
            id={"CVC"}
            inputName={"CVC"}
            placeholder={"e.g. 123"}
            value={cvc}
            onChange={(event) => setCvc(event.target.value.trim())}
          />
          {cvcError ? (
            <p className="error">Can’t be blank, numbers only</p>
          ) : null}
        </div>
      </div>

      <button onClick={handleSubmit} className="confirm">
        Confirm
      </button>
    </div>
  );
}
