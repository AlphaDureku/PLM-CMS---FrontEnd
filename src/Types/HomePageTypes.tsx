export type ShortCardObject = {
  ImageLink: string;
  Title: string;
  Description: string;
  GotoLink: string;
};

export type LongCardWithoutBottomRowObject = {
  ImageLink: string;
  Title: string;
  Description: string;
  BtnLink: string;

};

export type LongCardObject = LongCardWithoutBottomRowObject & {
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

