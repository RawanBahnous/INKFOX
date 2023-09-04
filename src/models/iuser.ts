export interface IUser {
  username:string;
  email:string;
  password:string;
  address?:string,
  phone?:string,
  isAdmin: boolean;
  islogged:boolean;
}
