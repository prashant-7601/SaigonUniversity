import { Form, Offcanvas } from "react-bootstrap";
import "./Offcanvas.css";

export const SearchMenu = ({ show, setShow }: { show: boolean; setShow: any }) => {
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
          <h1>Search</h1>
          <div className="">
            <Form.Control type="text" placeholder="" />
          </div>
          <h2 className="mt-5">Popular Searches:</h2>
          <ol>
            <li className="mt-3"><a href="/people">People</a></li>
            <li className="mt-3"><a href="/university-institutions">University institutions</a></li>
            <li className="mt-3"><a href="/rooms-buildings">Rooms / Buildings</a></li>
            <li className="mt-3"><a href="/course-catalogue">Course catalogue</a></li>
            <li className="mt-3"><a href="/library-catalogue">HEIDI library catalogue</a></li>
            <li className="mt-3"><a href="/phone-book">Phone book (restricted to campus network)</a></li>
          </ol>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
