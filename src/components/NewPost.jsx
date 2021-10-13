import { Row, Col, Button} from "react-bootstrap"

const NewPost = () => {
   return (
       <>
    <Row>
        <Col sm={2}>
            <img style={{width : '48px'}} className="img-fluid" src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="" />
        </Col>
        <Col sm={10}>
            <Button className="justify-content-left" style={{width : '100%'}}>
                Start a post
            </Button>
        </Col>
    </Row>

    <Row>
        <Col sm={3}></Col>
        <Col sm={3}></Col>
        <Col sm={3}></Col>
        <Col sm={3}></Col>

    </Row>
    
    </>
    
    )


}

export default NewPost