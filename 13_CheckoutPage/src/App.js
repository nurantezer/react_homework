import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-light app">
      <BrowserRouter>
        <Navbar />
        <Routes>

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
