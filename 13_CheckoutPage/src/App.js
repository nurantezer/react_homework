import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
function App() {
  return (
    <div className="bg-light app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/new-product" element={<NewProduct/>} />
          <Route path="/product-list" element={<ProductList />} />
          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
