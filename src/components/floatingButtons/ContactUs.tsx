import { IoMdMail } from "react-icons/io";
import "./FloatingButtons.css";
import { useState } from "react";
import { ContactMenu } from "../offcanvas/Contact.offcanvas";

export const ContactUsFloatingButton = () => {
  const [showContactMenu, setShowContactMenu] = useState<boolean>(false);
  return (
    <>
      <button
        className="floating-btn contact-us-btn p-2 border-0"
        onClick={() => {
          setShowContactMenu(true);
        }}>
        <IoMdMail className="mx-2" />
        &nbsp;Contact Us
      </button>
      <ContactMenu show={showContactMenu} setShow={setShowContactMenu} />
    </>
  );
};
