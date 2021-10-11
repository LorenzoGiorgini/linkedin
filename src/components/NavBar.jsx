import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  NavDropdown,
  Container,
  Col,
} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <Navbar bg="light" expand="lg" className="row" fixed="top">
        <Container>
        <Col md={6} className="d-flex align-items-center">
          <Navbar.Brand href="#home">
            <img src={logo} style={{ width: "36px" }}></img>
          </Navbar.Brand>
          <i className="bi bi-search  "></i>
          <Form inline className="border-non">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
            <Nav.Link
              href="#home"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-home"></i>Home
            </Nav.Link>
            </Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-user-friends"></i>My Network
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-suitcase"></i>Jobs
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-comment-dots"></i>Messaging
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-bell"></i>Notications
            </Nav.Link>
            <NavDropdown title="Me" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <div className="row">
                  <div className="col-2">
                    <img src="" alt="" />
                  </div>
                  <div className="col-9">
                    <p>username</p>
                  </div>
                </div>
                <Link to="/profile/me">
                  <Button href="#action/3.1" variant="outline-primary" block>View Profile</Button>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
