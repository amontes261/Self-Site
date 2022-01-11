import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from 'react-router-dom'

// router //
import BaseRouter from "./routes"

function App() {
  return (
    <div style={{ backgroundColor: "#181A18", width: "100vw", height: "100vh"}}>
      <Router>
        <BaseRouter/>
      </Router>
    </div>
  );
}

export default App;
