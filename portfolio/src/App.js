import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <TopNavbar />
 
    </div>
  );
}

function TopNavbar() {
  return (
    <>
      <Navbar className="navbar-wrap">
        <Container>
        <Navbar.Brand href="#home">RyoungE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#home">Skills</Nav.Link>
          <Nav.Link href="#home">Project</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
