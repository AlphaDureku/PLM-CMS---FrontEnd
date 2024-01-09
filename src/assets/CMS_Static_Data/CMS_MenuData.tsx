import {
  AddToQueue,
  EmailRounded,
  HomeRounded,
  NewspaperRounded,
  PeopleAltRounded,
} from "@mui/icons-material/";

export const mockdata = [
  { label: "Dashboard", icon: HomeRounded },

  {
    label: "Posts",
    icon: NewspaperRounded,
    links: [
      { label: "View Posts", link: "/" },
      { label: "Create Posts", link: "/" },
      { label: "Manage Posts", link: "/" },
    ],
  },
  {
    label: "Manage Accounts",
    icon: PeopleAltRounded,
    initiallyOpened: true,
  },
  {
    label: "Tags",
    icon: AddToQueue,
  },
  { label: "Notifications", icon: EmailRounded },
];
