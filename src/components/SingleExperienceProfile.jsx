import { Component } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import "../CssStyles/Experience.css";
import EditProfile from "./EditProfile";

class SingleExperience extends Component {
  state = {
    showModal: false,
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <hr className="mt-1 mb-2" />
        <Pencil
          id="editIcon"
          onClick={() => this.setState({ showModal: true })}
        />
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
        <EditProfile open={this.state.showModal} close={this.closeModal} />
      </>
    );
  }
}

export default SingleExperience;
