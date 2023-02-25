import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main"
import data from "./data";
import Footer from "./footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item) => <Main {...item}/>)}
      <Footer/>
    </div>
  );
}

export default App;
