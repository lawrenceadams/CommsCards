import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuOption } from "./menuOption.model";
import { routeFadeStateTrigger } from "../common/route.animations";

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.css'],
  animations: [routeFadeStateTrigger]
})
export class CardSelectorComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  menuOptions: MenuOption[] = [
    new MenuOption("Study by Year", "/studyby/year"),
    new MenuOption("Study by System", "/studyby/system"),
    new MenuOption("Study by Type", "/studyby/type")
  ]

  constructor() { }

  ngOnInit() {
  }

}
