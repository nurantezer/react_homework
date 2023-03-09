import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
function App() {
  return (
    <div className="bg-light app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
