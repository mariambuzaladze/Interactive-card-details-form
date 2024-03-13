import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";
import Complete from "./components/Complete/Complete";

function App() {
  const [complete, setComplete] = useState(false);

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

  const isComplete = () => {
    if (complete) {
      return <Complete />;
    } else {
      return (
        <Form
          setComplete={setComplete}
          name={name}
          setName={setName}
          nameError={nameError}
          setNameError={setNameError}
          setNumber={setNumber}
          number={number}
          numberError={numberError}
          setNumberError={setNumberError}
          setMonth={setMonth}
          month={month}
          monthError={monthError}
          setMonthError={setMonthError}
          setYear={setYear}
          year={year}
          yearError={yearError}
          setYearError={setYearError}
          setCvc={setCvc}
          cvc={cvc}
          cvcError={cvcError}
          setCvcError={setCvcError}
        />
      );
    }
  };

  return (
    <>
      <Cards name={name} number={number} month={month} year={year} cvc={cvc} />
      {isComplete()}
    </>
  );
}

export default App;
