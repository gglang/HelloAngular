import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  get info() {
    return [
      "Service provided info 1",
      "Service provided info 2",
      "Service provided info 3"
    ]
  }
}
