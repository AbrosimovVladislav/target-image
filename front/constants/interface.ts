export interface MenuItemData{
  label:string,
  icon:React.FC<any>;
  link?:string;
  children?: MenuItemData[]
}

export interface GenerationRequestData{
  "url": string,
  "mood": string,
  "aspectRatio": string,
  "colors": string
}