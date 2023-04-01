import "./index.css";
import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Buy now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoCloudDownload />
          Hide ads!
        </Button>
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
