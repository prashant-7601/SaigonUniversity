import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "../../types/ImageSlider.types";
import { FaArrowRight } from "react-icons/fa";
import "./Slider.css";

export const ImageSlider = ({ data }: { data: CarouselItem[] }) => {
  return (
    <Carousel variant="light" className="hero" indicatorLabels={["hello", "buffalo"]}>
      {data.map((item, idx) => (
        <Carousel.Item className="fw-bolder">
          <img className="d-block w-100" src={item.imageSrc} alt="First slide" />
          <Carousel.Caption className={idx%2==0? "d-flex flex-column justify-content-center h-100 text-start": "d-flex flex-column justify-content-center h-100 text-end"}>
            <h5 className="mt-5 small-heading">{item.smallHeading}</h5>
            <h1 className="large-heading">{item.largeHeading}</h1>
            {item.description && <p>{item.description}</p>}
            {item.learnMoreUrl && <a className="text-white text-decoration-none mt-2 learn-more" href={item.learnMoreUrl}>Learn More <FaArrowRight /></a>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
