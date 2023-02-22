import Header from "./components/Header/Header";
import Lesson from "./pages/Lesson";
import {data} from "./helper/data";

console.log();
function App() {
  return (
    <div>
      <Header/>
      <main>
        <div className="container">
          <Lesson lessonData={data}/>
        </div>
      </main>
    </div>
  );
}

export default App;
