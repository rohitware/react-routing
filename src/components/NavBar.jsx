import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function NavBar() {
  return (
    <>
      <Navbar
        data-bs-theme="dark"
        style={{ background: "#4c739f" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            CodeMind Tuturials
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{ padding: "10px", display: "flex", gap: "15px" }}
          >
            <Nav.Link as={Link} to="html">
              Html
            </Nav.Link>
            <Nav.Link as={Link} to="css">
              Css
            </Nav.Link>
            <Nav.Link as={Link} to="javascript">
              Javascript
            </Nav.Link>
            <Nav.Link as={Link} to="angular">
              Angular
            </Nav.Link>
            <Nav.Link as={Link} to="react-js">
              React
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
