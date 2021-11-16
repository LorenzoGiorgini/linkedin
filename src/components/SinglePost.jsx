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
          })
          props.fetchPosts()
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="container-post">
      <div className="padding-jumbo">
        <div className="row">
          <div className="image-container col-2 mt-3">
            <div className="img-profile-container">
              <img className="profile-img" src={props.element.user.image} />
            </div>
          </div>
          <div className="d-flex flex-column  mb-2 col-8 mt-3">
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
            <div className="col-2 mt-3">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-styled">
              <i class="bi bi-three-dots" style={{fontSize:"25px"}} ></i>
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
                  fetchPosts={props.fetchPosts}
                  profile={props.profile}
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
        </div>
        <div className="post-description">{props.element.text}</div>
        {props.element.image && <div>
          <img className="image-container" src={props.element.image} alt=" " />
        </div>}
        <div className="translation">See Translation</div>
        <hr />
        <div className="d-flex justify-content-around">
          <span className="feed-buttons"><i class="bi bi-hand-thumbs-up mr-2"></i>Like</span>
          <span className="feed-buttons"><i class="bi bi-chat-text mr-2"></i>Comment</span>
          <span className="feed-buttons"><i class="bi bi-share-fill mr-2"></i>Share</span>
          <span className="feed-buttons"><i class="bi bi-cursor-fill mr-2"></i>Send</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
