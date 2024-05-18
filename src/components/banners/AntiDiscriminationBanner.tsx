import { FaArrowRight } from "react-icons/fa";
import "./Banners.css";

export const AntiDiscriminationBanner = () => {
  return (
    <div className="mt-4 w-100 p-4">
      <div className="anti-discrimination-banner d-flex flex-md-row flex-column justify-content-between p-3">
        <div>
          <h4 className="title">Against Exclusion and Discrimination</h4>
          <p className="description">Science needs liberal democracy and the rule of law</p>
        </div>
        <span className="d-flex align-items-center link">
          Statement&nbsp;<FaArrowRight />
        </span>
      </div>
    </div>
  );
};
