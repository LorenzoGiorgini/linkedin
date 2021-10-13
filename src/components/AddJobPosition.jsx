import { Button, Modal , Form } from "react-bootstrap"
import { useState } from "react"

const AddJobPosition = (props) => {

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
        console.log(userExp)
        
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
            <div className="pencil" onClick={() => props.setLgShow(true)}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
                >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
            </div>
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
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddJobPosition