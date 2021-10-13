import { Col, Container, Row } from "react-bootstrap"

const Profile = () => {
    return (
        <Container style={{ marginTop: "100px" }}>
            <Row>
                <Col md={2} sm={4} style={{ height: "100%" }}>
                    <h6>fdsdfsfsdf</h6>
                    <h6>fdsdfsfsdf</h6>
                </Col>
                <Col md={6} sm={8} style={{ height: "100%" }}>
                    <h6>fdsdfsfsdf</h6>
                    <h6>fdsdfsfsdf</h6>
                </Col>

                <Col md={4} className="d-none d-md-block" style={{ height: "100%" }}>
                    <h1>fdsdfsfsdf</h1>
                    <h1>fdsdfsfsdf</h1>
                </Col>
            </Row>
        </Container>
    )
}


export default Profile