import Reminder from "./Reminder";
import {data} from "./data"


function App() {
  return (
    <div >
      {data.map(({id, name, hour, image }) =>(
      <Reminder key={id} name={name} hour={hour} img={image}/>  
      ))}
    
    </div>
  );
}

export default App;
