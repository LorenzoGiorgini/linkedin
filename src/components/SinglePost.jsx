import { Col, Dropdown, Row } from "react-bootstrap";
import "../CssStyles/Posts.css";

const SinglePost = (props) => {
 
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
            <Dropdown.Item href="#/action-1">
              Modify
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Delete Post
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              Save
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Copy Link
            </Dropdown.Item>
          </Dropdown.Menu>) : (
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              Save
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Copy Link
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Report
            </Dropdown.Item>
          </Dropdown.Menu>
          )}
        </Dropdown>
        </div>
        <hr />
        <div className="d-flex">
          <div className="image-container">
            <div className="img-profile-container">
              <img
                className="profile-img"
                src={props.element.user.image}
              />
            </div>
          </div>
          <div className="d-flex flex-column ml-2 mb-2">

            <span className="span-big">{props.element.user.name} {" "} {props.element.user.surname}</span>

            <span className="span-small text-muted">{props.element.user.title}</span>

            <span className="span-small text-muted">{props.element.user.createdAt}</span>
          </div>
        </div>
        <div className="post-description">
          {props.element.text}
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
