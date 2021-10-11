import { Container , Row , Col } from "react-bootstrap"
import Jumbo from "../components/Jumbo"
import SideBar from "../components/SideBar"





const Profile = () => (
    <Container>
        <Row>
            <Col md={8} className="color">
                <Jumbo />
            </Col>
            
            <Col md={4} className="color">
                <SideBar />
            </Col>
        </Row>
    </Container>
)

export default Profile