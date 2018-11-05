import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteCities';

@Injectable()
export class FavoriteCitiesProvider {

  constructor(public storage: Storage) { }

  isFavorite(id) {
    return this.getAllFavoriteCities().then(result => {
      return result && result.indexOf(id) !== -1;
    });
  }

  favoriteCity(id) {
    return this.getAllFavoriteCities().then(result => {
      if (result && result.indexOf(id) === -1) {
        result.push(id);
        return this.storage.set(STORAGE_KEY, result);
      } else if(!result){
        return this.storage.set(STORAGE_KEY, [id]);
      }
    });
  }

  unfavoriteCity(id) {
    return this.getAllFavoriteCities().then(result => {
      if (result && result.indexOf(id) !== -1) {
        let index = result.indexOf(id);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteCities() {
    return this.storage.get(STORAGE_KEY);
  }

}
