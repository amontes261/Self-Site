import './App.css';
import { HashRouter } from "react-router-dom";

// router //
import Routes from "./routes"

function App() {
  return (
    <div style={{ backgroundColor: "#181A18" }}>
      <HashRouter>
        <Routes/>
      </HashRouter>
    </div>
  );
}

export default App;
