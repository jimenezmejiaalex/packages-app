import {ILocation} from './ILocation';

export interface IUser {
  username: string;
  password: string;
  location: ILocation;
  time: string;
}
