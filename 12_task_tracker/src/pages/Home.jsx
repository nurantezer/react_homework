import { useEffect, useState } from "react"
import AddTask from "../components/addTask/AddTask" 
import TaskList from "../components/taskList/TaskList"
import axios from "axios"
import Button from "react-bootstrap/Button"
const Home = () => {
  const [task, setTask] = useState([])
  const [text, setText] = useState("Show Task Bar")
  const [isOpen, setIsOpen] = useState(false)
  const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";
  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText)
  }

  const getTask = async () => {
    const { data } = await axios(url)
    setTask(data)
    console.log(data);
  }
  useEffect(() => {
    getTask()
  }, [])
  
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        variant="danger"
        onClick={() => {
          toggle();
        }}
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}
      <TaskList task={task} getTask={getTask} />
    </div>
  );
}

export default Home