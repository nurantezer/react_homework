import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { useState } from "react";
import axios from "axios"

const AddTask = ({getTask}) => {
    const [task, setTask] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefaul()
        const newTask = { task, date }
        addNewTask(newTask)
        setDate("")
        setTask("")
    }

    const addNewTask = async (newTask) => {
        const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";
        try {
            await axios.post(url,newTask)
        } catch (error) {
            
        }
        getTask()
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Task
                    </Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Task"
                        onChange={(e) => setTask(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date"
                    onChange={(e) => setDate(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <div className="text-center">
                    <Button variant="primary w-50" type="submit">SAVE</Button>
                </div>
            </Form>
        </div>
    )
 
};

export default AddTask;
