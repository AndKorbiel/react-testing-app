import {Container, Row, Col, Button} from "react-bootstrap";

export default function ServiceList(props) {
    return (
        <Container>
            <Row>
            {props.servicesList && props.servicesList.map(el => {
                return (
                    <Col key={el.name} className="service">
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <p><b>{el.price}$</b></p>
                        <Button onClick={()=> props.action(el)}>Order</Button>
                    </Col>
                )
            })}
            </Row>
        </Container>
    )
}