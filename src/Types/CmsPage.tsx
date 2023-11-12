import { HomeRounded } from "@mui/icons-material/";
import { IconCalendarStats } from "@tabler/icons-react";

export interface LinksGroupProps {
  icon:
    | React.ComponentType<React.ComponentProps<typeof IconCalendarStats>>
    | React.ComponentType<React.ComponentProps<typeof HomeRounded>>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  keys: string;
}
