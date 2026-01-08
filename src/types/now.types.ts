export type NowPost = {
  title: string;
  date: string;
  content: string[];
  images?: string[];
  links?: NowPostLink[];
};

export type NowPostLink = {
  url: string;
  label: string;
};
