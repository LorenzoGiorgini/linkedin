import { Button, Modal , Form } from "react-bootstrap"
import { useState , useEffect } from "react";
import ExperienceModal from "./ExperienceModal";

const PopUp = (props) => {

    const [ lgShow, setLgShow ] = useState(false);
    const [ experience , setExperience] = useState(false);
    const [ show , setShow ] = useState(true)
    
    const [oldUser, setOldUser] = useState({...props.obj})


    const handleInput = (propertyName, value) => {
        setOldUser({
            ...oldUser,
            [propertyName]: value
        })
        console.log(oldUser)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
       
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                method: 'PUT',
                body: JSON.stringify(oldUser),
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
        experience === true ? <> <ExperienceModal show={show} setShow={setShow} /> </> :
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
                    Edit intro
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form  >
                    <Form.Group>
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                            onChange={e => handleInput('name', e.target.value)}
                            value={oldUser.name}
                            type="text"
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            value={oldUser.surname}
                            onChange={e => handleInput('surname', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Change the email adress"
                            value={oldUser.email}
                            onChange={e => handleInput('email', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            onChange={e => handleInput('bio', e.target.value)}
                            value={oldUser.bio}
                            type="text"
                            placeholder="Enter your bio" 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Headline *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Change the Headline"
                            value={oldUser.title}
                            onChange={e => handleInput('title', e.target.value)}
                        />
                    </Form.Group>
                        
                    <Form.Group>
                        <Form.Label onClick={ () => setExperience(true)}>+ Current Position</Form.Label>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Country/Region *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Country/Region"
                            value={oldUser.area}
                            onChange={e => handleInput('area', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Change Image"
                            value={oldUser.image}
                            onChange={e => handleInput('image', e.target.value)}
                        />
                    </Form.Group>
                </Form>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopUp