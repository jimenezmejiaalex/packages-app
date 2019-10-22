import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Constructor
  constructor(private storage: Storage) {
  }

  // Save any object locally it needs the id for storing
  async saveObjLocally(obj: any, id: string) {
    return await this.storage.set(id, JSON.stringify(obj));
  }

  // Get any object from the local storage, It needs the id
  async getObjLocally(id: string) {
    // Retrieving the Package
    const obj = await this.storage.get(id);
    return JSON.parse(obj);
  }

  // Removing Data
  async removeData(id): Promise<boolean> {
    return await this.storage.remove(id).then(e => true).catch(er => false);
  }
}
