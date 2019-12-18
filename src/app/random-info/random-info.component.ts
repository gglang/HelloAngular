import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-info',
  templateUrl: './random-info.component.html',
  styleUrls: ['./random-info.component.css']
})
export class RandomInfoComponent implements OnInit {

  heading = "my test heading"
  infos = [ "info1", "info2", "info3" ]
  constructor() { }

  ngOnInit() {
  }

}
