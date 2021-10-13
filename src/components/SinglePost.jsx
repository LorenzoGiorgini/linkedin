import { Col, Dropdown, Row } from "react-bootstrap";
import "../CssStyles/Posts.css";

const SinglePost = (props) => {
 
  return (
    <div className="jumbo-container">
      <div className="padding-jumbo">
        <div className="d-flex">
          <div className="image-container">
            <div className="img-profile-container">
              <img
                className="profile-img"
                src="https://via.placeholder.com/150"
              />
            </div>
          </div>
          <div className="d-flex flex-column ml-2 mb-2">
            <div className="d-flex">
              <div className="span-big">name</div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ background: "transparent", color: "black" }}
                    id="dropdown-basic"
                  >
                    ...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <span className="span-small text-muted">title</span>

            <span className="span-small text-muted">time</span>
          </div>
        </div>
        <div className="post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          sed?
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
