 /*eslint-disable*/ 

import './css/App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {About} from './js/About.js'
import {Project} from './js/Project.js'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="blank"><a name="home"></a></div>
        <div className="home-wrap">
          <div>Front-end Developer</div>
          <div className="home-title">Ryoung's Portfolio</div>
          <Button className="contact-btn" href="#contact">Contact Me</Button>
        </div>
        <div className="blank"><a name="about"></a></div>
        <About />
        <div className="blank"><a name="skills"></a></div>
        <Skills />
        <div className="blank"><a name="projects"></a></div>
        <Project />
        <div className="blank"><a name="contact"></a></div>
        <Contact />
    </div>
  );
}

function TopNavbar() {
  return (
    <>
      <Navbar className="navbar-wrap">
        <Container>
        <Navbar.Brand href="#home">Ryoung <span>ε</span></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
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
        <img src="img/github.png" onClick={()=>{window.location.href="https://github.com/HyoRyoung-Yang"}} className="contact-icon"></img>
        <img src="img/instagram.png" onClick={()=>{window.location.href="https://www.instagram.com/on.__.cloud9"}} className="contact-icon"></img>
        <img src="img/blog.png" onClick={()=>{window.location.href="https://blog.naver.com/js980303"}} className="contact-icon"></img>
      </div>
      <div className="copyright">2021 NEXT X LIKELION YANGHYORYOUNG - All rights reserved.</div>
    </div>
  )
}
export default App;
