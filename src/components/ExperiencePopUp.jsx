import { Button, Modal , Form } from "react-bootstrap"
import { useState, useEffect } from "react"

const ExperiencePopUp = (props) => {

    const [closePop, setclosePop] = useState(props.pressed)
    const []

    const handleInput = (propertyName, value) => {
        setUserExp({
            ...userExp,
            [propertyName]: value
        })
    }


    const handleSubmit = async () => {
        
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
              let data = await response.jsom()
        } catch (error) {
            console.log(error)
        }
    }

   useEffect(() => {
       fetchSelectedJob()
   },[])


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
                            value={userExp.role}
                            type="text"
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            value={userExp.company}
                            onChange={e => handleInput('company', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="yyyy/mm/dd"
                            value={userExp.startDate}
                            onChange={e => handleInput('startDate', e.target.value)}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="yyyy/mm/dd"
                            value={userExp.endDate}
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
                            value={userExp.description}
                            onChange={e => handleInput('description', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Country/Region *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Country/Region"
                            value={userExp.area}
                            onChange={e => handleInput('area', e.target.value)}
                        />
                    </Form.Group>
                    
                </Form>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleSubmit}>X</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ExperiencePopUp