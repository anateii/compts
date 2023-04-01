import "./index.css";
import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button primary className="mb-5">
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          <GoDatabase />
          Buy now!
        </Button>
      </div>
      <div>
        <Button success className="mb-5">
          <GoCloudDownload />
          Hide ads!
        </Button>
      </div>
      <div>
        <Button danger className="mb-5">
          Hide ads!
        </Button>
      </div>
      <div>
        <Button warning>Hide ads!</Button>
      </div>
    </div>
  );
}

export default App;
