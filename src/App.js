import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
