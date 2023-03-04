import { useEffect, useState } from "react"
import AddTask from "../components/addTask/AddTask" 
import TaskList from "../components/taskList/TaskList"
import axios from "axios"

const Home = () => {
  const [task, setTask] = useState([])
   const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";

  const getTask = async () => {
    const { data } = await axios(url)
    setTask(data)
    console.log(data);
  }
  useEffect(() => {
    getTask()
  }, [])
  
  return (
      <div>
      <AddTask getTask={getTask} />
      <TaskList task={task} getTask={getTask} />
    </div>
  )
}

export default Home