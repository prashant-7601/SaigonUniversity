import { IoMdMail } from "react-icons/io";
import "./FloatingButtons.css";

export const ContactUsFloatingButton = () => {
  return (
    <button
      className="floating-btn contact-us-btn p-2 border-0"
      onClick={() => {
        console.log("clicked");
      }}><IoMdMail className="mx-2"/>&nbsp;Contact Us</button>
  );
};
