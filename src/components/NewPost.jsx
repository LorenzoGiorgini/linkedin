import { useEffect, useState } from "react"
import { Row, Col, Button } from "react-bootstrap";
import "../CssStyles/NewPost.css";
import NewPostModal from "./NewPostModal";

const NewPost = () => {
    // States from Post Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="feedpost-section">
        <div className="d-flex">
          <div
            className="profile-img-container mr-2"
            style={{
              backgroundImage:
                "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
            }}
          ></div>

          <div className="feedpost-section">
              {/* Put the OnClick with handleShow func from Post Modal that you implemented  */}
            <NewPostModal/>
          </div>
          {/* Here goes the Modal call with its props <PostModal show={show} onHide={handleClose} /> */}
        </div>
        <div className="d-flex justify-content-between feedpost-icons">
          <div>
            <i className="fas fa-image mr-2"></i>Photo
          </div>
          <div>
            <i className="fab fa-youtube mr-2"></i>Video
          </div>
          <div>
            <i className="fas fa-calendar-alt mr-2"></i>Event
          </div>
          <div>
            <i className="fab fa-elementor mr-2"></i>Write article
          </div>
        </div>
      </section>
    </>
  );
};

export default NewPost;
