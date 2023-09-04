export interface IManga {
  id:number,
  Title:string,
  Desc:string,
  Type:string,
  Price:number,
  quantity?:number,
  imageURL:string,
  display?: string,
  mangImgLst?:string[],
}
