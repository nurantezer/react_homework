import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import PlayerCard from "./PlayerCard"
import {data} from "../helpers/data"
const CardContainer = () => {
  return (
    <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justfiy-content-center">
        {data.map((player,index) =>{
            return(
                <Col md={6} lg={4} xl={3} key={index} >
                    <PlayerCard {...player}/>
                </Col>
            )
        })}
        </Row>


    </Container>
  )
}

export default CardContainer