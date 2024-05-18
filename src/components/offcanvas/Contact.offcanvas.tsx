import { Offcanvas } from "react-bootstrap";
import "./Offcanvas.css";
import { FaArrowRight } from "react-icons/fa";

export const ContactMenu = ({ show, setShow }: { show: boolean; setShow: any }) => {
  return (
    <Offcanvas
      show={show}
      onClick={(e: any) => {
        e.stopPropagation();
      }}
      onHide={() => {
        setShow(false);
      }}>
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title className="mx-5">
          <img className="logo" src="logo.png" />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="container mt-3 p-5">
          <h1>CONTACT</h1>
          <ul className="d-flex flex-column mt-5">
            <li>
              <b>COMMUNICATIONS AND MARKETING</b>
            </li>
            <li className="mt-3">
              <span>+99 9876543210</span>
            </li>
            <li className="mt-3">
              <span></span>
            </li>
            <li className="mt-3">
              <span>Saigon University</span>
            </li>
            <li className="mt-1">
              <span>HO CHI MINH City</span>
            </li>
            <li className="mt-1">
              <span>Vietnam</span>
            </li>
            <li className="mt-1">
              <span></span>
            </li>
            <li className="mt-3">
              <a href="/directions">Directions</a>
            </li>
            <li className="mt-3">
              <a className="text-white text-decoration-underline" href="mailto:support@saigonuniversity.com">support@saigonuniversity.com</a>
            </li>
            <button className="contact-button mt-4 p-3 d-flex align-items-center">
              <a href="/contact-persons">All Contact Persons&nbsp;&nbsp;&nbsp;<FaArrowRight /></a>
            </button>
          </ul>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
