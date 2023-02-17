import Content from "./components/Content";
import Header from "./components/Header";
import {data} from "./data"

function App() {
  return (
    <div>
      <Header/>
      <Content data={data}/>
       
    </div>
  );
}

export default App;
