import { useContext } from "react";
import { AppContext } from "../../context/context";

export function Display() {
  const { phone } = useContext(AppContext);
  const number = phone.number;

  return <span className="number">{number}</span>;
}
