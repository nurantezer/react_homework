import Lesson from "./pages/Lesson";
import { data } from "./helper/data";
import Header from "./components/header/Header";

console.log(data);
function App() {
  return (
    <div>
      <Header />
      <div className="lesson">
        <div className="bas">Lesson Reminder</div>
        <div className="lesson-card">
          {data.map((item, index) => {
            return <Lesson key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
