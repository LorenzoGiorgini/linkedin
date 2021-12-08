import { Col, Container, Row } from "react-bootstrap"
import ExistingPosts from "../components/ExistingPosts"
import NewPost from "../components/NewPost"
import { useState , useEffect } from "react"
import LeftSideBarCardProfile from "../leftSideBarHome/LeftSideBarCardProfile"
import RightSideBar from "../rightSideBarHome/RightSideBar"
import NavBar from "../components/NavBar";

const Profile = (props) => {
  
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      let response = await fetch(`https://strive-linkedin.herokuapp.com/posts/`);

      if (response.ok) {
        let data = await response.json();
        setPosts(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    props.user !== null &&
    <>
    <NavBar/>
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col xs={12} md={4} lg={2} style={{ height: "100%" }}>
          <LeftSideBarCardProfile user={props.user}/>
        </Col>
        <Col xs={12} md={8} lg={6} style={{ height: "100%" }}>
          <NewPost user={props.user} setUser={props.setUser} posts={posts} fetchPosts={fetchPosts} />
          <ExistingPosts user={props.user} posts={posts} fetchPosts={fetchPosts} />
        </Col>

        <Col md={4} className="d-none d-md-block" style={{ height: "100%" }}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Profile;