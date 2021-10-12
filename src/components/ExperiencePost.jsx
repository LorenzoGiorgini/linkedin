import { Component } from "react";
import EditProfile from "./EditProfile";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

export default class ExperiencePost extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    let userId = "616434dda890cc0015cf07f0";
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU";
    const endpointMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    try {
      let fetchData = await fetch(endpointMyProfile, {
        method: "Post",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.user),
      });

      let updateData = await fetchData.json();
      console.log("Update Data", updateData);
      this.setState({
        user: updateData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = () => {
    this.setState({ user: this.target.value });
  };

  render() {
    return (
      <>
        <Modal
          size="lg"
          show={this.props.open}
          onHide={this.props.close}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Add A New Experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="Role">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What was your job title?"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="Company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" placeholder="Enter Company Name" />
                </Form.Group>
              </Row>
              <Form.Group controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describe your duties & role"
                />
              </Form.Group>
              <Form.Group controlId="expLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where is the company located"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Reset</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
