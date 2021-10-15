import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";

import "../CssStyles/NewPost.css";

const NewPostModal = ({ fetchPosts, posts, setPosts, profile }) => {
  const [show, setShow] = useState(false);
  const [newpost, setNewPost] = useState(null);
  const [imagePost, setImagePost] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (propertyName, value) => {
    setNewPost({
      ...newpost,
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
        let res = await response.json()
         
         await submitFile(res._id)
        console.log(posts);
        setShow(false);
        console.log(newpost);
        console.log(posts._id);
        fetchPosts()
        // setTimeout(() => (fetchPosts()) , 2000);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                      className="profile-img mr-5"
                      src={profile.image}
                      alt=""
                    />
                  </Col>
                  <Col col={10}>
                    <h3>{profile.name}{" "}{profile.surname}</h3>
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
            <input type="file" onChange={TargetFile} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="button-blue" style={{width:"62px" , height:"32px"}} onClick={makeNewPost}>Post</div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewPostModal;
