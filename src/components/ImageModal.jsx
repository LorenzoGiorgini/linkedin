import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router";

const ImageModal = (props) => {
    
    const params = useParams();

    const handleClose = () => props.setImageModal(false);
    const handleShow = () => props.setImageModal(true);


    const [ image , setImage ] = useState(null)

    const TargetFile = (e) => {
      console.log("Event", e.target.files[0]);
      if (e.target && e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

    const submitFile = async () => {
      try {
        let formData = new FormData();

        formData.append("profile" , image)
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/616434dda890cc0015cf07f0/picture" , 
          {
            body: formData,
            method: "POST",
            headers: {
              Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
            }
          }
        )
        console.log(response)
        props.fetchUser(params.id)
        handleClose()
      } catch (error) {
        console.log(error)
      }
    };
  
    return (
      <>
        <Modal show={props.imageModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Image</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <input type="file" onChange={TargetFile}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitFile}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ImageModal