import {Col, Container, Row} from "react-bootstrap";
import "../../components/services-number/servicesNumbers.css";


function ServiceNumbers() {
    return (
        <div className="service-numbers">
            <Container>
                <Row>
               <Col md={2}>
                    <div className="info">
                        <div className="number">4</div>
                        <div className="text">Years of <br/> Experience</div>
                    </div>
                </Col>
                <Col md={2}>
                    <div className="info">
                        <div className="number">9</div>
                        <div className="text">Project <br/> Completed</div>
                    </div>

                    </Col>
                    {/* <Col md={3}>
                        <div className="info">
                            <div className="number">1.5k</div>
                            <div className="text">Happy <br/> Clients</div>
                        </div>

                    </Col>
                    <Col md={3}>
                        <div className="info">
                            <div className="number">14</div>
                            <div className="text">Years of <br/> Experience</div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>

    )
}

export default ServiceNumbers