import "@fortawesome/fontawesome-free/css/all.css";
import { Col, Row } from "react-bootstrap"

const Jumbo = (props) => {

    return (
        <div className="jumbo-container">
            <div className="img-bck-container"><div className="img-background"></div></div>
            <div className="padding-jumbo">
                <div className="image-container">
                    <div className="img-profile-container"><img className="img-profile" src={props.user.image} /></div>
                    {
                        props.mainUser === "me" && <div className="pencil" ><svg onClick={(e) => {}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                      </svg></div>
                    }
                    
                </div>
                <Row>
                    <Col md={8} className="color">
                        <h1 className="font-big">{props.user.name}{" "}{props.user.surname}</h1>
                        <div className="font-medium">{props.user.title}</div>
                        <div className="d-flex flex-column">
                        <span className="text-muted font-small">{props.user.area}{" "}<span className="contact-info font-small">Contact Info</span> </span>
                        <span className="font-small connections">30 Connections</span>
                        </div>
                        <div className="d-flex">
                            <div className="button-blue">Open To</div>
                            <div className="button-transparent text-muted">Add Section</div>
                            <div className="button-more text-muted">More</div>
                        </div>
                    </Col>
                    <Col md={4} className="color">
                        <div className="d-flex align-items-center">
                            <img className="education-banner" src={"https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_200_200/0/1593351903670?e=2159024400&v=beta&t=3Apyi9gdHHpG2I_OafZnwPIUp5VatncZQiXoIp0QPlk"} alt=" " />
                            <h2 className="font-small ml-2 connections">Strive School</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Jumbo