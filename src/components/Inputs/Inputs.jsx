import "./inputs.css";

export default function Inputs({ id, inputName, placeholder }) {
  return (
    <div className="input">
      <label htmlFor={id}>{inputName}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </div>
  );
}
