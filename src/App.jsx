import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmartTransportSystem from "./pages/SmartTransportSystem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SmartTransportSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
