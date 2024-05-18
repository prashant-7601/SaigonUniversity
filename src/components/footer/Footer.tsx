import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <ul className="d-flex flex-column mt-3">
              <li>
                <b>MAIN MENU</b>
              </li>
              <li className="mt-3">
                <a href="/university">University</a>
              </li>
              <li className="mt-3">
                <a href="/research">Research</a>
              </li>
              <li className="mt-3">
                <a href="/study">Study</a>
              </li>
              <li className="mt-3">
                <a href="/transfer">Transfer</a>
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
          <div className="col-md-3 col-sm-6">
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
          <div className="col-md-3 col-sm-6">
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
          <div className="col-md-3 col-sm-6">
            <ul className="d-flex flex-column mt-3">
              <li>
                <b>CONTACT</b>
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
            </ul>
          </div>
        </div>
      </div>
      <div className="license d-none d-sm-flex justify-content-between bg-black px-3 py-2 align-items-center">
        <img className="rounded-circle" src="logo.png" height={50} width={50}/>
        <div className="d-flex">
            <FaFacebook className="mx-2 fs-5"/>
            <FaTwitter className="mx-2 fs-5"/>
            <FaInstagram className="mx-2 fs-5"/>
            <FaLinkedin className="mx-2 fs-5"/>
            <FaYoutube className="mx-2 fs-5"/>
        </div>
        <p>&copy; {new Date().getFullYear()} Saigon University</p>
      </div>
      <div className="license d-flex flex-column d-sm-none bg-black px-3 py-2 align-items-center text-center">
        <img className="rounded-circle" src="logo.png" height={50} width={50}/>
        <div className="d-flex mt-3">
            <FaFacebook className="mx-2 fs-5"/>
            <FaTwitter className="mx-2 fs-5"/>
            <FaInstagram className="mx-2 fs-5"/>
            <FaLinkedin className="mx-2 fs-5"/>
            <FaYoutube className="mx-2 fs-5"/>
        </div>
        <p className="mt-3">&copy; {new Date().getFullYear()} Saigon University</p>
      </div>
    </footer>
  );
};
