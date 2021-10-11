import { useEffect , useState } from 'react'
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import Advertisement from "../assets/advertisement.jpg";
// import "./Sidebar.css";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

  const [ profiles , setProfiles ] = useState([])

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjg0NWE4OTBjYzAwMTVjZjA3ZWEiLCJpYXQiOjE2MzM5NDE1NzQsImV4cCI6MTYzNTE1MTE3NH0.l0p-bV1Pw_UsfkiDzTx5nS4PTO6diKdzQCQWqrHyars",
          },
        }
      );
      let data = await response.json();
      let result = console.log("This is the fetched data from the API", data);

      setProfiles(data.slice(0, 5));
      console.log(profiles)
    } catch (error) {
      console.log(error, "Error");
    }
  }

    useEffect (() => {
      fetchData()
    }, [])

    return (
      <>
        <Container>
          {/* Main section of SideBar */}
          <Row>
            {/*  Side bar start */}
            <Col className="sidebar-container">
              {/* edit-public-language section */}
              <div className="edit-public-language-container pb-1">
                {/* edit public profile */}
                <div className="d-flex justify-content-between m-2">
                  <span className="edit-text ml-3">
                    {" "}
                    Edit Public profile and url
                  </span>
                  <FontAwesomeIcon
                    className="button-icon question-icon ml-auto mr-3"
                    icon={faQuestionCircle}
                  />
                  <div>{""}</div>
                </div>

                {/* add profile in another language  */}
                {/* <div className="sidebar-btn mt-2 mb-2 d-flex">
                  <div className="ml-3">
                    <Button
                      className="rounded-pill btn-sm long-btn pl-2"
                      variant="primary"
                    >
                      English
                    </Button>{" "}
                    <Button
                      className="rounded-pill btn-sm long-btn"
                      variant="outline-dark"
                    >
                      {" "}
                      Italiano
                    </Button>
                  </div>
                  <FontAwesomeIcon
                    className="button-icon globe-icon ml-auto mr-4"
                    icon={faGlobe}
                  />
                </div> */}
              </div>

              {/* Advertisement */}
              <div className="advertisement">
                <Image
                  className="pt-2 pb-2 pr-3 m-2 w-45"
                  src={Advertisement}
                  fluid
                />
              </div>

              {/* People you may know */}
              <div className="people pt-3 ">
                <span className="pl-3 pb-3 text">People you may know</span>
                <div className="pl-3 pt-2">
                  {/* Loading profiles from fetched data */}
                  {profiles.map((profile) => (
                    <div key={profile._id}>
                      <div className="d-flex">
                        {/* Images */}
                        <Image
                          className="w-25 img-circle profile-img mt-1"
                          src={profile.image}
                          alt="Linkedin Member"
                          fluid
                          roundedCircle
                        ></Image>

                        {/* Name & Surname */}
                        <div className="profile-details ml-4 mb-2">
                          <div className="profile-name">
                            {profile.name} {profile.surname}
                          </div>

                          {/* Title */}
                          <div className="profile-title">{profile.title}</div>

                          {/* Connect */}
                          <div className="profile-message">
                            <Button
                              className="rounded-pill btn-sm"
                              variant="outline-dark"
                            >
                              Connect
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Sidebar;

// Emilian's Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjg0NWE4OTBjYzAwMTVjZjA3ZWEiLCJpYXQiOjE2MzM5NDE1NzQsImV4cCI6MTYzNTE1MTE3NH0.l0p-bV1Pw_UsfkiDzTx5nS4PTO6diKdzQCQWqrHyars