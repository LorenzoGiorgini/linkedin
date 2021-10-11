import { Container , Row , Col } from "react-bootstrap"
import Jumbo from "../components/Jumbo"





const Profile = () => (
    <Container>
        <Row>
            <Col md={8} className="color">
                <Jumbo />
            </Col>
            <Col md={4} className="color">
                <h1>dsdfdsfsf</h1>
            </Col>
        </Row>
    </Container>
)

export default Profile