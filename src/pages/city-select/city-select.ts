import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import {FavoriteCitiesProvider} from "../../providers/favorite-cities/favorite-cities";


/**
 * Generated class for the CitySelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city-select',
  templateUrl: 'city-select.html',
})
export class CitySelectPage {

  cities: Array<any>;
  error: string;
  selected: Array<boolean>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, private file: File, public favoriteCities: FavoriteCitiesProvider) {

  }

  ionViewWillEnter(){
    this.file.readAsText(this.file.applicationDirectory + "www/assets/datas", "city.list.json")
      .then(result => {
        this.cities = JSON.parse(result);
        this.selected = new Array<boolean>();
        this.favoriteCities.getAllFavoriteCities()
          .then(results => {
            for(let cityId of results ){
              this.selected[cityId] = true;
            }
          });
      })
      .catch( error => this.error = error);
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  select(id: string){
    if(!this.selected[id])
      this.favoriteCities.unfavoriteCity(id);
    else
      this.favoriteCities.favoriteCity(id);
  }

}
