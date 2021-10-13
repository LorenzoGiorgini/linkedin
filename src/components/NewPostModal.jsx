import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import "../CssStyles/NewPost.css";

const NewPostModal = () => {
  const [show, setShow] = useState(false);
  const [newpost, setNewPost] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (propertyName, value) => {
    setNewPost({
      [propertyName]: value,
    });
  };
  const makeNewPost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(newpost),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        <Alert>post successfull</Alert>;
        console.log(newpost)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        className="post-form"
        onClick={handleShow}
        

      >
        Start a post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                <Row>
                  <Col sm={2}>
                    <img
                      className="img-fluid"
                      style={{ width: "50px" }}
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      alt=""
                    />
                  </Col>
                  <Col col={10}>
                    <h3>Lorenzo Giorgini</h3>
                  </Col>
                </Row>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                onChange={(e) => handleInput("text", e.target.value)}
                type="text"
                placeholder="What do you want to talk about?"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={makeNewPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewPostModal;
