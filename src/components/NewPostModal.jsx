import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
<<<<<<< HEAD
import "../CssStyles/NewPost.css";

const NewPostModal = ({ fetchPosts }) => {
  const [show, setShow] = useState(false);
  const [newpost, setNewPost] = useState(null);
=======

import "../CssStyles/NewPost.css";

const NewPostModal = ({ fetchPosts, posts, setPosts }) => {
  const [show, setShow] = useState(false);
  const [newpost, setNewPost] = useState(null);
  const [imagePost, setImagePost] = useState(null);
>>>>>>> 358cc53f196a9037f1b9f4bcdc8a20925b6d6ca1

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (propertyName, value) => {
    setNewPost({
      [propertyName]: value,
    });
  };
<<<<<<< HEAD
=======

>>>>>>> 358cc53f196a9037f1b9f4bcdc8a20925b6d6ca1
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
        let res = await response.json()
         console.log(res)
         console.log(res._id)
         submitFile(res._id)
        console.log(posts);
        // setPosts(res)
        setShow(false);
        console.log(newpost);
<<<<<<< HEAD
=======
        console.log(posts._id);
        // submitFile(posts._id[0])
>>>>>>> 358cc53f196a9037f1b9f4bcdc8a20925b6d6ca1
      }
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
=======
  const [image, setImage] = useState(null);

  const TargetFile = (e) => {
    console.log("Event", e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePost(e.target.files[0]);
    }
  };

  const submitFile = async (id) => {
    let formData = new FormData();

    formData.append("post", image);
    try {
      let formData = new FormData();

      formData.append("post", image);
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          body: formData,
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

>>>>>>> 358cc53f196a9037f1b9f4bcdc8a20925b6d6ca1
  return (
    <>
      <Button className="post-form" onClick={handleShow}>
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
<<<<<<< HEAD
=======
            <input type="file" onChange={TargetFile} />
>>>>>>> 358cc53f196a9037f1b9f4bcdc8a20925b6d6ca1
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
