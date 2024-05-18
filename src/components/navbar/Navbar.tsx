import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import "./Navbar.css";

export const NavBar = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setShowFixedNavbar(currentScrollTop < lastScrollTop && currentScrollTop > 60);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Navbar variant={showFixedNavbar ? "light" : "dark"} collapseOnSelect expand="md" className={showFixedNavbar ? "bg-body-tertiary navbar fixed" : "bg-body-tertiary navbar absolute"}>
      <Container>
        <Nav className="d-flex flex-row">
          <FaBars className="nav__icon mx-3" />
          <FaSearch className="mx-3" />
        </Nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/university" className="mx-2">
              University
            </Nav.Link>
            <Nav.Link href="/research" className="mx-2">
              Research
            </Nav.Link>
            <Nav.Link href="/study" className="mx-2">
              Study
            </Nav.Link>
            <Nav.Link href="/transfer" className="mx-2">
              Transfer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="/">
            <img className="logo" src="logo.png" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
