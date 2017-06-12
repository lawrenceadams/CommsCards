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
    new MenuOption(`About <i class="right floated info icon"></i>`, "/about"),
    new MenuOption(`Legal <i class="right floated law icon"></i>`, "/legal"),
    new MenuOption(`Start Studying <i class="right floated treatment icon"></i>`, "/studyby/", "green")
  ]

  constructor() { }

  ngOnInit() {
  }

}
