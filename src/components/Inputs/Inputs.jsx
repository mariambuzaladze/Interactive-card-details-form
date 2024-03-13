import "./inputs.css";

export default function Inputs({
  id,
  inputName,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input">
      <label htmlFor={id}>{inputName}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
