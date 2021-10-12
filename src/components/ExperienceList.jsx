import { useState, useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import SingleExperience from "./SingleExperience";

import { Plus } from "react-bootstrap-icons";

const ExperienceList = (props) => {
  const [getExperience, setGetExperience] = useState([]);

  const fetchUserExp = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.user._id}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setGetExperience(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserExp();
  }, [props.user._id]);

  return (
    getExperience.length > 0 && (
      <>
        <Row md={8} className="experience-list-con">
          <Col>
            <Card>
              <Card.Title>
                <span></span>
                <Plus id="plus-icon" />
              </Card.Title>
              <Card.Body>
                {getExperience.map((element) => (
                  <Col>
                    <SingleExperience
                      role={element.role}
                      location={element.area}
                      date={element.startDate}
                      company={element.company}
                      desc={element.description}
                      id={element._id}
                    />
                  </Col>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    )
  );
};

export default ExperienceList;
