import  Dropdown from "react-bootstrap/Dropdown";
import "../CssStyles/Posts.css";
import { useState } from "react";
import EditPostModule from "./EditPostModule";

const SinglePost = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteSelectedPost = async () => {
    try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.element._id}`,
        {
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU"
            },
          }

          )
          
    } catch (error) {
        console.log(error)
    }
}

  

  return (
    <div className="container-post">
      <div className="padding-jumbo">
        <div className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle
              style={{ background: "transparent", color: "black" }}
              id="dropdown-basic"
            >
              ...
            </Dropdown.Toggle>

            {props.element.user._id === "616434dda890cc0015cf07f0" ? (
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleShow}>
                  Modify
                </Dropdown.Item>
                <EditPostModule
                  show={show}
                  onHide={handleClose}
                  id={props.element._id}
                />
                <Dropdown.Item href="#/action-2" onClick={deleteSelectedPost}>Delete Post</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Copy Link</Dropdown.Item>
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Copy Link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Dropdown>
        </div>
        <hr />
        <div className="d-flex">
          <div className="image-container">
            <div className="img-profile-container">
              <img className="profile-img" src={props.element.user.image} />
            </div>
          </div>
          <div className="d-flex flex-column ml-2 mb-2">
            <span className="span-big">
              {props.element.user.name} {props.element.user.surname}
            </span>

            <span className="span-small text-muted">
              {props.element.user.title}
            </span>

            <span className="span-small text-muted">
              {props.element.user.createdAt}
            </span>
          </div>
        </div>
        <div className="post-description">{props.element.text}</div>
        <div>
          <img className="image-container" src={props.element.image} alt=" " />
        </div>
        <div className="translation">See Translation</div>
        <hr />
        <div className="d-flex justify-content-around">
          <span>Like</span>
          <span>Comment</span>
          <span>Share</span>
          <span>Send</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
