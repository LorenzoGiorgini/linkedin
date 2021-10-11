import { Button, Modal , Form } from "react-bootstrap"
import { useState , useEffect } from "react";

const PopUp = (props) => {

    const [ lgShow, setLgShow ] = useState(false);
    const [ updateUser , setUpdateUser ] = useState({})
    
    const [user, setUser] = useState(props.obj)

    const handleInput = (propertyName, value) => {
        setUser({
            ...user,
            [propertyName]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // now how can we access the form input value?
        console.log(user)
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            console.log(response)
            if (response.ok) {
                setUser({
                    name: '',
                    phone: '',
                    numberOfPeople: 1,
                    smoking: false,
                    dateTime: '',
                    specialRequests: '',
                })
            } else {
                alert('Something went wrong :(')
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <>
        <div className="pencil" onClick={() => setLgShow(true)} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        </div>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Large Modal
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Change Name</Form.Label>
                    <Form.Control
                        onChange={e => handleInput('name', e.target.value)}
                        value={user.name}
                        type="text"
                        placeholder="Enter your name here"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Change Surname</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Chnage your user Surname"
                        value={user.surname}
                        onChange={e => handleInput('phone', e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Change Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Change the email adress"
                        value={user.email}
                        onChange={e => handleInput('phone', e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Change Bio</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        onChange={e => handleInput('specialRequests', e.target.value)}
                        value={user.specialRequests}
                        type="text"
                        placeholder="Enter your special requests here" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control
                        value={user.dateTime}
                        onChange={e => handleInput('dateTime', e.target.value)}
                        type="datetime-local" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Any special request?</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        onChange={e => handleInput('specialRequests', e.target.value)}
                        value={user.specialRequests}
                        type="text"
                        placeholder="Enter your special requests here" 
                    />
                </Form.Group>
            </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setLgShow(false)} >Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default PopUp