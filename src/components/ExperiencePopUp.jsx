import { Button, Modal , Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ExperiencePopUp = (props) => {

    const [closePop, setclosePop] = useState(props.pressed)
    const [jobobj, setJobObj] = useState([])

    const handleInput = (propertyName, value) => {
        setJobObj({
            ...jobobj,
            [propertyName]: value
        })
    }


   

    const fetchSelectedJob = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me/experiences/${props.elementId}`,
            {
                method: "GET",
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU"
                },
              }

              )
              let data = await response.json()
              setJobObj(data)
              console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteSelectedJob = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me/experiences/${props.elementId}`,
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

    const editSelectedJob = async () => {
        
    
        try {
          let response = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/me/experiences/${props.elementId}`,
            {
              method: "PUT",
              body: JSON.stringify(jobobj),
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
                "Content-type": "application/json",
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      };
    



   useEffect(() => {
       fetchSelectedJob()
   },[props.pressed])


    return (
        <>
            <Modal
                size="lg"
                show={props.pressed}
                onHide={() => props.setPressed(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Edit intro
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form >
                    <Form.Group>
                        <Form.Label>Title *</Form.Label>
                        <Form.Control
                            onChange={e => handleInput('role', e.target.value)}
                            value={jobobj.role}
                            type="text"
                            placeholder="Enter your role at the company"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter company name"
                            value={jobobj.company}
                            onChange={e => handleInput('company', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="yyyy/mm/dd"
                            value={jobobj.startDate}
                            onChange={e => handleInput('startDate', e.target.value)}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="yyyy/mm/dd"
                            value={jobobj.endDate}
                            onChange={e => handleInput('endDate', e.target.value)}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            rows={5}
                            placeholder="Change the description"
                            value={jobobj.description}
                            onChange={e => handleInput('description', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Country/Region *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Country/Region"
                            value={jobobj.area}
                            onChange={e => handleInput('area', e.target.value)}
                        />
                    </Form.Group>
                    
                </Form>
                    

                </Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="danger" onClick={deleteSelectedJob}>X</Button>
                    
                    <Button variant="primary" onClick={editSelectedJob}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ExperiencePopUp