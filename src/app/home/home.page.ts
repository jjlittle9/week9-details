import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public ships: any[] = []; 
  public cachedShips: any[] = [];
  
  public searchTerm: string = "";

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {

    this.httpClient.get('https://swapi.dev/api/starships/').subscribe((apiData: any) => {      
      
      const shipsWithIds = apiData.results.map( (ship: any, index: number) => {
        ship.id = index + 1
        return ship
      })

      this.ships = shipsWithIds;
    })
  }

  searchForAShip() {

    if(this.searchTerm === "" || this.searchTerm === null) {
      this.ships = this.cachedShips;
      
      this.cachedShips = null

      return
    }

    this.cachedShips = this.ships;

    this.ships = this.ships.filter( (ship: any) => {
      return ship.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    })
  }
}
