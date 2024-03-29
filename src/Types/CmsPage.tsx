import { HomeRounded } from "@mui/icons-material/";
import { IconCalendarStats } from "@tabler/icons-react";
import { useSearchParams } from "react-router-dom";

export interface selectedProp {
  selected: string | null;
  // setSelected: React.Dispatch<React.SetStateAction<string>>;
  // setSelected: () => void;
  setSelected: ReturnType<typeof useSearchParams>[1];
  setSelectedGrandChild: any
}

export interface LinksGroupProps extends selectedProp {
  icon:
  | React.ComponentType<React.ComponentProps<typeof IconCalendarStats>>
  | React.ComponentType<React.ComponentProps<typeof HomeRounded>>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  setSelectedGrandChild: any;
  keys: string;
}

export type CMSmenuProp = {
  menuOpened: boolean;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface RowData {
  [key: string]: string;
}

export interface ManageAccountRowData extends RowData {
  id: string;
  fullName: string;
  userName: string;
  status: string;
  role: string;
}

export interface TagsRowData extends RowData {
  id: string;
  name: string;
  description: string;
}

export interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

type searchBarProps = {
  reverseSortDirection: boolean;
  sortBy: keyof RowData | null;
  placeholder: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export interface ManageAccountsProps extends searchBarProps {
  data: Array<{
    id: string;
    fullName: string;
    userName: string;
    status: string;
    role: string;
  }>;
  setSortedData: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: string;
        fullName: string;
        userName: string;
        status: string;
      }>
    >
  >;
}

export interface TagsProps extends searchBarProps {
  data: Array<{
    name: "string";
    description: string;
  }>;
  setSortedData: React.Dispatch<
    React.SetStateAction<
      Array<{
        name: "string";
        description: string;
      }>
    >
  >;
}

export type accountType = {
  id: string;
  fullName: string;
  userName: string;
  status: string;
  accountType?: string;
  permissions?: number[];
};

// Log In
export interface PasswordFormProps {
  value: string;
  onChange: (value: string) => void;
}

export interface UsernameFormProps {
  value: string;
  onChange: (value: string) => void;
}

export type notificationsData = {
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
};