import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";

import "../CssStyles/NewPost.css";

const NewPostModal = ({ fetchPosts, posts, setPosts, user }) => {
  const [show, setShow] = useState(false);
  const [newpost, setNewPost] = useState(null);
  const [imagePost, setImagePost] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (propertyName, value) => {
    setNewPost({
      ...newpost,
      user: user[0]._id.toString(),
      [propertyName]: value
    });
  };

  const makeNewPost = async () => {
    try {
      let response = await fetch(
        "https://strive-linkedin.herokuapp.com/posts/",
        {
          method: "POST",
          body: JSON.stringify(newpost),
          headers: {
            "Content-type": "application/json"
          }
        }
      );
      if (response.ok) {
        let res = await response.json()
        await submitFile(res.data._id)
        setShow(false);
        fetchPosts()   
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [image, setImage] = useState(null);

  const TargetFile = (e) => {
    if (e.target && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePost(e.target.files[0]);
    }
  };

  const submitFile = async (id) => {
    try {
      let formData = new FormData();

      formData.append("image", image);
      let response = await fetch(
        `https://strive-linkedin.herokuapp.com/posts/${id}`,
        {
          body: formData,
          method: "POST"
        }
      );
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
                      src={user[0].image}
                      alt=""
                    />
                  </Col>
                  <Col col={10}>
                    <h3>{user[0].name}{" "}{user[0].surname}</h3>
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