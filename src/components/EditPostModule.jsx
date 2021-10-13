import { useState, useEffect } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";

const EditPostModule = ({ show, onHide, id }) => {

const [post, setPost] = useState(null)

  const fetchSinglePost = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("Data", data);
        setPost(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex profile-image-container">
            <img src="" alt="profile" className="w-100"></img>
          </div>
          <Form
            id="post-form"
            className="w-100"
            onSubmit={(e) => {
              e.preventDefault();

            //   setData({ text: "" });

              onHide();
            }}
          >
            <Form.Group
              className="mb-3 post-text"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about"
                // value={data.text}
                // onChange={(e) => getData(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control className="d-none" id="file-input" type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" form="post-form">
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default EditPostModule