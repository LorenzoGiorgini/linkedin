import { Button, Modal , Form } from "react-bootstrap"
import { useState } from "react"

const ExperiencePopUp = (props) => {

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


    const handleSubmit = async () => {
        
    }


    return (
        <>
            <Modal
                size="lg"
                show={props.pressed}
                onHide={() => props.pressed(false)}
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