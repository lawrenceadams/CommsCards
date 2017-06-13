import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "../card-selector/menuOption.model";
import { routeFadeStateTrigger } from "../common/route.animations";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routeFadeStateTrigger]
})
export class HomeComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  mainMenuOptions: MenuOption[] = [
    new MenuOption(`About <span class="icon is-pulled-right"><i class="fa fa-home"></i></span>`, "/about"),
    new MenuOption(`Legal`, "/legal"),
    new MenuOption(`Start Studying`, "/studyby/", "green")
  ]

  constructor() { }

  ngOnInit() {
  }

}
