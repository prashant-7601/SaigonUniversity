import { FaArrowRight } from "react-icons/fa";
import "./Grids.css";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Faculties",
    url: "/faculties",
  },
  {
    label: "Institutions",
    url: "/institutions",
  },
  {
    label: "Research Profiles",
    url: "/research-profiles",
  },
  {
    label: "All Degree Programmes",
    url: "/degree-programmes",
  },
  {
    label: "Facts & Figures",
    url: "/facts-and-figures",
  },
  {
    label: "Deadlines & Dates",
    url: "/deadlines-and-dates",
  },
  {
    label: "Helpline",
    url: "/helpline",
  },
  {
    label: "Events",
    url: "/events",
  },
];

const LinksGrid = () => {
  return (
    <div className="grid-container p-4 border-1">
        {links.map((link)=>(
            <a className="grid-item" href={link.url}>{link.label}<br/><FaArrowRight className="icon"/></a>
        ))}
    </div>
  );
};

export default LinksGrid;
