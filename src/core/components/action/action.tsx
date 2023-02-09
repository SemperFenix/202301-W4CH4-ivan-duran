import { useContext } from "react";
import { AppContext } from "../../context/context";

export function Action({ children }: { children: JSX.Element }) {
  const { phone, deleteNumber } = useContext(AppContext);

  const handleCallClick = () => {
    const hang = document.querySelector(".hang");
    hang?.classList.toggle("off");
    const call = document.querySelector(".call");
    call?.classList.toggle("off");
  };

  const handleHangClick = () => {
    const call = document.querySelector(".call");
    call?.classList.toggle("off");
    const hang = document.querySelector(".hang");
    hang?.classList.toggle("off");
    deleteNumber();
  };

  return (
    <div className="actions">
      {children}
      <button
        className={phone.length === 9 ? "call active" : "call"}
        onClick={handleCallClick}
      >
        Call
      </button>
      <button className="hang off" onClick={handleHangClick}>
        Hang
      </button>
    </div>
  );
}
