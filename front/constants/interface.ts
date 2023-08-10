export interface MenuItemData{
  label:string,
  icon:React.FC<any>;
  link?:string;
  children?: MenuItemData[]
}