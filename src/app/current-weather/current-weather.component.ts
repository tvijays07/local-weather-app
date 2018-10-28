import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  template: `
  <p>
    current-weather works!
  </p>
  `,
  styles: [''] 
  /*templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']*/
})
export class CurrentWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
