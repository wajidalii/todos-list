import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function NavigationBar({ title, searchBar }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
          {searchBar && (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavigationBar.defaultProps = {
  title: "My Title",
  searchBar: true,
};

NavigationBar.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
};
export default NavigationBar;
