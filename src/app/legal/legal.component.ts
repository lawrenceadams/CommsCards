import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from "../common/route.animations";

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css'],
  animations: [routeFadeStateTrigger]
})
export class LegalComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
