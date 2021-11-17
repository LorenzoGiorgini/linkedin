import { Container, Row, Col } from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExperienceList from "../components/ExperienceList";
import Footer from "../components/Footer";

const Profile = (props) => {
  const params = useParams();

  const [getExperience, setGetExperience] = useState([]);

  const [dynamicUser, setDynamicUser] = useState(null);

  const fetchUser = async (id) => {
    try {
      let response = await fetch(
        "https://strive-linkedin.herokuapp.com/profile/" + id
      );
      let data = await response.json();
      setDynamicUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(params.id);
  }, [params]);

  useEffect(() => {
    fetchUser(params.id);
  }, []);

  return (
    <>
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={8} style={{ height: "100%" }}>
          {dynamicUser && <Jumbo getExperience={getExperience} setGetExperience={setGetExperience} fetchUser={fetchUser} user={props.user} dynamicUser={props.dynamicUser} />}
          {dynamicUser && <ExperienceList getExperience={getExperience} setGetExperience={setGetExperience} user={props.user} dynamicUser={props.dynamicUser} />}
        </Col>

        <Col md={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default Profile;