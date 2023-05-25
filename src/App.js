import { NavBar,  CenteresText, TextWithImage } from "./components";

import "./App.css";

function App() {
  return (
    <div className="root">
      <NavBar />
      <CenteresText />
      <TextWithImage textToTheRight={false} />
      <TextWithImage textToTheRight={true} />
    </div>
  );
}

export default App;
