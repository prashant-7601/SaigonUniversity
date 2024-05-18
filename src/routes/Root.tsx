import { AntiDiscriminationBanner } from "../components/banners/AntiDiscriminationBanner";
import { AboutUsGrid } from "../components/grids/AboutUsGrid";
import LinksGrid from "../components/grids/LinksGrid";
import { ImageSlider } from "../components/slider/ImageSlider";
import { CarouselItem } from "../types/ImageSlider.types";

const ImageSliderItems: CarouselItem[] = [
    {
        smallHeading: "Welcome to",
        largeHeading: "Saigon University",
        title: "Welcome",
        description: "",
        learnMoreUrl: "",
        imageSrc: "welcome.webp"
    },
    {
        smallHeading: "Nobel prize winners",
        largeHeading: "Saigon's Nobel Prize Winners",
        title: "Nobel Prize Winners",
        description: "",
        learnMoreUrl: "/saigon-nobel-prize-winners",
        imageSrc: "nobel2.jpeg"
    },
    {
        smallHeading: "International",
        largeHeading: "Saigon's Global Influence",
        title: "International",
        description: "",
        learnMoreUrl: "/saigon-global",
        imageSrc: "international.jpg"
    },
    {
        smallHeading: "Donations & Endowments",
        largeHeading: "Your commitment for better education",
        title: "Donations & Endowments",
        description: "",
        learnMoreUrl: "/saigon-nobel-prize-winners",
        imageSrc: "donation1.jpg"
    }
]

export const Root = () => {

  return (
    <div>
      <ImageSlider data={ImageSliderItems} />
      <LinksGrid />
      <AntiDiscriminationBanner />
      <AboutUsGrid />
    </div>
  );
};
