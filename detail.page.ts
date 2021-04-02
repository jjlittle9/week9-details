import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // public ship: any = {};
  public shipDetail: any= {};

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getStarWarsDetails();
  }

  getStarWarsDetails() {

    const starWarsId = +this.route.snapshot.paramMap.get('id');
  
    this.httpClient.get(`https://swapi.dev/api/starships/${starWarsId}`).subscribe( (ship: any) => {
      console.log(ship);
      this.shipDetail = ship;
    });
  }

}
