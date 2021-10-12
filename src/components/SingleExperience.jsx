import { useState, useEffect } from "react";
import ExperiencePopUp from "./ExperiencePopUp";
import { useParams } from "react-router";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import "../CssStyles/Experience.css";

const SingleExperience = (props) => {
  const params = useParams();
  
  const [pressed, setPressed] = useState(false)

  return (
    <>
      <hr className="mt-1 mb-2" />
      {params.id === "me" && <Pencil
        id="editIcon"
        onClick={() => setPressed(true)}
      />}
      <Row id="experience-single-row">
        <Col xs={2}>
          <Image src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/Strive_-_logosquareblack.png" />
        </Col>
        <Col xs={10}>
          <p>{props.role}</p>
          <p>{props.company}</p>
          <p>{props.date}</p>
          <p>{props.area}</p>
          <p>{props.desc}</p>
        </Col>
      </Row>
      {pressed === true && (
        <ExperiencePopUp
          pressed={pressed}
          setPressed={setPressed}
          elementId={props.id}
        />
      )}

      
    </>
  );
};

export default SingleExperience;



{/* <div>
        <h1>dsdasda</h1>
        {params.id === "me" && <button onClick={() => setPressed(true)} />}
      </div>
      {pressed === true && (
        <ExperiencePopUp
          pressed={pressed}
          setPressed={setPressed}
          elementId={props.id}
        />
      )} */}