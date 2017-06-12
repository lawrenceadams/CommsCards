import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from "../common/route.animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [routeFadeStateTrigger]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
