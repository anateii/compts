import "./index.css";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Buy now!
        </Button>
      </div>
      <div>
        <Button success>Hide ads!</Button>
      </div>
      <div>
        <Button danger>Hide ads!</Button>
      </div>
      <div>
        <Button warning>Hide ads!</Button>
      </div>
    </div>
  );
}

export default App;
