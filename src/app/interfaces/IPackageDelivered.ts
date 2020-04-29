import {IPackage} from './Package';
import {ILocation} from './ILocation';

export interface IPackageDelivered {
  package: IPackage;
  time: string;
  receiver: string;
  specify: string;
  description: string;
  location: ILocation;
}
