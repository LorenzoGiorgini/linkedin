import { useEffect, useState } from "react"
import { Row, Col, Button } from "react-bootstrap";
import "../CssStyles/NewPost.css";
import NewPostModal from "./NewPostModal";

const NewPost = (props) => {
    // States from Post Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-post">
      <div className="padding-post">
      <section className="feedpost-section">
        <div className="d-flex">
          <img src={props.profile.image} alt=" "  className="profile-img"/>

          <div className="feedpost-section">
              {/* Put the OnClick with handleShow func from Post Modal that you implemented  */}
            
            <NewPostModal profile={props.profile} setPosts={props.setPosts} posts={props.posts} fetchPosts={props.fetchPosts}/>
          </div>
          {/* Here goes the Modal call with its props <PostModal show={show} onHide={handleClose} /> */}
        </div>
        <div className="d-flex justify-content-between feedpost-icons">
          <div className="btn-feed">
            <i className="fas fa-image mr-2"></i>Photo
          </div>
          <div className="btn-feed">
            <i className="fab fa-youtube mr-2"></i>Video
          </div>
          <div className="btn-feed">
            <i className="fas fa-calendar-alt mr-2"></i>Event
          </div>
          <div className="btn-feed-big">
            <i className="fab fa-elementor mr-2"></i>Write article
          </div>
        </div>
      </section>
       <hr />
       <div className="trending d-flex">
       Trending: <div className="trending-text">#WorldMentalHealthDay — How do you take care of your mental health?</div>
       </div>
      </div>
      
      </div>
    </>
  );
};

export default NewPost;