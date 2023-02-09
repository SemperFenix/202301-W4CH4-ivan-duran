import { useContext } from "react";
import { AppContext } from "../../context/context";

export function Display() {
  const { phone } = useContext(AppContext);

  return <span className="number">{phone}</span>;
}
