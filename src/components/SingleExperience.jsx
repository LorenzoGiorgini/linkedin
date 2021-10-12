import { Component } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import "../CssStyles/Experience.css"

class SingleExperience extends Component {
  render() {
    return (
      <>
        <hr className="mt-1 mb-2" />
        <Pencil />
        <Row id="experience-single-row">
          <Col xs={2}>
            <Image src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/Strive_-_logosquareblack.png" />
          </Col>
          <Col xs={10}>
            <p>{this.props.role}</p>
            <p>{this.props.company}</p>
            <p>{this.props.date}</p>
            <p>{this.props.area}</p>
            <p>{this.props.desc}</p>
          </Col>
        </Row>
      </>
    );
  }
}

export default SingleExperience;
