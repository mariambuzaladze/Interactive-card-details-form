import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import "./form.css";

export default function Form({
  setComplete,
  name,
  setName,
  nameError,
  setNameError,
  setNumber,
  number,
  numberError,
  setNumberError,
  setMonth,
  month,
  monthError,
  setMonthError,
  setYear,
  year,
  yearError,
  setYearError,
  setCvc,
  cvc,
  cvcError,
  setCvcError,
}) {
  const handleSubmit = () => {
    let isValid = true;
    if (name.length === 0) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (number.length === 0 || /\D/.test(number)) {
      setNumberError(true);
      isValid = false;
    } else {
      setNumberError(false);
    }

    if (month.length === 0 || /\D/.test(month) || month > 12 || month <= 0) {
      setMonthError(true);
      isValid = false;
    } else {
      setMonthError(false);
    }

    if (year.length === 0 || /\D/.test(year) || year <= 0) {
      setYearError(true);
      isValid = false;
    } else {
      setYearError(false);
    }

    if (cvc.length === 0 || /\D/.test(cvc)) {
      setCvcError(true);
      isValid = false;
    } else {
      setCvcError(false);
    }

    if (isValid) {
      setComplete(true);
    } else {
      setComplete(false);
    }
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
