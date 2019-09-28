import { IPackage } from './Package';

export interface IPackageDelivered{
    package: IPackage,
    receiver: string,
    description: string,
}