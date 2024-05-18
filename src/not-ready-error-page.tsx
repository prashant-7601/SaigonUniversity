import { FaArrowRight } from "react-icons/fa";

export const NotReadyYetPage = () => {
  return (
    <div className="error-page d-flex flex-column align-items-center text-center justify-content-center">
      <h1>This page is not ready for demonstration!</h1>
      <span>You can check the home page!</span>
      <button className="home-button mt-3 px-3 py-2"><a href="/">Home&nbsp;&nbsp;<FaArrowRight /></a></button>
    </div>
  );
};
