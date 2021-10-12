import SingleExperience from "./SingleExperienceProfile";
import ExperiencePost from "./ExperiencePost";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Component } from "react";
import { Plus } from "react-bootstrap-icons";

export default class EditProfile extends Component {
  state = {
    experience: [],
    showModal: false,
  };

  closeModal = () => {
    this.setState({ showModal: true });
  };

  componentDidMount = async () => {
    let userId = "616434dda890cc0015cf07f0";
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU";
    const endpointMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    try {
      let fetchData = await fetch(endpointMyProfile, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      let myExperienceData = await fetchData.json();
      console.log("Edit Profile Experience", myExperienceData);
      this.setState({ experience: myExperienceData });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { experience } = this.state;
    return (
      <>
        <Card className="my-2" id="editProfile">
          <Card.Title id="editProfile-title" className="mt-3 mb-3 mx-3">
            <span>{this.props.title}</span>
            <Plus
              id="editIcon"
              onClick={() => this.setState({ showModal: true })}
            />
          </Card.Title>
          <Card.Body id="editProfile-body" className="pt-0 mt-0">
            {experience.map((element) => (
              <Col>
                <SingleExperience
                  role={element.role}
                  location={element.area}
                  date={element.startDate}
                  company={element.company}
                  desc={element.description}
                />
              </Col>
            ))}
          </Card.Body>
        </Card>
        <ExperiencePost
          open={this.state.showModal}
          close={this.closeModal}
        />
      </>
    );
  }
}

