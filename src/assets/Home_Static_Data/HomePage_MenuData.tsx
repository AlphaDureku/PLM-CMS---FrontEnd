import { Menu } from "../../Types/HomePageTypes";
export const NavBarDataTop: Menu[] = [
  {
    Parent: "Students",
    Child: [
      { text: "Student Manual", href: "" },
      { text: "Tuition and Fees", href: "" },
      { text: "SFES", href: "" },
      { text: "Student 201 Management System", href: "" },
    ],
  },
  {
    Parent: "Faculty",
    Child: [
      {
        text: "Student Manual",
        href: "https://www.plm.edu.ph/images/downloads/manuals/PLM_Student_Manual_v1.pdf",
      },
      { text: "Tuition and Fees", href: "" },
      { text: "SFES", href: "https://web2.plm.edu.ph/sfe/" },
      { text: "Student 201 Management System", href: "" },
    ],
  },
  {
    Parent: "Alumni",
    Child: [
      { text: "The Alumni Association", href: "" },
      { text: "PLM Scholars Foundation, Inc", href: "" },
      { text: "Alumni News & Updates", href: "" },
      { text: "ARS", href: "" },
    ],
  },
  {
    Parent: "Events",
    Child: [
      { text: "Student Manual", href: "" },
      { text: "Tuition and Fees", href: "" },
      { text: "SFES", href: "" },
      { text: "Student 201 Management System", href: "" },
    ],
  },
  {
    Parent: "Downloads",
    Child: [
      { text: "Student Manual", href: "" },
      { text: "Tuition and Fees", href: "" },
      { text: "SFES", href: "" },
      { text: "Student 201 Management System", href: "" },
    ],
  },
];

export const NavBarDataBottom: Menu[] = [
  {
    Parent: "About",
    Child: [
      {
        Parent: "University Profile",
        Child: [
          { text: "Vision and Mission", href: "#MissionVission" },
          { text: "Seal and Symbols", href: "" },
          { text: "History", href: "" },
          { text: "University Hymn", href: "" },
          { text: "University Code", href: "" },
        ],
      },
      {
        Parent: "Administration",
        Child: [
          { text: "Board of Regents", href: "" },
          { text: "The President", href: "" },
          { text: "Vice Presidents and Asst. Vice Presidents", href: "" },
          { text: "Directors and Chiefs", href: "" },
          { text: "Deans", href: "" },
          { text: "Organizational Chart", href: "" },
        ],
      },
      {
        Parent: "Pride Hall",
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
      {text: "Scholars and Financial Aid", href: "https://www.plm.edu.ph/admissions/scholarships"},
      {text: "International Students", href: "https://plm.edu.ph/community/immigration-and-visa"}

    ],
  },
  {
    Parent: "News",
    Child: [
      { text: "Announcements", href: "" },
      { text: "Newsletter", href: "" },
      { text: "Message from the University President", href: "" },
      { text: "Job Openings / Careers", href: "" },
    ],
  },
];
