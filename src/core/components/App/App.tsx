import { Action } from "../actions/action";
import { Display } from "../display/display";
import { Info } from "../info/info";
import { Keyboard } from "../keyboard/keyboard";

function App() {
  return (
    <div className="container">
      <Info></Info>
      <Keyboard>
        <Action>
          <Display></Display>
        </Action>
      </Keyboard>
    </div>
  );
}

export default App;
