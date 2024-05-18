import { FaArrowRight } from "react-icons/fa";

type OtherLinks = {
  label: string;
  url: string;
};

type AboutUsItem = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  linkLabel: string;
  otherLinks: OtherLinks[];
};

const AboutUsItems: AboutUsItem[] = [
  {
    title: "UNIVERSITY",
    description:
      "Founded in 1386, Ruperto Carola is the oldest university in today's Germany and one of Europe’s leading research institutions. Its success across all funding rounds of the Excellence Competition and international rankings underscore its leadership role and excellent reputation in the academic, scientific and research landscape.",
    imageUrl: "welcome.webp",
    link: "/university-portal",
    linkLabel: "University Portal",
    otherLinks: [
      {
        label: "History of the University",
        url: "/history",
      },
      {
        label: "Facts & Figures",
        url: "/facts-and-figures",
      },
      {
        label: "Heidelberg Profiles",
        url: "/profiles",
      },
    ],
  },
  {
    title: "RESEARCH",
    description:
      "Heidelberg University defines itself as an internationally networked research university dedicated to research-oriented teaching. It believes it has a duty to help address the issues facing humanity by crossing the divide between disciplines.",
    imageUrl: "research.jpeg",
    link: "/research-portal",
    linkLabel: "Research Portal",
    otherLinks: [
      {
        label: "Research Profile of the University",
        url: "/research-profile",
      },
      {
        label: "Promoting Young Researchers",
        url: "/promoting-young-researchers",
      },
      {
        label: "Fields of Focus",
        url: "/field-of-focus",
      },
    ],
  },
  {
    title: "STUDY",
    description:
      "Courses of study at Heidelberg University are informed by its strong research focus and are designed to accustom students to independent research practices early on. With over 160 fields of study, it offers the broad spectrum of subjects representative of a comprehensive university as well as abundant opportunities to acquire a singular and internationally competitive qualification profile.",
    imageUrl: "study.jpg",
    link: "/study-portal",
    linkLabel: "Study Portal",
    otherLinks: [
      {
        label: "Degree Programmes",
        url: "/dergee-programmes",
      },
      {
        label: "International Study",
        url: "/international-study",
      },
      {
        label: "Applying & Enrolment",
        url: "/enroll",
      },
    ],
  },
  {
    title: "TRANSFER",
    description: "The exchange between basic research and technological innovation as well as the targeted transfer of knowledge and insights into society are the focus of the transfer activities.",
    imageUrl: "transfer.jpg",
    link: "/transfer-portal",
    linkLabel: "Transfer Portal",
    otherLinks: [
      {
        label: "Research City",
        url: "/reseach-city",
      },
      {
        label: "Technology Transfer",
        url: "/technology-transfer",
      },
      {
        label: "Communication",
        url: "/communication",
      },
    ],
  },
];

export const AboutUsGrid = () => {
  return (
    <div className="container about-us-grid">
      {AboutUsItems.map((item, idx) => (
        <div className={idx%2==0? "d-flex flex-md-row flex-column-reverse mt-3 p-5": "d-flex flex-md-row-reverse flex-column-reverse mt-3 p-5"} key={idx}>
          <div className="col-md-5 py-3 px-md-5 mt-3 mt-md-0">
            <h1 className="title">{item.title}</h1>
            <p className="description">{item.description}</p>
            <ul className="flex flex-column links">
              {item.otherLinks.map((link) => (
                <li className="d-flex w-100 flex-row justify-content-between my-2 align-items-center py-3">
                  <a href={link.url}>{link.label}</a>
                  <FaArrowRight className="arrow"/>
                </li>
              ))}
            </ul>
            <button className="portal-button p-3 d-flex align-items-center">
              <a href={item.link}>{item.linkLabel}&nbsp;&nbsp;&nbsp;<FaArrowRight /></a>
            </button>
          </div>
          <div className="col-md-7 overflow-hidden">
            <img src={item.imageUrl} className="h-100 w-100 img" />
          </div>
        </div>
      ))}
    </div>
  );
};
