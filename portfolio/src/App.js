 /*eslint-disable*/ 

import './css/App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {About} from './js/About.js'
import {Project} from './js/Project.js'

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
      <Project />
      <Contact />
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
          <Nav.Link href="">Projects</Nav.Link>
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
        <img src="img/html.png" className="icon"></img>
        <img src="img/css.png" className="icon"></img>
        <img src="img/js.png" className="icon"></img>
        <img src="img/react.png" className="icon"></img>
        <img src="img/django.svg" className="icon"></img>
        <img src="img/python.png" className="icon"></img>
        <img src="img/c.png" className="icon"></img>

      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="contact-wrap wrap">
      <div className="title">Contact</div>
      <div className="email">js980303@gmail.com</div>
      <div className="contact-icons">
        <img src="img/github.png" className="contact-icon"></img>
        <img src="img/instagram.png" className="contact-icon"></img>
        <img src="img/blog.png" className="contact-icon"></img>
      </div>
      <div className="copyright">2021 NEXT X LIKELION YANGHYORYOUNG - All rights reserved.</div>
    </div>
  )
}
export default App;
