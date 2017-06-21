import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from "../../common/route.animations";

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css'],
  animations: [routeFadeStateTrigger]
})
export class UsefulLinksComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
