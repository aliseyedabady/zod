export interface HomeItem {
  title: string;
  links: Link[];
  classNames: string;
  accessKey: string | string[];
}
export interface Link {
  to: string;
  title: string;
  accessKey: string | string[];
}
