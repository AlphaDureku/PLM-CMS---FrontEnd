import { HomeRounded } from "@mui/icons-material/";
import { IconCalendarStats } from "@tabler/icons-react";

export interface selectedProp {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinksGroupProps extends selectedProp {
  icon:
    | React.ComponentType<React.ComponentProps<typeof IconCalendarStats>>
    | React.ComponentType<React.ComponentProps<typeof HomeRounded>>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];

  keys: string;
}

export type CMSmenuProp = {
  menuOpened: boolean;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface RowData {
  id: string;
  fullName: string;
  userName: string;
  status: string;
  [key: string]: string;
}
export interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}
