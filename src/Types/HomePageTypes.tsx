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
  BottomRow: {
    Time: string;
    Date: string;
    BtnLink: string;
  };
};
