export function Action({ children }: { children: JSX.Element }) {
  return (
    <div className="actions">
      {children}
      <button className="call">Call</button>
      <button className="hang active">Hang</button>
    </div>
  );
}
