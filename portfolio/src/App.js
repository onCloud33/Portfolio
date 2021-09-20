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
      <Skills />

    </div>
  );
}

function TopNavbar() {
  return (
    <>
      <Navbar className="navbar-wrap">
        <Container>
        <Navbar.Brand href="">RyoungE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">About</Nav.Link>
          <Nav.Link href="">Skills</Nav.Link>
          <Nav.Link href="">Project</Nav.Link>
          <Nav.Link href="">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

function Skills() {
  return (
    <div className="skills-wrap wrap">
      <div className="title">Skills</div>
      <div className="icon-wrap">
        <img src="img/html.png" class="icon"></img>
        <img src="img/css.png" class="icon"></img>
        <img src="img/js.png" class="icon"></img>
        <img src="img/react.png" class="icon"></img>
        <img src="img/django.svg" class="icon"></img>
        <img src="img/python.png" class="icon"></img>
        <img src="img/c.png" class="icon"></img>

      </div>
    </div>
  )
}

export default App;
