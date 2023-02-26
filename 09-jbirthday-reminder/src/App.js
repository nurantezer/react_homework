import { useState } from "react";
import {data} from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{data.length} birthdays today</h3>
        <List  people={people}/>
        <button onClick={() => setPeople([])}>
          clear all
        </button>
        <button onClick={() => setPeople(data)}>
          Nuran
        </button>
      </section>
    </main>
  );
}

export default App;
