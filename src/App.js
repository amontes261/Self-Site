import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from 'react-router-dom'

// router //
import BaseRouter from "./routes"

function App() {
  return (
    <div style={{ backgroundColor: "#ECF0F5", width: "auto", height: "auto"}}>
      <Router>
        <BaseRouter/>
      </Router>
    </div>
  );
}

export default App;
