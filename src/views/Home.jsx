import { Col, Container, Row } from "react-bootstrap"
import ExistingPosts from "../components/ExistingPosts"
import NewPost from "../components/NewPost"
import { useState , useEffect } from "react"
import LeftSideBarCardProfile from "../leftSideBarHome/LeftSideBarCardProfile"

const Profile = () => {

    const [ toggle , setToggle ] = useState(false)

    return (
        <Container style={{ marginTop: "100px" }}>
            <Row>
                <Col md={2} sm={2} style={{ height: "100%" }}>
                <LeftSideBarCardProfile/>
                   
                </Col>
                <Col md={6} sm={10} style={{ height: "100%" }}>
                    <NewPost />
                    <ExistingPosts />
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