import { Offcanvas } from "react-bootstrap";
import "./Offcanvas.css";

export const Menu = ({ show, setShow }: { show: boolean; setShow: any }) => {
  return (
    <Offcanvas show={show} onClick={(e: any)=>{e.stopPropagation()}} onHide={()=>{setShow(false)}}>
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title className="mx-5"><img className="logo" src="logo.png" /></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <div className="container mt-3 p-5">
        <div className="row">
          <div className="col-md-6">
            <ul className="d-flex flex-column mt-3">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="mt-3">
                <a href="/university" className="big">University</a>
              </li>
              <li className="mt-3">
                <a href="/research" className="big">Research</a>
              </li>
              <li className="mt-3">
                <a href="/study" className="big">Study</a>
              </li>
              <li className="mt-3">
                <a href="/transfer" className="big">Transfer</a>
              </li>
              <li className="mt-3">
                <a href="/newsroom">Newsroom</a>
              </li>
              <li className="mt-3">
                <a href="/events">Events</a>
              </li>
              <li className="mt-3">
                <a href="/maps">Maps</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="d-flex flex-column mt-3">
              <li>
                <b>INFORMATION FOR</b>
              </li>
              <li className="mt-3">
                <a href="/alumni">Alumni</a>
              </li>
              <li className="mt-3">
                <a href="/employees">Employees</a>
              </li>
              <li className="mt-3">
                <a href="/doctoralCandidates">Doctoral Candidates</a>
              </li>
              <li className="mt-3">
                <a href="/lecturers">Lecturers</a>
              </li>
              <li className="mt-3">
                <a href="/press-media">Press & Media</a>
              </li>
              <li className="mt-3">
                <a href="/friends-supporters">Friends & Supporters</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="d-flex flex-column mt-3">
              <li>
                <b>QUICK LINKS</b>
              </li>
              <li className="mt-3">
                <a href="/institutions">Institutions</a>
              </li>
              <li className="mt-3">
                <a href="/faculties">Faculties</a>
              </li>
              <li className="mt-3">
                <a href="/international">International</a>
              </li>
              <li className="mt-3">
                <a href="/excellence-strategy">Excellence Strategy</a>
              </li>
              <li className="mt-3">
                <a href="/key-date-and-deadlines">Key Dates & Deadlines</a>
              </li>
              <li className="mt-3">
                <a href="/course-overview">Course Overview</a>
              </li>
              <li className="mt-3">
                <a href="/job-market">Job Market</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
