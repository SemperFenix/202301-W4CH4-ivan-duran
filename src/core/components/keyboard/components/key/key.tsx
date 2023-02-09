import { useContext, useEffect } from "react";
import { AppContext } from "../../../../context/context";

export function Key() {
  const { phone, updateNumber, deleteNumber } = useContext(AppContext);
  console.log(phone);

  return (
    <ol className="keyboard">
      <li>
        <button className="key" value="1" onClick={() => updateNumber("1")}>
          1
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("2");
          }}
        >
          2
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("3");
          }}
        >
          3
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("4");
          }}
        >
          4
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("5");
          }}
        >
          5
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("6");
          }}
        >
          6
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("7");
          }}
        >
          7
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("8");
          }}
        >
          8
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("9");
          }}
        >
          9
        </button>
      </li>
      <li>
        <button
          className="key"
          onClick={() => {
            updateNumber("0");
          }}
        >
          0
        </button>
      </li>
      <li>
        <button
          className="key big"
          onClick={() => {
            deleteNumber();
          }}
        >
          delete
        </button>
      </li>
    </ol>
  );
}
function updateNumber() {
  throw new Error("Function not implemented.");
}
