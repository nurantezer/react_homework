import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { useState } from "react";
const AddTask = () => {
    const [task, setTask] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefaul()
        setDate("")
        setTask("")
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
