import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

// Or Access Link,Element,etc as follows
// let Link      = Scroll.Link;

export default function NavigationBar() {
  return (

    <div className='Navbar'>
      <nav>
        <ul className='horizontal-navbar'>
          <li>
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              About me
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    // <>
    //   <Navbar bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand href="home">Ilija Gracanin</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="home">Home</Nav.Link>
    //         <Nav.Link href="about_me">About me</Nav.Link>
    //         <Nav.Link href="projects">Projects</Nav.Link>
    //         <Nav.Link href="contact_me">Contact me</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </>
  )
}
