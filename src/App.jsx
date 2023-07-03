import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home, Contact } from "./pages";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
