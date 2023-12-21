export type ShortCardObject = {
  ImageLink: string;
  Title: string;
  Description: string;
  GotoLink: string;
};

export type LongCardObject = {
  ImageLink: string;
  Title: string;
  Description: string;
  BtnLink: string;
  BottomRow?: {
    Time: string;
    Date: string;
  };
};



export type Menu = {
  Parent: string;
  href?: string;
  Child: childMenu[];
};

export type childMenu = {
  Parent?: string;
  Child?: textNLinks[];
  text?: string;
  href?: string;
};

export type textNLinks = {
  text: string;
  href: string;
};

