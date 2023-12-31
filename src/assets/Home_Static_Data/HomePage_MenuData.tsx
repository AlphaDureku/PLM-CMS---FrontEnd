import { Menu } from "../../Types/HomePageTypes";
export const NavBarDataTop: Menu[] = [
  {
    Parent: "Students",
    Child: [
      { text: "Student Manual", href: "/downloads/Student%20Manual" },
      { text: "Tuition and Fees", href: "/downloads/Tuition%20and%20Fees" },
      { text: "SFES", href: "/downloads/SFES" },
      { text: "Student 201 Management System", href: "/downloads/Student%20201%20Management%20System" },
    ],
  },
  {
    Parent: "Faculty",
    Child: [
      {
        text: "Student Manual",
        href: "https://www.plm.edu.ph/images/downloads/manuals/PLM_Student_Manual_v1.pdf",
      },
      { text: "Tuition and Fees", href: "/downloads/Faculty/Tuition%20and%20Fees" },
      { text: "SFES", href: "https://web2.plm.edu.ph/sfe/" },
      { text: "Student 201 Management System", href: "/downloads/Faculty/Student%20201%20Management%20System" },
    ],
  },
  {
    Parent: "Alumni",
    Child: [
      { text: "The Alumni Association", href: "/downloads/Alumni/The%20Alumni%20Association" },
      { text: "PLM Scholars Foundation, Inc", href: "/downloads/Alumni/PLM%20Scholars%20Foundation%2C%20Inc" },
      { text: "Alumni News & Updates", href: "/downloads/Alumni/Alumni%20News%20%26%20Updates" },
      { text: "ARS", href: "/downloads/Alumni/ARS" },
    ],
  },
  {
    Parent: "Events",
    Child: [
      { text: "Student Manual", href: "/downloads/Events/Student%20Manual" },
      { text: "Tuition and Fees", href: "/downloads/Events/Tuition%20and%20Fees" },
      { text: "SFES", href: "/downloads/Events/SFES" },
      { text: "Student 201 Management System", href: "/downloads/Events/Student%20201%20Management%20System" },
    ],
  },
  {
    Parent: "Downloads",
    Child: [
      { text: "Student Manual", href: "/downloads/Downloads/Student%20Manual" },
      { text: "Tuition and Fees", href: "/downloads/Downloads/Tuition%20and%20Fees" },
      { text: "SFES", href: "/downloads/Downloads/SFES" },
      { text: "Student 201 Management System", href: "/downloads/Downloads/Student%20201%20Management%20System" },
    ],
  },
];

export const NavBarDataBottom: Menu[] = [
  {
    Parent: "About",
    Child: [
      {
        Parent: "University Profile",
        href: "/About/University%20Profile",
        Child: [
          {
            text: "Vision and Mission",
            href: "/About/UniversityProfile/Vision%20and%20Mission",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut? Voluptatibus culpa illum rem tenetur quis sunt corrupti enim quibusdam. Quam soluta consequatur recusandae nisi exercitationem mollitia cumque hic dicta?",
            ImageLink: "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            BtnLink: "/About/UniversityProfile/Vision%20and%20Mission",
          },
          {
            text: "Seal and Symbols",
            href: "/About/UniversityProfile/Seal%20and%20Symbols",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut? Voluptatibus culpa illum rem tenetur quis sunt corrupti enim quibusdam. Quam soluta consequatur recusandae nisi exercitationem mollitia cumque hic dicta?",
            ImageLink: "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            BtnLink: "/About/UniversityProfile/Seal%20and%20Symbols",
          },
          {
            text: "History",
            href: "/About/UniversityProfile/History",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut? Voluptatibus culpa illum rem tenetur quis sunt corrupti enim quibusdam. Quam soluta consequatur recusandae nisi exercitationem mollitia cumque hic dicta?",
            ImageLink: "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            BtnLink: "/About/UniversityProfile/History",
          },
          {
            text: "University Hymn",
            href: "/About/UniversityProfile/University%20Hymn",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut? Voluptatibus culpa illum rem tenetur quis sunt corrupti enim quibusdam. Quam soluta consequatur recusandae nisi exercitationem mollitia cumque hic dicta?",
            ImageLink: "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            BtnLink: "/About/UniversityProfile/University%20Hymn",
          },
          {
            text: "University Code",
            href: "/About/UniversityProfile/University%20Code",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut? Voluptatibus culpa illum rem tenetur quis sunt corrupti enim quibusdam. Quam soluta consequatur recusandae nisi exercitationem mollitia cumque hic dicta?",
            ImageLink: "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            BtnLink: "/About/UniversityProfile/University%20Code",
          },
        ],
      },
      {
        Parent: "Administration",
        href: "/About/Administration",
        Child: [
          { text: "Board of Regents", href: "/About/Administration/Board%20of%20Regents" },
          { text: "The President", href: "/About/Administration/The%20President" },
          { text: "Vice Presidents and Asst. Vice Presidents", href: "/About/Administration/Vice%20Presidents%20and%20Asst.%20Vice%20Presidents" },
          { text: "Directors and Chiefs", href: "/About/Administration/Directors%20and%20Chiefs" },
          { text: "Deans", href: "/About/Administration/Deans" },
          { text: "Organizational Chart", href: "/About/Administration/Organizational%20Chart" },
        ],
      },
      {
        Parent: "Pride Hall",
        href: "/About/PrideHall",
        Child: [
          { text: "Board Exam Passers", href: "" },
          { text: "Graduates", href: "" },
        ],
      },
    ],
  },
  {
    Parent: "Academics",
    Child: [
      { text: "CRS", href: "https://web1.plm.edu.ph/crs/" },
      { text: "GSP", href: "https://web2.plm.edu.ph/gsp/" },
      { text: "CRSCM", href: "https://web3.plm.edu.ph/crscm/" },
    ],
  },
  {
    Parent: "Admission",
    Child: [
      { text: "Undergraduate Programs", href: "" },
      { text: "PLMAT", href: "https://www.plm.edu.ph/admissions/plmat" },
      { text: "CLAT", href: "https://www.plm.edu.ph/admissions/clat" },
      {
        text: "Scholars and Financial Aid",
        href: "https://www.plm.edu.ph/admissions/scholarships",
      },
      {
        text: "International Students",
        href: "https://plm.edu.ph/community/immigration-and-visa",
      },
    ],
  },
  {
    Parent: "News",
    href: "/news",
    Child: [
      { text: "Announcements", href: "/News/Announcements" },
      { text: "Newsletter", href: "/News/Newsletter" },
      {
        text: "Message from the University President",
        href: "/News/Message%20from%20the%20University%20President",
      },
      { text: "Job Openings and Careers", href: "/News/Job%20Openings%20and%20Careers" },
    ],
  },
];
