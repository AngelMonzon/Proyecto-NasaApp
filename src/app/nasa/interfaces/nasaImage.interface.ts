// Generated by https://quicktype.io

export interface NasaImage {
  collection: Collection;
}

export interface Collection {
  version:  string;
  href:     string;
  items:    Item[];
  metadata: Metadata;
  links:    CollectionLink[];
}

export interface Item {
  href:  string;
  data:  Datum[];
  links: ItemLink[];
}

export interface Datum {
  center:             Center;
  title:              string;
  nasa_id:            string;
  date_created:       string;
  keywords:           string[];
  media_type:         MediaType;
  description_508?:   string;
  secondary_creator?: string;
  description:        string;
  album?:             string[];
  location?:          string;
  photographer?:      string;
}

export enum Center {
  Gsfc = "GSFC",
  Hq = "HQ",
  Jpl = "JPL",
  Jsc = "JSC",
  Msfc = "MSFC",
}

export enum MediaType {
  Image = "image",
  Video = "video",
}

export interface ItemLink {
  href:    string;
  rel:     Rel;
  render?: MediaType;
}

export enum Rel {
  Captions = "captions",
  Preview = "preview",
}

export interface CollectionLink {
  rel:    string;
  prompt: string;
  href:   string;
}

export interface Metadata {
  total_hits: number;
}