import { Col, Container, Row } from "react-bootstrap"
import ExistingPosts from "../components/ExistingPosts"
import NewPost from "../components/NewPost"
import { useState , useEffect } from "react"
import LeftSideBarCardProfile from "../leftSideBarHome/LeftSideBarCardProfile"
import RightSideBar from "../rightSideBarHome/RightSideBar"


const Profile = () => {
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        const reversed = data.reverse().slice(0, 20);
        setPosts(reversed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={2} sm={2} style={{ height: "100%" }}>
          <LeftSideBarCardProfile/>
        </Col>
        <Col md={6} sm={10} style={{ height: "100%" }}>
          <NewPost fetchPosts={fetchPosts} />
          <ExistingPosts posts={posts} />
        </Col>

        <Col md={4} className="d-none d-md-block" style={{ height: "100%" }}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
