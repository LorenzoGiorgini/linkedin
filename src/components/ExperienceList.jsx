import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleExperience from "./SingleExperience";
import { useParams } from "react-router";

import { Plus } from "react-bootstrap-icons";

const ExperienceList = (props) => {

  const [getExperience, setGetExperience] = useState([]);

  const params = useParams();

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
          
          
              <Col>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h2 style={{fontSize: "20px"}}>Experience</h2>
                {params.id === "me" && <Plus id="plus-icon" style={{fontSize:"35px"}} />}
              </div>
              {getExperience.map((element) => (
                <SingleExperience
                  role={element.role}
                  location={element.area}
                  date={element.startDate}
                  company={element.company}
                  desc={element.description}
                  id={element._id}
                />
                ))}
              </Col>
          
          </Col>
        </Row>
      </>
    )
  );
};

export default ExperienceList;
