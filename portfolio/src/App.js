 /*eslint-disable*/ 

import './css/App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {About} from './js/About.js'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="home-wrap">
        <div>Front-end Developer</div>
        <div>Ryoung's Portfolio</div>
        <Button className="contact-btn">Contact Me</Button>
      </div>
      <About />
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
