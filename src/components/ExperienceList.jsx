import { useState , useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import SingleExperience from "./SingleExperience";

const ExperienceList = (props) => {
  /* state = {
    experience: [],
  }; */

  const [ getExperience , setGetExperience ] = useState([])
  const [ selectedJob , setSelectedJob ] = useState(false)


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
  }; */

  useEffect(() => {
    fetchUserExp()
	}, [props.user._id])


    return (
      
        getExperience.length > 0 &&
        
          <>
            <Card>
              <Card.Title>
                <span></span>
              </Card.Title>
              <Card.Body>
                {getExperience.map((element) => (
                  <Col>
                    <SingleExperience selectedJob={selectedJob} setSelectedJob={setSelectedJob} id={element._id}/>
                  </Col>
                ))}
              </Card.Body>
            </Card>
          </>
        
    );
}

export default ExperienceList;