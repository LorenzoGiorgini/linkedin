import { Button, Modal , Form } from "react-bootstrap"
import { useState } from "react"

const ExperienceModal = (props) => {

    const [userExp , setUserExp] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: ""
    });

    const handleInput = (propertyName, value) => {
        setUserExp({
            ...userExp,
            [propertyName]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/616434dda890cc0015cf07f0/experiences', {
                method: 'POST',
                body: JSON.stringify(userExp),
                headers: {
                    "Authorization":
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
                    'Content-type': 'application/json'
                }
            })
        
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Modal
                size="lg"
                show={props.show}
                onHide={() => props.setShow(false)}
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
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                            onChange={e => handleInput('role', e.target.value)}
                            value={userExp.role}
                            type="text"
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            value={userExp.company}
                            onChange={e => handleInput('company', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Change the email adress"
                            value={userExp.startDate}
                            onChange={e => handleInput('startDate', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            onChange={e => handleInput('endDate', e.target.value)}
                            value={userExp.endDate}
                            type="text"
                            placeholder="Enter your bio" 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Headline *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Change the Headline"
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
                    <Form.Group>
                        <Form.Label>Change Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Change Image"
                            value={userExp.area}
                            onChange={e => handleInput('area', e.target.value)}
                        />
                    </Form.Group>
                </Form>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ExperienceModal