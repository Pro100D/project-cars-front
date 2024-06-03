import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <header style={{ marginBottom: "50px" }}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/cars">Cars list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
