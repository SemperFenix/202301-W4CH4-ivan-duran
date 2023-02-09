import { Key } from "./components/key/key";

export function Keyboard({ children }: { children: JSX.Element }) {
  return (
    <main className="phone">
      <div className="keyboard-container">
        <Key></Key>
      </div>
      {children}
    </main>
  );
}
