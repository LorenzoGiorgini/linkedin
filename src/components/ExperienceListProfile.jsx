import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperienceProfile";
import { useState , useEffect } from "react";


const ExperienceList = (props) => {
  /* state = {
    experience: [],
  }; */

  const [ getExperience , setGetExperience ] = useState([])
  const [ selectedJob , setSelectedJob ] = useState(null)


  const fetchUserExp = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${props.user._id}/experiences` , {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU"
        }
      })
      if (response.ok) {
        let data = await response.json()
        setGetExperience(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  /* useEffect = async () => {
    let userId = "616434dda890cc0015cf07f0";
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU";
    const endpointMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    try {
      let fetchData = await fetch(endpointMyProfile, {
        headers: {
          Authorization: token,
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
  }; */

  useEffect(() => {
    fetchUserExp()
	}, [props.user._id])


    return (
        <Row>
            <Col md={8}>
            <Card >
        <Card.Title>
          <span></span>
          <Plus id="plus-icon"/>
        </Card.Title>
        <Card.Body >
          {experience.map((element) => (
            <Col>
              <SingleExperience
                role={element.role}
                location={element.area}
                date={element.startDate}
                company={element.company}
                desc={element.description}
                // selectedJob={selectedJob} 
              />
            </Col>
          ))}
        </Card.Body>
      </Card>
            </Col>
        </Row>
      
    );
}

export default ExperienceList;