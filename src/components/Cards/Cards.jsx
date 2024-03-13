import "./cards.css";
import Front from "../Front/Front";
import Back from "../Back/Back";

export default function Cards() {
  return (
    <div className="container">
      <Back />
      <Front />
    </div>
  );
}
