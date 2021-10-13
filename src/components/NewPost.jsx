import { Row, Col, Button} from "react-bootstrap"
import NewPostModal from "./NewPostModal"

const NewPost = () => {
   return (
       <>
    <Row>
        <Col sm={2}>
            <img style={{width : '48px'}} className="img-fluid" src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="" />
        </Col>
        <Col sm={10}>
            
                <NewPostModal/>
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