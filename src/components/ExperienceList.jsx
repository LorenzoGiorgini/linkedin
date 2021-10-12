import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import SingleExperience from "./SingleExperience";

class ExperienceList extends Component {
  state = {
    experience: [],
  };

  componentDidMount = async () => {
    let userId = "616434dda890cc0015cf07f0";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU";
    const endpointMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    try {
      let fetchData = await fetch(endpointMyProfile, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU"
        },
      });
      let myExperienceData = await fetchData.json();
      console.log("My Experience Data", myExperienceData);
      this.setState({
        experience: myExperienceData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { experience } = this.state;
    return (
      <Card>
        <Card.Title>
          <span></span>
        </Card.Title>
        <Card.Body>
          {experience.map((element) => (
            <Col>
              <SingleExperience />
            </Col>
          ))}
        </Card.Body>
      </Card>
    );
  }
}

export default ExperienceList;
