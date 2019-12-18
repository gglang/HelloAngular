import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-random-info',
  templateUrl: './random-info.component.html',
  styleUrls: ['./random-info.component.css']
})
export class RandomInfoComponent implements OnInit {
  heading = "my test heading"
  infos: string[];

  // This service dependency is provided by Angular's built in DI framework
  constructor(infoService: InfoService) {
    this.infos = infoService.info;
  }

  ngOnInit() {
  }

}
