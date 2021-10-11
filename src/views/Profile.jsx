import { Container , Row , Col } from "react-bootstrap"
import Jumbo from "../components/Jumbo"
import SideBar from "../components/SideBar"





const Profile = () => (

    <Container>
        <Row>
            <Col md={8} style={{height: "100%"}}>
                <Jumbo />
            </Col>
            
            <Col md={4}>
                <SideBar />
            </Col>
        </Row>
    </Container>
)

export default Profile